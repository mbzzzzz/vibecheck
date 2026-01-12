import sys
import os
from app.core.config import settings
from app.core.database import Base

print("Imports successful")
print(f"DB URL: {settings.DATABASE_URL}")
print(f"Base metadata: {Base.metadata}")
