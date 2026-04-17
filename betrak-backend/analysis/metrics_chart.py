import matplotlib.pyplot as plt
from sklearn.metrics import classification_report
from sklearn.model_selection import train_test_split
from imblearn.over_sampling import SMOTE
from pathlib import Path
import joblib
import sys
import numpy as np

sys.path.append(str(Path(__file__).resolve().parent.parent))
from app.ml.preprocess import load_and_clean_data, encode_features, get_features_and_target

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "dataset.csv"
MODEL_PATH = Path(__file__).resolve().parent.parent / "app" / "ml" / "model.pkl"

df = load_and_clean_data(str(DATA_PATH))
df, le = encode_features(df)
X, Y = get_features_and_target(df)

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

model = joblib.load(MODEL_PATH)
Y_pred = model.predict(X_test)

report = classification_report(Y_test, Y_pred,
    target_names=["High", "Low", "Medium"],
    output_dict=True)

classes = ["High", "Low", "Medium"]
metrics = ["precision", "recall", "f1-score"]
colors = ["#60a5fa", "#34d399", "#f87171"]

x = np.arange(len(classes))
width = 0.25

fig, ax = plt.subplots(figsize=(10, 6))
for i, (metric, color) in enumerate(zip(metrics, colors)):
    values = [report[cls][metric] for cls in classes]
    ax.bar(x + i * width, values, width, label=metric.capitalize(), color=color)

ax.set_title("Precision, Recall & F1-Score by Class", fontsize=14, fontweight="bold")
ax.set_xticks(x + width)
ax.set_xticklabels(classes)
ax.set_ylabel("Score")
ax.set_ylim(0, 1.1)
ax.legend()
ax.grid(axis="y", linestyle="--", alpha=0.5)

plt.tight_layout()
plt.savefig("analysis/metrics_chart.png", dpi=150)
plt.show()
print("Saved: analysis/metrics_chart.png")