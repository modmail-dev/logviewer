import os
from functools import wraps
from urllib.parse import urlencode, urlparse

from motor.motor_asyncio import AsyncIOMotorClient
from sanic import Sanic, response
from sanic.exceptions import abort, NotFound, Unauthorized
from sanic_session import Session, InMemorySessionInterface
from jinja2 import Environment, PackageLoader

import aiohttp

from core.models import LogEntry
from core.utils import get_stack_variable, authrequired, User

prefix = os.getenv("URL_PREFIX", "/logs")
if prefix == "NONE":
    prefix = ""

app = Sanic(__name__)
app.using_oauth = False

Session(app, interface=InMemorySessionInterface())
app.static("/static", "./static")

jinja_env = Environment(loader=PackageLoader("app", "templates"))

def render_template(name, *args, **kwargs):
    template = jinja_env.get_template(name + ".html")
    request = get_stack_variable("request")
    if request:
        kwargs["request"] = request
        kwargs["session"] = request["session"]
        kwargs["user"] = request["session"].get("user")
    kwargs.update(globals())
    return response.html(template.render(*args, **kwargs))


app.render_template = render_template


@app.listener("before_server_start")
async def init(app, loop):
    app.db = AsyncIOMotorClient(os.getenv("MONGO_URI")).modmail_bot
    app.session = aiohttp.ClientSession(loop=loop)

@app.exception(NotFound)
async def not_found(request, exc):
    return render_template("not_found")

@app.get("/")
async def index(request):
    return render_template("index")

@app.get(prefix + "/raw/<key>")
@authrequired()
async def get_raw_logs_file(request, document):
    """Returns the plain text rendered log entry"""

    if document is None:
        abort(404)

    log_entry = LogEntry(app, document)

    return log_entry.render_plain_text()


@app.get(prefix + "/<key>")
@authrequired()
async def get_logs_file(request, document):
    """Returns the html rendered log entry"""

    if document is None:
        abort(404)

    log_entry = LogEntry(app, document)

    return log_entry.render_html()


if __name__ == "__main__":
    app.run(
        host=os.getenv("HOST", "0.0.0.0"),
        port=os.getenv("PORT", 8000),
        debug=bool(os.getenv("DEBUG", False)),
    )
