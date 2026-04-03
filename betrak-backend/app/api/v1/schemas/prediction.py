from pydantic import BaseModel
from typing import List
from datetime import datetime

class PredictionResponse(BaseModel):
    addiction_level: str
    confidence: float
    suggestions: List[str]
    mental_health_score: float
    created_at: datetime

    class Config:
        from_attributes = True # accept SQLAlchemy objects directly
