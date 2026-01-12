from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

# Verify URL starts with postgresql+asyncpg://
# If the env var is just postgresql://, we might need to fix it for async
SQLALCHEMY_DATABASE_URL = str(settings.DATABASE_URL).replace(
    "postgresql://", "postgresql+asyncpg://"
)

engine = create_async_engine(
    SQLALCHEMY_DATABASE_URL,
    echo=True, # Log SQL for debugging
    future=True
)

AsyncSessionLocal = sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False
)

Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
