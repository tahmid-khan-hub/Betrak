import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

def load_and_clean_data(filepath: str):
    df = pd.read_csv(filepath)

    # drop academic cols
    academic_cols = [
        "Student_ID",
        "Academic_Level",
        "Affects_Academic_Performance",
        "Conflicts_Over_Social_Media",
        "Relationship_Status"
    ]
    df.drop(columns=[col for col in academic_cols if col in df.columns], inplace=True)

    # drop rows with missing values
    df.dropna(inplace=True)

    return df

# converting text/categorial and targeted cols into numbers
def encode_features(df: pd.DataFrame):

    # encode categorial cols
    categorial_cols = ["Gender", "Country", "Most_Used_Platform"]
    for col in categorial_cols:
        if col in df.columns:
            le = LabelEncoder()
            df[col] = le.fit_transform(df[col].astype(str))
    
    # encode target cols
    if "Addicted_Score" in df.columns:
        df["Addiction_Level"] = df["Addicted_Score"].apply(classify_addiction)
        df.drop(columns=["Addicted_Score"], inplace=True)
        label_encoder = LabelEncoder()
        df["Addiction_Level"] = label_encoder.fit_transform(df["Addiction_Level"]) # high=0, low=1, medium=2
        
    return df

def classify_addiction(score: float) -> str:
    if score >= 7:
        return "high"
    elif score >= 5:
        return "medium"
    else:
        return "low"

def get_features_and_target(df: pd.DataFrame):
    feature_cols = [
        "Age",
        "Gender",
        "Country",
        "Avg_Daily_Usage_Hours",
        "Most_Used_Platform",
        "Sleep_Hours_Per_Night",
        "Mental_Health_Score"
    ]

    # keep cols that exist in dataset
    feature_cols = [col for col in feature_cols if col in df.columns]

    X = df[feature_cols]
    Y = df["Addiction_Level"]

    return X, Y
