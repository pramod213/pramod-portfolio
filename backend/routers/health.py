from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["health"])


@router.get(
    "/",
    summary="Health check",
    description="Check the health status of the API",
)
async def health_check():
    return {"status": "ok", "service": "portfolio-api"}