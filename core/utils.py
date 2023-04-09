from functools import wraps

from datetime import datetime, timezone
import dateutil.parser
from natural.date import duration

import os
from dotenv import load_dotenv

load_dotenv()

def loglist():
    def decorator(func):
        @wraps(func)
        async def wrapper(request):
            app = request.app
            
            config = await app.ctx.db.config.find_one()

            logs_per_page = 25

            if "PAGINATION" in os.environ:
                try:
                    logs_per_page = int(os.environ["PAGINATION"])
                except ValueError:
                    print("Invalid PAGINATION config var (must be a number). Defaulting to 25.")

            collection = app.ctx.db.logs

            try:
                page = int(request.args.get("page", 1))
                if page < 1: page = 1
            except ValueError:
                page = 1

            def parse_date(date):
                date = dateutil.parser.parse(date).astimezone(timezone.utc)
                timestamp = duration(date, datetime.now(timezone.utc))
                return timestamp

            async def find():

                filter_ = {"bot_id": str(config["bot_id"])}

                count_all = await collection.count_documents(filter=filter_)

                status_open = request.args.get("open")

                if status_open == "false":
                    filter_["open"] = False
                elif status_open == "true":
                    filter_["open"] = True
                else: status_open = None

                if request.args.get("search"): 
                    search = request.args.get("search")
                    filter_["$text"] = { "$search": search }

                projection_ = {
                    "key": 1,
                    "open": 1,
                    "created_at": 1,
                    "closed_at": 1,
                    "recipient": 1,
                    "creator": 1,
                    "title": 1,
                    "last_message": { "$arrayElemAt": [ "$messages", -1 ] },
                    "message_count": { "$size": "$messages" },
                    "nsfw": 1
                }

                cursor = collection.find(filter=filter_, projection=projection_, skip=(page-1)*logs_per_page).sort(
                    "created_at", -1
                )

                count = await collection.count_documents(filter=filter_)

                max_page = count // logs_per_page
                if (count % logs_per_page) > 0: max_page += 1

                items = await cursor.to_list(length=logs_per_page)
                
                # iterate over list to change timestamps to readable format
                for index, item in enumerate(items):
                    creation_date = item.get('created_at')
                    items[index].update(created_at=parse_date(creation_date))
                    close_date = item.get('closed_at')

                    if close_date is not None:
                        items[index].update(closed_at=parse_date(close_date))

                    try:
                        last_message = items[index].get("last_message")
                        last_message_duration = parse_date(
                            last_message.get("timestamp")
                        )
                        items[index]["last_message_time"] = last_message_duration
                    except Exception:
                        pass

                return items, max_page, status_open, count_all

            document, max_page, status_open, count_all = await find()
            return await func(request, document, page, max_page, status_open, count_all)

        return wrapper

    return decorator
