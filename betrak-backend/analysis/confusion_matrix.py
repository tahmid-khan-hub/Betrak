import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from imblearn.over_sampling import SMOTE
from pathlib import Path
import joblib
import sys

sys.path.append(str(Path(__file__).resolve().parent.parent))
from app.ml.preprocess import load_and_clean_data, encode_features, get_features_and_target

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "dataset.csv"
MODEL_PATH = Path(__file__).resolve().parent.parent / "app" / "ml" / "model.pkl"

df = load_and_clean_data(str(DATA_PATH))
df, le = encode_features(df)
X, Y = get_features_and_target(df)

_, X_test, _, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

model = joblib.load(MODEL_PATH)
Y_pred = model.predict(X_test)

cm = confusion_matrix(Y_test, Y_pred)
labels = ["High", "Low", "Medium"]

plt.figure(figsize=(7, 6))
sns.heatmap(cm, annot=True, fmt="d", cmap="YlGnBu",
            xticklabels=labels, yticklabels=labels, linewidths=0.5)
plt.title("Confusion Matrix", fontsize=14, fontweight="bold")
plt.ylabel("Actual")
plt.xlabel("Predicted")
plt.tight_layout()
plt.savefig("analysis/confusion_matrix.png", dpi=150)
plt.show()
print("Saved: analysis/confusion_matrix.png")