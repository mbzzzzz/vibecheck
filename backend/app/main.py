from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="VibeCheck.ai API Backend",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

@app.get("/")
async def root():
    return {
        "message": "Welcome to VibeCheck.ai API",
        "docs": "/api/docs",
        "version": settings.VERSION
    }

from app.api import analysis
app.include_router(analysis.router, prefix="/api/v1/reports", tags=["reports"])
