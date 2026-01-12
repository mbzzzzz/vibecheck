#!/usr/bin/env bash
set -e

# Run DB Migrations
echo "Running migrations..."
python -m alembic upgrade head

# Start Application
echo "Starting server..."
# Use PORT env provided by Render, default to 8000
PORT="${PORT:-8000}"
exec uvicorn app.main:app --host 0.0.0.0 --port $PORT
