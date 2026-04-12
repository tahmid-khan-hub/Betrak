from pydantic import BaseModel, Field
from typing import Literal, Optional

class MentalHealthAnswers(BaseModel):
    answer_1: Literal["never", "sometimes", "often", "always"]
    answer_2: Literal["very_happy", "neutral", "sometimes_sad", "mostly_sad"]
    answer_3: Literal["never", "rarely", "often", "always"]

class UserInput(BaseModel):
    user_id: Optional[str] = None
    age: int = Field(..., ge=10, le=100)
    gender: Literal["Male", "Female"]
    country: str = Field(..., min_length=2, max_length=100)
    avg_daily_usage_hours: float = Field(..., ge=0.0, le=24.0)
    most_used_platform: Literal[
        "Instagram",
        "TikTok",
        "Facebook",
        "Twitter",
        "Snapchat",
        "YouTube",
        "LinkedIn",
        "WhatsApp"
    ]
    sleep_hours_per_night: float = Field(..., ge=0.0, le=24.0)
    mental_health_answers: MentalHealthAnswers
