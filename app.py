

import os
from distutils.util import strtobool

import aiohttp
from jinja2 import Environment, FileSystemLoader
from motor.motor_asyncio import AsyncIOMotorClient

from sanic import Sanic, response, Blueprint
from sanic.exceptions import NotFound

from core import LogEntry


prefix = os.getenv("URL_PREFIX", "/logs")
if prefix == "NONE":
    prefix = ""

logs = Blueprint("logs", prefix)

app = Sanic(__name__)
app.static("/static", "./static")

jinja_env = Environment(
    loader=FileSystemLoader(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")
    )
)


def render_template(name, *args, status_=200, **kwargs):
    template = jinja_env.get_template(name + ".html")
    kwargs.update(globals())
    return response.html(template.render(*args, **kwargs), status=status_)


app.render_template = render_template


@app.listener("before_server_start")
async def init(app, loop):
    app.db = AsyncIOMotorClient(os.getenv("MONGO_URI", "mongodb+srv://statsy:Zl930hX7zc13hk6p@statsy-lpu1v.mongodb.net")).modmail_bot
    app.session = aiohttp.ClientSession(loop=loop)


@app.exception(NotFound)
async def not_found(request, exc):
    return render_template("not_found", status_=404)


@app.get("/")
async def index(request):
    return render_template("index")


@logs.get("/raw/<key>")
async def get_raw_logs_file(request, key):
    """Returns the plain text rendered log entry"""
    document = await app.db.logs.find_one({"key": key})
    if document is None:
        return render_template("log_not_found", key=key, status_=404)

    log_entry = LogEntry(app, document)
    return log_entry.render_plain_text()


@logs.get("/<key>")
async def get_logs_file(request, key):
    """Returns the html rendered log entry"""
    document = await app.db.logs.find_one({"key": key})
    if document is None:
        return render_template("log_not_found", key=key, status_=404)

    log_entry = LogEntry(app, document)
    return log_entry.render_html()


app.blueprint(logs)

if __name__ == "__main__":
    app.run(
        host=os.getenv("HOST", "0.0.0.0"),
        port=int(os.getenv("PORT", 80)),
        debug=strtobool(os.getenv("DEBUG", "false")),
    )
