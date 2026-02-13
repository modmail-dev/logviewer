"""
Background task that archives Discord CDN attachments and avatars to MongoDB GridFS.

When enabled via SAVE_ATTACHMENTS=yes, this module periodically scans the logs collection
for Discord CDN URLs, downloads them before they expire (~24h), and stores them in GridFS.

Features:
- Image compression: Converts images to optimized JPEG to minimize storage
- Retention policy: Auto-deletes archived files after a configurable period
"""

import asyncio
import io
import logging
import re
from datetime import datetime, timedelta, timezone

import aiohttp
from pymongo.errors import DuplicateKeyError

logger = logging.getLogger("logviewer.archiver")

DISCORD_CDN_PATTERN = re.compile(
    r"https?://(?:cdn\.discordapp\.com|media\.discordapp\.net)/"
)

COMPRESSIBLE_TYPES = {"image/png", "image/jpeg", "image/webp", "image/bmp", "image/tiff"}

CONTENT_TYPE_MAP = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mp3": "audio/mpeg",
    ".ogg": "audio/ogg",
    ".wav": "audio/wav",
    ".pdf": "application/pdf",
    ".txt": "text/plain",
}

RETENTION_MAP = {
    "1w": timedelta(weeks=1),
    "1week": timedelta(weeks=1),
    "1m": timedelta(days=30),
    "1month": timedelta(days=30),
    "1y": timedelta(days=365),
    "1year": timedelta(days=365),
    "forever": None,
}


def parse_retention(value):
    """Parse retention string to timedelta. Returns None for 'forever'."""
    td = RETENTION_MAP.get(value)
    if td is None and value != "forever":
        logger.warning("Unknown ARCHIVE_RETENTION value '%s', defaulting to 'forever'", value)
    return td


def guess_content_type(filename, response_content_type=None):
    if response_content_type and response_content_type != "application/octet-stream":
        return response_content_type
    for ext, ctype in CONTENT_TYPE_MAP.items():
        if filename.lower().endswith(ext):
            return ctype
    return "application/octet-stream"


def strip_query_params(url):
    """Return URL without query parameters (Discord's signed params change but the path is stable)."""
    return url.split("?")[0]


def compress_image(image_data, content_type, quality, max_resolution):
    """
    Compress an image to JPEG with optimized settings for minimal file size.

    Strategy:
    - Convert to RGB (JPEG doesn't support alpha)
    - Downscale if either dimension exceeds max_resolution
    - Save as progressive JPEG at the configured quality
    - Strip all EXIF/metadata

    Returns (compressed_bytes, "image/jpeg") or (original_data, original_type) if compression fails or is larger.
    """
    try:
        from PIL import Image

        img = Image.open(io.BytesIO(image_data))

        # Skip animated images (GIFs with multiple frames)
        if getattr(img, "n_frames", 1) > 1:
            return image_data, content_type

        # Convert to RGB (drop alpha channel for JPEG)
        if img.mode in ("RGBA", "P", "LA"):
            background = Image.new("RGB", img.size, (54, 57, 63))  # Discord dark bg color
            if img.mode == "P":
                img = img.convert("RGBA")
            if img.mode in ("RGBA", "LA"):
                background.paste(img, mask=img.split()[-1])
                img = background
            else:
                img = img.convert("RGB")
        elif img.mode != "RGB":
            img = img.convert("RGB")

        # Downscale if too large (preserve aspect ratio)
        w, h = img.size
        if max(w, h) > max_resolution:
            if w > h:
                new_w = max_resolution
                new_h = int(h * (max_resolution / w))
            else:
                new_h = max_resolution
                new_w = int(w * (max_resolution / h))
            img = img.resize((new_w, new_h), Image.LANCZOS)

        # Save as optimized progressive JPEG
        buf = io.BytesIO()
        img.save(
            buf,
            format="JPEG",
            quality=quality,
            optimize=True,
            progressive=True,
            subsampling="4:2:0",  # Maximum chroma subsampling for smallest size
        )
        compressed = buf.getvalue()

        # Only use compressed version if it's actually smaller
        if len(compressed) < len(image_data):
            logger.debug(
                "Compressed image: %d -> %d bytes (%.0f%% reduction)",
                len(image_data), len(compressed),
                (1 - len(compressed) / len(image_data)) * 100
            )
            return compressed, "image/jpeg"

        return image_data, content_type

    except Exception as e:
        logger.warning("Image compression failed, storing original: %s", e)
        return image_data, content_type


