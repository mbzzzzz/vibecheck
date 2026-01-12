import asyncio
from sqlalchemy.ext.asyncio import create_async_engine
from app.core.config import settings
from sqlalchemy import text

async def main():
    print(f"Connecting to {settings.DATABASE_URL}...")
    # Fix the protocol for asyncpg if needed (already done in database.py but doing here for raw test)
    url = str(settings.DATABASE_URL).replace("postgresql://", "postgresql+asyncpg://")
    
    engine = create_async_engine(url)
    
    try:
        async with engine.connect() as conn:
            result = await conn.execute(text("SELECT version()"))
            version = result.scalar()
            print(f"Connected! DB Version: {version}")
            
            # Check for neon_auth schema
            result = await conn.execute(text("SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'neon_auth'"))
            if result.scalar():
                print("neon_auth schema found!")
            else:
                print("neon_auth schema NOT found (Auth might not work yet)")
                
    except Exception as e:
        print(f"Connection failed: {e}")
    finally:
        await engine.dispose()

if __name__ == "__main__":
    asyncio.run(main())
