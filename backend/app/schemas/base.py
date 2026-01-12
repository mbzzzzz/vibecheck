from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime
from uuid import UUID

class UserBase(BaseModel):
    email: str
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: UUID
    subscription_tier: str
    created_at: datetime

    class Config:
        from_attributes = True

class SocialAccountBase(BaseModel):
    platform: str
    handle: str

class SocialAccountCreate(SocialAccountBase):
    pass

class SocialAccount(SocialAccountBase):
    id: UUID
    is_active: bool
    last_scraped_at: Optional[datetime]

    class Config:
        from_attributes = True

class AnalysisReportBase(BaseModel):
    status: str

class AnalysisReport(AnalysisReportBase):
    id: UUID
    vibe_score: Optional[int]
    platform_scores: Dict[str, Any]
    recommendations: List[Dict[str, Any]]
    created_at: datetime
    
    class Config:
        from_attributes = True
