from __future__ import annotations

from fastapi import APIRouter, Query, Request, Response
from fastapi.responses import RedirectResponse, JSONResponse

from .models import Log

api_router = APIRouter()


@api_router.get("/logs")
async def get_logs(
    request: Request,
    response: Response,
    page: int = Query(None, ge=1),
    limit: int = Query(None, ge=1, le=100)
):
    """
    Get logs with pagination.

    :param request: The request object.
    :param response: The response object.
    :param page: The page number.
    :param limit: Limit of logs per page.
    :return: The API json response.
    """
    if page is None or limit is None:
        # Redirect to the same endpoint with default page and limit in query params.
        query_params = request.query_params._dict.copy()
        if page is None:
            query_params['page'] = "1"
        if limit is None:
            query_params['limit'] = "20"
        return RedirectResponse(url=request.url.include_query_params(**query_params))

    try:
        skip = (page - 1) * limit
        logs = await Log.find_all().skip(skip).limit(limit).to_list()
        total_results = await Log.find_all().count()
        return {
            "results": logs,
            "success": True,
            "page": page,
            "limit": limit,
            "total_results": total_results,
            "url": str(request.url),
        }
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"results": [], "success": False, "error": "Unknown error occurred."}
        )


@api_router.get("/logs/{key}")
async def get_log_by_key(key: str):
    """
    Get a specific log by key.

    :param key: The key of the log.
    :return: The API json response.
    """
    log = await Log.find_one(Log.key == key)
    if log is None:
        return JSONResponse(status_code=404, content={"results": [], "success": False, "error": "Log not found."})
    return {
            "result": log,
            "success": True
        }
