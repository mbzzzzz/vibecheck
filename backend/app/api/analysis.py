from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List, Dict, Any
from app.core.database import get_db
from app.models.analysis_report import AnalysisReport
from app.models.user import User
from app.schemas.base import AnalysisReport as AnalysisReportSchema
import uuid
from datetime import datetime

router = APIRouter()

@router.get("/latest", response_model=AnalysisReportSchema)
async def get_latest_report(db: AsyncSession = Depends(get_db)):
    # In a real app, we'd get the user from auth middleware
    # For now, we take the first user as a default
    user_result = await db.execute(select(User).limit(1))
    user = user_result.scalars().first()
    
    if not user:
        raise HTTPException(status_code=404, detail="No user found. Please run init_db script.")
    
    result = await db.execute(
        select(AnalysisReport)
        .where(AnalysisReport.user_id == user.id)
        .order_by(AnalysisReport.created_at.desc())
        .limit(1)
    )
    report = result.scalars().first()
    
    if not report:
        # If no report exists, return a default/empty one or 404
        raise HTTPException(status_code=404, detail="No report found for this user.")
        
    return report

@router.post("/trigger")
async def trigger_analysis(db: AsyncSession = Depends(get_db)):
    # Get default user
    user_result = await db.execute(select(User).limit(1))
    user = user_result.scalars().first()
    
    if not user:
        raise HTTPException(status_code=404, detail="No user found")

    # Create a new report record
    # In a real scenario, this would trigger a background task (e.g. Celery/CrewAI)
    # For now, we'll create a "completed" report with some dynamic data
    new_report = AnalysisReport(
        id=uuid.uuid4(),
        user_id=user.id,
        status="completed",
        vibe_score=75, # Dynamic calculation would happen in background
        platform_scores={
            "instagram": {"score": 80, "trend": "up"},
            "tiktok": {"score": 70, "trend": "down"},
            "linkedin": {"score": 85, "trend": "stable"},
            "twitter": {"score": 65, "trend": "neutral"}
        },
        recommendations=[
            {"title": "Improve LinkedIn Professionalism", "impact": 4, "platform": "linkedin"},
            {"title": "Increase TikTok Engagement", "impact": 3, "platform": "tiktok"}
        ],
        consistency_gaps=[
            {
                "type": "tone_mismatch",
                "severity": "critical",
                "message": "\"Hey guys\" is too casual for your LinkedIn persona (Executive).",
                "platform": "linkedin"
            },
            {
                "type": "visual_clash",
                "severity": "warning",
                "message": "Recent Instagram Reel uses non-brand fonts.",
                "platform": "instagram"
            }
        ],
        tone_analysis={
            "overall": "Authentic",
            "platforms": {
                "linkedin": "Executive",
                "instagram": "Casual",
                "tiktok": "High-Energy"
            }
        },
        created_at=datetime.utcnow(),
        completed_at=datetime.utcnow()
    )
    
    db.add(new_report)
    await db.commit()
    await db.refresh(new_report)
    
    return {"status": "completed", "job_id": str(new_report.id), "report_id": str(new_report.id)}
