from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.sql import func
from app.core.database import Base

class UserPrediction(Base):
    __tablename__ = "user_predictions"

    id = Column(Integer, primary_key=True, index=True)

    # user info
    age = Column(Integer, nullable=False)
    gender = Column(String, nullable=False)
    country = Column(String, nullable=False)

    # usage info
    avg_daily_usage_hours = Column(Float, nullable=False)
    most_used_platform = Column(String, nullable=False)
    sleep_hours_per_night = Column(Float, nullable=False)

    # mental health
    mental_health_score = Column(Float, nullable=False)

    # addiction level
    addiction_level = Column(String, nullable=False)

    # timestamp
    created_at = Column(DateTime(timezone=True), server_default=func.now())
   