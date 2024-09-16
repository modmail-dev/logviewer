from __future__ import annotations

from contextlib import asynccontextmanager
from pathlib import Path

import uvicorn
from beanie import init_beanie
from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from motor.motor_asyncio import AsyncIOMotorClient

from app.config import settings
from app.models import Log
from app.routes import api_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Context manager to handle the lifespan of the FastAPI application.

    :param app: The FastAPI application.
    """
    if settings.connection_uri.scheme == "mongodb+srv":
        # Remove the port number from the connection URI if using SRV scheme.
        connection_uri = str(settings.connection_uri).replace(":27017", "")
    else:
        connection_uri = str(settings.connection_uri)

    client = AsyncIOMotorClient(connection_uri)
    await init_beanie(database=client.modmail_bot, document_models=[Log])
    yield
    client.close()

app = FastAPI(lifespan=lifespan, debug=True)

app_api = FastAPI()
app_api.include_router(api_router)
app.mount("/api", app_api)

app.mount("/", StaticFiles(directory="frontend/build", html=True), name="static")


# Function to / route when frontend/build/* is requested
@app.middleware("http")
async def custom_static_files(request: Request, call_next):
    """
    Middleware to serve static files from the frontend/build directory.

    :param request: The request object.
    :param call_next: The next middleware in the chain.
    """
    # If the request is for the API, skip this middleware
    if request.url.path.startswith("/api"):
        return await call_next(request)

    static_dir = Path("frontend/build")
    full_path = static_dir / request.url.path.strip("/")

    # Check if the requested file exists in the build directory
    if full_path.is_file():
        return FileResponse(full_path)

    # If a directory is requested, try to serve index.html from that directory
    if full_path.is_dir():
        index_file = full_path / "index.html"
        if index_file.is_file():
            return FileResponse(index_file)

    # Check if there is an HTML file named as the path
    named_html_full_path = static_dir / (request.url.path.strip("/") + ".html")
    if named_html_full_path.is_file():
        return FileResponse(named_html_full_path)

    # Fall back to the default behavior
    response = await call_next(request)
    if response.status_code == 404:
        # TODO: Show 404 page
        # Serve the main index.html
        return FileResponse(static_dir / "index.html")

    return response

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
