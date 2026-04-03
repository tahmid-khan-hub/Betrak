import joblib
import numpy as np
import pandas as pd
from pathlib import Path
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score

from app.ml.preprocess import load_and_clean_data, encode_features, get_features_and_target


# paths
BASE_DIR = Path(__file__).resolve().parent # Gets folder where this file exists
DATA_PATH = BASE_DIR.parent.parent / "data" / "dataset.csv" # Builds path to dataset
MODEL_PATH = BASE_DIR / "model.pkl" # Where trained model will be saved

def train():
    print("📦 Loading dataset...")
    df = load_and_clean_data(str(DATA_PATH))

    print("🔧 Encoding features...")
    df, le = encode_features(df)

    print("✂️  Splitting features and target...")
    X, Y = get_features_and_target(df)

    print("🔀 Splitting into train and test sets...")
    X_train, X_test, Y_train, Y_test = train_test_split(
        X, Y, test_size=0.2, random_state=42
    )

    # Algorithm: Random forest 
    print("🤖 Training Random Forest model...")
    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=10,
        random_state=42
    )
    model.fit(X_train, Y_train)

    print("📊 Evaluating model...")
    Y_pred = model.predict(X_test)
    accuracy = accuracy_score(Y_test, Y_pred)

    print(f"\n✅ Accuracy: {accuracy * 100:.2f}%")
    print("\n📋 Classification Report:")
    print(classification_report(Y_test, Y_pred, target_names=["high", "low", "medium"]))

    print("\n💾 Saving model...")
    joblib.dump(model, MODEL_PATH)
    print(f"✅ Model saved to {MODEL_PATH}")

if __name__ == "__main__":
    train()