async def download_and_store(app, session, url, filename, config):
    """Download a URL and store it in GridFS. Returns GridFS ObjectId on success, None on failure."""
    max_size = config["max_file_size"]
    try:
        async with session.get(url, timeout=aiohttp.ClientTimeout(total=120)) as resp:
            if resp.status == 404:
                logger.warning("Attachment 404: %s", strip_query_params(url))
                return "404"
            if resp.status != 200:
                logger.warning("Download failed (HTTP %d): %s", resp.status, strip_query_params(url))
                return None

            content_length = resp.content_length
            if content_length and content_length > max_size:
                logger.info("Skipping oversized attachment (%d bytes): %s", content_length, strip_query_params(url))
                return "oversized"

            content_type = guess_content_type(filename, resp.content_type)

            # Read entire file for potential compression
            data = await resp.read()
            if len(data) > max_size:
                logger.info("Skipping oversized attachment (%d bytes): %s", len(data), strip_query_params(url))
                return "oversized"

            # Compress images if enabled
            stored_filename = filename
            if config["compress_images"] and content_type in COMPRESSIBLE_TYPES:
                data, content_type = compress_image(
                    data, content_type,
                    quality=config["image_quality"],
                    max_resolution=config["image_max_resolution"],
                )
                # Update filename extension if we converted to JPEG
                if content_type == "image/jpeg" and not filename.lower().endswith((".jpg", ".jpeg")):
                    stored_filename = filename.rsplit(".", 1)[0] + ".jpg" if "." in filename else filename + ".jpg"

            grid_in = app.ctx.fs.open_upload_stream(
                stored_filename,
                metadata={
                    "content_type": content_type,
                    "original_url": strip_query_params(url),
                    "archived_at": datetime.now(timezone.utc),
                    "original_size": len(data),
                },
            )

            try:
                await grid_in.write(data)
                await grid_in.close()
            except Exception:
                await grid_in.abort()
                raise

            logger.info("Archived: %s -> GridFS %s (%d bytes)", strip_query_params(url), grid_in._id, len(data))
            return grid_in._id

    except asyncio.TimeoutError:
        logger.warning("Timeout downloading: %s", strip_query_params(url))
        return None
    except aiohttp.ClientError as e:
        logger.warning("Client error downloading %s: %s", strip_query_params(url), e)
        return None
    except Exception as e:
        logger.error("Unexpected error archiving %s: %s", strip_query_params(url), e, exc_info=True)
        return None


async def _record_result(db, canonical_url, filename, result):
    """Record the archival result in the archived_attachments collection."""
    try:
        if result == "404":
            await db.archived_attachments.insert_one({
                "original_url": canonical_url,
                "filename": filename,
                "status": "failed_permanent",
                "reason": "404_not_found",
                "failed_at": datetime.now(timezone.utc),
            })
        elif result == "oversized":
            await db.archived_attachments.insert_one({
                "original_url": canonical_url,
                "filename": filename,
                "status": "failed_permanent",
                "reason": "oversized",
                "failed_at": datetime.now(timezone.utc),
            })
        elif result is not None:
            await db.archived_attachments.insert_one({
                "original_url": canonical_url,
                "gridfs_id": result,
                "filename": filename,
                "status": "archived",
                "archived_at": datetime.now(timezone.utc),
            })
        # If result is None (transient failure), don't record - will retry next cycle
    except DuplicateKeyError:
        pass  # Another instance archived it first


async def archive_attachments_batch(app, session, config):
    """Scan logs for unarchived attachment URLs and archive them."""
    db = app.ctx.db

    logger.info("Attachment archiver: scanning for unarchived attachments...")

    cursor = db.logs.find(
        {"messages.attachments.0": {"$exists": True}},
        {"messages.attachments": 1, "key": 1},
    ).batch_size(50)

    count_archived = 0
    count_skipped = 0
    count_failed = 0
    count_404 = 0
    logs_scanned = 0

    async for doc in cursor:
        logs_scanned += 1
        for message in doc.get("messages", []):
            for att in message.get("attachments", []):
                if isinstance(att, str):
                    url = att
                    filename = "attachment"
                elif isinstance(att, dict):
                    url = att.get("url", "")
                    filename = att.get("filename", "attachment")
                else:
                    continue

                if not url or not DISCORD_CDN_PATTERN.match(url):
                    continue

                canonical_url = strip_query_params(url)

                existing = await db.archived_attachments.find_one({"original_url": canonical_url})
                if existing:
                    count_skipped += 1
                    continue

                logger.info("Attachment archiver: archiving %s from log %s", filename, doc.get("key", "?"))
                result = await download_and_store(app, session, url, filename, config)
                await _record_result(db, canonical_url, filename, result)

                if result is not None and result not in ("404", "oversized"):
                    count_archived += 1
                elif result == "404":
                    count_404 += 1
                else:
                    count_failed += 1

                await asyncio.sleep(0.5)

    logger.info(
        "Attachment archiver: scan complete - %d logs scanned, %d archived, %d already archived, %d expired (404), %d failed",
        logs_scanned, count_archived, count_skipped, count_404, count_failed,
    )


