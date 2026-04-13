from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime

from app.core.database import get_db
from app.models.user_prediction import UserPrediction
from app.api.v1.schemas.user_input import UserInput
from app.api.v1.schemas.prediction import PredictionResponse
from app.services.prediction_service import predict_addiction
from app.services.mental_health_service import calculate_mental_health_score

router = APIRouter()

# post the predictions to db
@router.post("/predict", response_model=PredictionResponse)
def predict(user_input: UserInput, db: Session = Depends(get_db)):

    # 1. calculate mental health score from 3 answers
    mental_health_score = calculate_mental_health_score(
        answer1=user_input.mental_health_answers.answer_1,
        answer2=user_input.mental_health_answers.answer_2,
        answer3=user_input.mental_health_answers.answer_3
    )

    # 2. run ml prediction
    result = predict_addiction(
        age=user_input.age,
        gender=user_input.gender,
        country=user_input.country,
        avg_daily_usage_hours=user_input.avg_daily_usage_hours,
        most_used_platform=user_input.most_used_platform,
        sleep_hours_per_night=user_input.sleep_hours_per_night,
        mental_health_score=mental_health_score
    )

    # 3. save to postgreSQL
    record = UserPrediction(
        user_id=user_input.user_id,
        age=user_input.age,
        gender=user_input.gender,
        country=user_input.country,
        avg_daily_usage_hours=user_input.avg_daily_usage_hours,
        most_used_platform=user_input.most_used_platform,
        sleep_hours_per_night=user_input.sleep_hours_per_night,
        mental_health_score=mental_health_score,
        addiction_level=result["addiction_level"]
    )
    db.add(record)
    db.commit()
    db.refresh(record)

    # 4. return response
    return PredictionResponse(
        addiction_level=result["addiction_level"],
        confidence=result["confidence"],
        suggestions=result["suggestions"],
        mental_health_score=mental_health_score,
        created_at=record.created_at
    )

# get the 3 mental health realted questions
@router.get("/questions")
def get_mental_health_questions():
    from app.services.mental_health_service import get_questions
    return {"questions": get_questions()}

@router.get("/predict/latest")
def get_latest_prediction(user_id: str, db: Session = Depends(get_db)):
    # database query to get a specific user result and return it to frontend
    record = (
        db.query(UserPrediction).filter(UserPrediction.user_id == user_id).order_by(UserPrediction.created_at.desc()).first()
    )

    # if no record found then...
    if not record:
        raise HTTPException(status_code=404, detail="No prediction result found for this user.")

    # return the data
    return {
        "addiction_level": record.addiction_level,
        "mental_health_score": record.mental_health_score,
        "age": record.age,
        "gender": record.gender,
        "country": record.country,
        "avg_daily_usage_hours": record.avg_daily_usage_hours,
        "most_used_platform": record.most_used_platform,
        "sleep_hours_per_night": record.sleep_hours_per_night,
        "created_at": record.created_at,
    }