from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List, Dict, Any, Optional
from app.core.database import get_db
from app.core.config import settings
from app.models.analysis_report import AnalysisReport
from app.models.user import User
from app.schemas.base import AnalysisReport as AnalysisReportSchema
import uuid
from datetime import datetime
import google.generativeai as genai
import json
import logging

# Configure Logging
logger = logging.getLogger(__name__)

# Configure Gemini
if settings.GEMINI_API_KEY:
    genai.configure(api_key=settings.GEMINI_API_KEY)

router = APIRouter()

@router.get("/latest", response_model=AnalysisReportSchema)
async def get_latest_report(db: AsyncSession = Depends(get_db)):
    # In a real app, we'd get the user from auth middleware
    # For now, we take the first user as a default
    user_result = await db.execute(select(User).limit(1))
    user = user_result.scalars().first()
    
    if not user:
        # Fallback if DB is empty (e.g. before init_db)
        raise HTTPException(status_code=404, detail="No user found. Please ensure database is initialized.")
    
    result = await db.execute(
        select(AnalysisReport)
        .where(AnalysisReport.user_id == user.id)
        .order_by(AnalysisReport.created_at.desc())
        .limit(1)
    )
    report = result.scalars().first()
    
    if not report:
        raise HTTPException(status_code=404, detail="No report found for this user.")
        
    return report

@router.post("/trigger")
async def trigger_analysis(
    db: AsyncSession = Depends(get_db),
    payload: Dict[str, Any] = Body(default={}) # Allow optional payload for future "Real Data" inputs
):
    # 1. Get User
    user_result = await db.execute(select(User).limit(1))
    user = user_result.scalars().first()
    
    if not user:
        # Auto-create a demo user if none exists (for smooth demo experience)
        user = User(id=uuid.uuid4(), email="demo@vibecheck.ai", full_name="Demo User")
        db.add(user)
        await db.commit()
    
    # 2. Prepare Data for Analysis (Real User Input or Default Persona)
    # If payload is empty, use a "Demo Persona" to show off the AI capabilities
    demo_persona = {
        "linkedin_bio": "Executive visionary leading the future of AI. Scaling enterprise solutions.",
        "linkedin_posts": ["Synergy is key.", "Q3 results looking robust.", "AI is the future of work."],
        "instagram_bio": "just vibing ✌️ travel | food | cats",
        "instagram_posts": ["Sunset vibes", "Best burger ever!", "My cat is so cute lol"],
        "twitter_bio": "building stuff. breaking stuff.",
        "twitter_posts": ["why is css so hard", "shipping to prod on friday", "rekt"]
    }
    
    analysis_input = payload if payload else demo_persona

    # 3. Call Gemini API
    ai_report_data = {}
    
    if settings.GEMINI_API_KEY:
        try:
            model = genai.GenerativeModel('gemini-pro')
            
            prompt = f"""
            Analyze the cross-platform brand consistency of this user based on their social media content.
            
            Input Data:
            {json.dumps(analysis_input, indent=2)}
            
            Return a JSON object ONLY, with the following structure (no markdown formatting):
            {{
                "vibe_score": <int 0-100>,
                "platform_scores": {{
                    "linkedin": {{"score": <int>, "trend": <"up"|"down"|"stable"|"neutral">}},
                    "instagram": {{"score": <int>, "trend": <"up"|"down"|"stable"|"neutral">}},
                    "twitter": {{"score": <int>, "trend": <"up"|"down"|"stable"|"neutral">}}
                }},
                "recommendations": [
                    {{"title": <string>, "impact": <int 1-5>, "platform": <string>}},
                    ...
                ],
                "consistency_gaps": [
                    {{"type": "tone_mismatch"|"visual_clash", "severity": "critical"|"warning", "message": <string>, "platform": <string>}}
                ],
                "tone_analysis": {{
                    "overall": <string>,
                    "platforms": {{
                        "linkedin": <string>,
                        "instagram": <string>,
                        "twitter": <string>
                    }}
                }}
            }}
            """
            
            response = await model.generate_content_async(prompt)
            
            # Clean response if it contains markdown code blocks
            response_text = response.text.strip()
            if response_text.startswith("```json"):
                response_text = response_text[7:]
            if response_text.endswith("```"):
                response_text = response_text[:-3]
                
            ai_report_data = json.loads(response_text)
            logger.info("Gemini analysis successful")
            
        except Exception as e:
            logger.error(f"Gemini API Error: {e}")
            # Fallback to mock if API fails
            ai_report_data = get_mock_data()
    else:
        logger.warning("GEMINI_API_KEY not set. Using mock data.")
        ai_report_data = get_mock_data()

    # 4. Save to Database
    new_report = AnalysisReport(
        id=uuid.uuid4(),
        user_id=user.id,
        status="completed",
        vibe_score=ai_report_data.get("vibe_score", 70),
        platform_scores=ai_report_data.get("platform_scores", {}),
        recommendations=ai_report_data.get("recommendations", []),
        consistency_gaps=ai_report_data.get("consistency_gaps", []),
        tone_analysis=ai_report_data.get("tone_analysis", {}),
        created_at=datetime.utcnow(),
        completed_at=datetime.utcnow()
    )
    
    db.add(new_report)
    await db.commit()
    await db.refresh(new_report)
    
    return {"status": "completed", "job_id": str(new_report.id), "report_id": str(new_report.id)}

def get_mock_data():
    return {
        "vibe_score": 75,
        "platform_scores": {
            "instagram": {"score": 80, "trend": "up"},
            "tiktok": {"score": 70, "trend": "down"},
            "linkedin": {"score": 85, "trend": "stable"},
            "twitter": {"score": 65, "trend": "neutral"}
        },
        "recommendations": [
            {"title": "Improve LinkedIn Professionalism", "impact": 4, "platform": "linkedin"},
            {"title": "Increase TikTok Engagement", "impact": 3, "platform": "tiktok"}
        ],
        "consistency_gaps": [
            {
                "type": "tone_mismatch",
                "severity": "critical",
                "message": "\"Hey guys\" is too casual for your LinkedIn persona (Executive).",
                "platform": "linkedin"
            }
        ],
        "tone_analysis": {
            "overall": "Authentic",
            "platforms": {
                "linkedin": "Executive",
                "instagram": "Casual",
                "twitter": "High-Energy"
            }
        }
    }
