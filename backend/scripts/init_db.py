
import asyncio
import uuid
from datetime import datetime
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from app.core.config import settings
from app.core.database import Base
from app.models.user import User
from app.models.analysis_report import AnalysisReport
from app.models.social_account import SocialAccount

# Verify URL starts with postgresql+asyncpg://
SQLALCHEMY_DATABASE_URL = str(settings.DATABASE_URL).replace(
    "postgresql://", "postgresql+asyncpg://"
)

async def init_db():
    engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)
    
    async with engine.begin() as conn:
        # Import all models to ensure they are registered with Base.metadata
        # We already imported them above
        await conn.run_sync(Base.metadata.create_all)

    AsyncSessionLocal = sessionmaker(
        engine, class_=AsyncSession, expire_on_commit=False
    )

    async with AsyncSessionLocal() as session:
        # Create a default user if none exists
        from sqlalchemy import select
        result = await session.execute(select(User).limit(1))
        user = result.scalars().first()
        
        if not user:
            user = User(
                id=uuid.uuid4(),
                email="demo@vibecheck.ai",
                full_name="Demo User",
                subscription_tier="pro"
            )
            session.add(user)
            await session.commit()
            print(f"Created demo user: {user.id}")
        else:
            print(f"User already exists: {user.id}")

    await engine.dispose()

if __name__ == "__main__":
    asyncio.run(init_db())