async def archive_avatars_batch(app, session, config):
    """Scan logs for unarchived avatar URLs and archive them."""
    db = app.ctx.db

    logger.info("Attachment archiver: scanning for unarchived avatars...")

    cursor = db.logs.find(
        {},
        {
            "creator.avatar_url": 1,
            "recipient.avatar_url": 1,
            "closer.avatar_url": 1,
            "messages.author.avatar_url": 1,
            "key": 1,
        },
    ).batch_size(50)

    seen_urls = set()
    count_archived = 0
    count_skipped = 0
    count_failed = 0
    count_404 = 0
    logs_scanned = 0

    async for doc in cursor:
        logs_scanned += 1
        avatar_urls = []

        for field in ("creator", "recipient", "closer"):
            user_data = doc.get(field)
            if user_data and isinstance(user_data, dict):
                avatar_url = user_data.get("avatar_url", "")
                if avatar_url:
                    avatar_urls.append(avatar_url)

        for message in doc.get("messages", []):
            author = message.get("author")
            if author and isinstance(author, dict):
                avatar_url = author.get("avatar_url", "")
                if avatar_url:
                    avatar_urls.append(avatar_url)

        for url in avatar_urls:
            if not DISCORD_CDN_PATTERN.match(url):
                continue

            canonical_url = strip_query_params(url)
            if canonical_url in seen_urls:
                continue
            seen_urls.add(canonical_url)

            existing = await db.archived_attachments.find_one({"original_url": canonical_url})
            if existing:
                count_skipped += 1
                continue

            url_path = canonical_url.rsplit("/", 1)[-1] if "/" in canonical_url else "avatar.png"
            logger.info("Attachment archiver: archiving avatar %s from log %s", url_path, doc.get("key", "?"))
            result = await download_and_store(app, session, url, url_path, config)
            await _record_result(db, canonical_url, url_path, result)

            if result is not None and result not in ("404", "oversized"):
                count_archived += 1
            elif result == "404":
                count_404 += 1
            else:
                count_failed += 1

            await asyncio.sleep(0.5)

    logger.info(
        "Attachment archiver: avatar scan complete - %d logs scanned, %d archived, %d already archived, %d expired (404), %d failed",
        logs_scanned, count_archived, count_skipped, count_404, count_failed,
    )


async def cleanup_expired(app, retention_delta):
    """Delete archived attachments older than the retention period."""
    if retention_delta is None:
        return  # "forever" - no cleanup

    db = app.ctx.db
    cutoff = datetime.now(timezone.utc) - retention_delta

    cursor = db.archived_attachments.find(
        {"status": "archived", "archived_at": {"$lt": cutoff}},
        {"gridfs_id": 1, "original_url": 1},
    )

    count_deleted = 0
    async for record in cursor:
        gridfs_id = record.get("gridfs_id")
        if gridfs_id:
            try:
                await app.ctx.fs.delete(gridfs_id)
            except Exception as e:
                logger.warning("Failed to delete GridFS file %s: %s", gridfs_id, e)

        await db.archived_attachments.delete_one({"_id": record["_id"]})
        count_deleted += 1

    if count_deleted > 0:
        logger.info("Retention cleanup: deleted %d expired archives (cutoff: %s)", count_deleted, cutoff.isoformat())


async def run_archiver_loop(app, config):
    """Main archiver loop. Runs indefinitely, sleeping between scans."""
    interval = config["interval"]
    retention_delta = parse_retention(config["retention"])

    logger.info(
        "Attachment archiver started (interval=%ds, max_size=%d bytes, retention=%s, compress=%s, quality=%d, max_res=%d)",
        interval, config["max_file_size"], config["retention"],
        config["compress_images"], config["image_quality"], config["image_max_resolution"],
    )

    await asyncio.sleep(5)  # Let the server fully start

    while True:
        try:
            logger.info("Attachment archiver: starting scan cycle")
            async with aiohttp.ClientSession(
                headers={"User-Agent": "ModmailLogviewer/1.0 (attachment archiver)"}
            ) as session:
                await archive_attachments_batch(app, session, config)
                await archive_avatars_batch(app, session, config)
            await cleanup_expired(app, retention_delta)
            logger.info("Attachment archiver: cycle complete, next scan in %ds", interval)
        except asyncio.CancelledError:
            logger.info("Attachment archiver: task cancelled, shutting down")
            return
        except Exception as e:
            logger.error("Attachment archiver: loop error: %s", e, exc_info=True)

        await asyncio.sleep(interval)
