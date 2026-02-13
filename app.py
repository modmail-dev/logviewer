__version__ = "1.1.3"

import html
import os

from bson import ObjectId
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorGridFSBucket
from sanic import Sanic, response
from sanic.exceptions import NotFound
from jinja2 import Environment, FileSystemLoader

from core.models import LogEntry, build_archive_lookup

load_dotenv()

if "URL_PREFIX" in os.environ:
    print("Using the legacy config var `URL_PREFIX`, rename it to `LOG_URL_PREFIX`")
    prefix = os.environ["URL_PREFIX"]
else:
    prefix = os.getenv("LOG_URL_PREFIX", "/logs")

if prefix == "NONE":
    prefix = ""

MONGO_URI = os.getenv("MONGO_URI") or os.getenv("CONNECTION_URI")
if not MONGO_URI:
    print("No CONNECTION_URI config var found. "
          "Please enter your MongoDB connection URI in the configuration or .env file.")
    exit(1)

app = Sanic(__name__)
app.static("/static", "./static")

jinja_env = Environment(loader=FileSystemLoader("templates"))


def render_template(name, *args, **kwargs):
    template = jinja_env.get_template(name + ".html")
    return response.html(template.render(*args, **kwargs))


app.ctx.render_template = render_template


def strtobool(val):
    """
    Copied from distutils.strtobool.

    Convert a string representation of truth to true (1) or false (0).

    True values are 'y', 'yes', 't', 'true', 'on', and '1'; false values
    are 'n', 'no', 'f', 'false', 'off', and '0'.  Raises ValueError if
    'val' is anything else.
    """
    val = val.lower()
    if val in ('y', 'yes', 't', 'true', 'on', '1'):
        return 1
    elif val in ('n', 'no', 'f', 'false', 'off', '0'):
        return 0
    else:
        raise ValueError("invalid truth value %r" % (val,))


SAVE_ATTACHMENTS = strtobool(os.getenv("SAVE_ATTACHMENTS", "no"))
ARCHIVE_INTERVAL = int(os.getenv("ARCHIVE_INTERVAL", "600"))
ARCHIVE_MAX_FILE_SIZE = int(os.getenv("ARCHIVE_MAX_FILE_SIZE", str(25 * 1024 * 1024)))
ARCHIVE_RETENTION = os.getenv("ARCHIVE_RETENTION", "forever").strip().lower()
ARCHIVE_COMPRESS_IMAGES = strtobool(os.getenv("ARCHIVE_COMPRESS_IMAGES", "yes"))
ARCHIVE_IMAGE_QUALITY = int(os.getenv("ARCHIVE_IMAGE_QUALITY", "65"))
ARCHIVE_IMAGE_MAX_RESOLUTION = int(os.getenv("ARCHIVE_IMAGE_MAX_RESOLUTION", "1920"))


@app.listener("before_server_start")
async def init(app, loop):
    app.ctx.db = AsyncIOMotorClient(MONGO_URI).modmail_bot
    use_attachment_proxy = strtobool(os.getenv("USE_ATTACHMENT_PROXY", "no"))
    if use_attachment_proxy:
        app.ctx.attachment_proxy_url = os.getenv("ATTACHMENT_PROXY_URL", "https://cdn.discordapp.xyz")
        app.ctx.attachment_proxy_url = html.escape(app.ctx.attachment_proxy_url).rstrip("/")
    else:
        app.ctx.attachment_proxy_url = None

    # Attachment archival setup
    app.ctx.save_attachments = bool(SAVE_ATTACHMENTS)
    if app.ctx.save_attachments:
        app.ctx.fs = AsyncIOMotorGridFSBucket(app.ctx.db, bucket_name="attachments")
        await app.ctx.db.archived_attachments.create_index("original_url", unique=True)
        await app.ctx.db.archived_attachments.create_index("status")
        await app.ctx.db.archived_attachments.create_index("archived_at")
    else:
        app.ctx.fs = None


@app.listener("after_server_start")
async def start_archiver(app, loop):
    if app.ctx.save_attachments:
        from core.archiver import run_archiver_loop
        archiver_config = {
            "interval": ARCHIVE_INTERVAL,
            "max_file_size": ARCHIVE_MAX_FILE_SIZE,
            "retention": ARCHIVE_RETENTION,
            "compress_images": bool(ARCHIVE_COMPRESS_IMAGES),
            "image_quality": ARCHIVE_IMAGE_QUALITY,
            "image_max_resolution": ARCHIVE_IMAGE_MAX_RESOLUTION,
        }
        app.add_task(run_archiver_loop(app, archiver_config))


@app.exception(NotFound)
async def not_found(request, exc):
    return render_template("not_found")


@app.get("/")
async def index(request):
    return render_template("index")


@app.get(prefix + "/raw/<key>")
async def get_raw_logs_file(request, key):
    """Returns the plain text rendered log entry"""
    document = await app.ctx.db.logs.find_one({"key": key})

    if document is None:
        raise NotFound

    archive_lookup = await build_archive_lookup(app, document)
    log_entry = LogEntry(app, document, archive_lookup=archive_lookup)

    return log_entry.render_plain_text()


@app.get(prefix + "/<key>")
async def get_logs_file(request, key):
    """Returns the html rendered log entry"""
    document = await app.ctx.db.logs.find_one({"key": key})

    if document is None:
        raise NotFound

    archive_lookup = await build_archive_lookup(app, document)
    log_entry = LogEntry(app, document, archive_lookup=archive_lookup)

    return log_entry.render_html()


@app.get("/attachments/<file_id>/<filename>")
async def serve_attachment(request, file_id, filename):
    """Serve an archived attachment from GridFS."""
    if not app.ctx.save_attachments or app.ctx.fs is None:
        raise NotFound

    try:
        oid = ObjectId(file_id)
    except Exception:
        raise NotFound

    try:
        grid_out = await app.ctx.fs.open_download_stream(oid)
    except Exception:
        raise NotFound

    content_type = "application/octet-stream"
    if grid_out.metadata:
        content_type = grid_out.metadata.get("content_type", content_type)

    data = await grid_out.read()
    return response.raw(
        data,
        content_type=content_type,
        headers={
            "Content-Disposition": f'inline; filename="{filename}"',
            "Cache-Control": "public, max-age=31536000, immutable",
        },
    )


if __name__ == "__main__":
    app.run(
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", 8000)),
        debug=bool(os.getenv("DEBUG", False)),
    )
