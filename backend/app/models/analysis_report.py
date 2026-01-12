import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime, ForeignKey, Integer, Text, BigInteger
from sqlalchemy.dialects.postgresql import UUID, JSONB, ARRAY
from sqlalchemy.orm import relationship
from pgvector.sqlalchemy import Vector
from app.core.database import Base

class ContentItem(Base):
    __tablename__ = "content_items"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    account_id = Column(UUID(as_uuid=True), ForeignKey("social_accounts.id", ondelete="CASCADE"), nullable=False)
    
    platform = Column(String, nullable=False)
    post_id = Column(String, nullable=False)
    post_url = Column(String, nullable=True)
    content_text = Column(Text, nullable=True)
    media_urls = Column(JSONB, default=[])
    
    # Engagement (likes, comments, shares)
    engagement_metrics = Column(JSONB, default={})
    
    # AI Analysis Results
    tone_analysis = Column(JSONB, nullable=True)
    embedding = Column(Vector(384)) # Using all-MiniLM-L6-v2 dimensions
    
    posted_at = Column(DateTime, nullable=False)
    scraped_at = Column(DateTime, default=datetime.utcnow)

    account = relationship("SocialAccount", backref="content_items")


class AnalysisReport(Base):
    __tablename__ = "analysis_reports"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    
    status = Column(String, default="pending") # pending, processing, completed, failed
    vibe_score = Column(Integer, nullable=True)
    
    # Aggregated Results
    platform_scores = Column(JSONB, default={})
    tone_analysis = Column(JSONB, default={})
    consistency_gaps = Column(JSONB, default=[])
    recommendations = Column(JSONB, default=[])
    
    error_message = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime, nullable=True)
    
    user = relationship("User", backref="reports")
