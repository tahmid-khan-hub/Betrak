import joblib
import numpy as np
import pandas as pd
from pathlib import Path
from sklearn.preprocessing import LabelEncoder

from app.services.encoder_data import GENDERS, COUNTRIES, PLATFORMS

# Load model once when app starts
MODEL_PATH = Path(__file__).resolve().parent.parent / "ml" / "model.pkl"
model = joblib.load(MODEL_PATH)

_gender_encoder = LabelEncoder().fit(GENDERS)
_country_encoder = LabelEncoder().fit(COUNTRIES)
_platform_encoder = LabelEncoder().fit(PLATFORMS)
_target_encoder = LabelEncoder().fit(["high", "medium", "low"])

# addiction level suggestions
SUGGESTIONS = {
    "high": [
        "Consider taking regular breaks from social media throughout the day.",
        "Try replacing social media time with outdoor activities or hobbies.",
        "Turn off non-essential notifications to reduce compulsive checking.",
        "Set strict daily screen time limits using your phone's built-in tools.",
        "Talk to someone you trust about how social media makes you feel."
    ],
    "medium": [
        "Try setting specific times of day for checking social media.",
        "Avoid using social media at least 1 hour before bed.",
        "Be mindful of how much time you spend scrolling passively.",
        "Balance your online interactions with more face-to-face connections.",
        "Notice how social media affects your mood and adjust usage accordingly."
    ],
    "low": [
        "You have a healthy relationship with social media — keep it up!",
        "Continue being intentional about how and when you use social media.",
        "Encourage friends and family to also maintain healthy usage habits.",
        "Stay aware of your habits as social media platforms evolve.",
        "Keep prioritizing real-world activities and relationships."
    ]
}

def predict_addiction(
    age: int,
    gender: str,
    country: str,
    avg_daily_usage_hours: float,
    most_used_platform: str,
    sleep_hours_per_night: float,
    mental_health_score: float
) -> dict:
    # encode categorial inputs
    try:
        gender_encoded = _gender_encoder.transform([gender])[0]
    except ValueError:
        gender_encoded = 0

    try:
        country_encoded = _country_encoder.transform([country])[0]
    except ValueError:
        country_encoded = 0

    try:
        platform_encoded = _platform_encoder.transform([most_used_platform])[0]
    except ValueError:
        platform_encoded = 0
    
    # build input dataframe
    input_data = pd.DataFrame([{
        "Age": age,
        "Gender": gender_encoded,
        "Country": country_encoded,
        "Avg_Daily_Usage_Hours": avg_daily_usage_hours,
        "Most_Used_Platform": platform_encoded,
        "Sleep_Hours_Per_Night": sleep_hours_per_night,
        "Mental_Health_Score": mental_health_score
    }])

    # run prediction
    prediction_encoded = model.predict(input_data)[0]
    probabilities = model.predict_proba(input_data)[0]
    confidence = round(float(np.max(probabilities) * 100), 2)

    # decode prediction back to label
    label_map = {0: "high", 1: "medium", 2: "low"}
    addiction_level = label_map.get(prediction_encoded, "medium")

    return {
        "addiction_level": addiction_level,
        "confidence": confidence,
        "suggestions": SUGGESTIONS[addiction_level]
    }
