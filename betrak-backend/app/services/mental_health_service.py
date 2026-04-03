from typing import Literal

''' Takes answers to 3 mental health questions. Returns a score between 1.0 and 10.0.
Higher score = worse mental health. '''

# Question definitions sent to frontend
MENTAL_HEALTH_QUESTIONS = [
    {
        "id": 1,
        "question": "How often do you feel anxious or stressed when you cannot access social media?",
        "options": {
            "never": 1,
            "sometimes": 2,
            "often": 3,
            "always": 4
        }
    },
    {
        "id": 2,
        "question": "How would you describe your overall mood on most days?",
        "options": {
            "very_happy": 1,
            "neutral": 2,
            "sometimes_sad": 3,
            "mostly_sad": 4
        }
    },
    {
        "id": 3,
        "question": "How often do you compare yourself to others because of what you see on social media?",
        "options": {
            "never": 1,
            "rarely": 2,
            "often": 3,
            "always": 4
        }
    }
]

def calculate_mental_health_score(
    answer1: Literal["never", "sometimes", "often", "always"],
    answer2: Literal["very_happy", "neutral", "sometimes_sad", "mostly_sad"],
    answer3: Literal["never", "rarely", "often", "always"]
) -> float:
    q1_map = {"never": 1, "sometimes": 2, "often": 3, "always": 4}
    q2_map = {"very_happy": 1, "neutral": 2, "sometimes_sad": 3, "mostly_sad": 4}
    q3_map = {"never": 1, "rarely": 2, "often": 3, "always": 4}

    raw_score = (
        q1_map[answer1] + q2_map[answer2] + q3_map[answer3]
    )

    # Normalize from range 3–12 to range 1–10
    normalized = 1 + ((raw_score - 3) / (12 - 3)) * 9

    return round(normalized, 2)

# Returns the 3 questions to display on the frontend.
def get_questions():
    return MENTAL_HEALTH_QUESTIONS
