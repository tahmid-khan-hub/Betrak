import pandas as pd
import matplotlib.pyplot as plt
from imblearn.over_sampling import SMOTE
from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parent.parent))
from app.ml.preprocess import load_and_clean_data, encode_features, get_features_and_target

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "dataset.csv"

df = load_and_clean_data(str(DATA_PATH))
df, le = encode_features(df)
X, Y = get_features_and_target(df)

label_map = {0: "High", 1: "Low", 2: "Medium"}
before_counts = Y.value_counts().sort_index()

sm = SMOTE(random_state=42)
X_res, Y_res = sm.fit_resample(X, Y)
after_counts = pd.Series(Y_res).value_counts().sort_index()

labels = [label_map[i] for i in before_counts.index]

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 5))
fig.suptitle("Class Distribution Before vs After SMOTE", fontsize=14, fontweight="bold")

ax1.bar(labels, before_counts.values, color=["#f87171", "#34d399", "#facc15"])
ax1.set_title("Before SMOTE")
ax1.set_ylabel("Count")
ax1.set_xlabel("Addiction Level")

ax2.bar(labels, after_counts.values, color=["#f87171", "#34d399", "#facc15"])
ax2.set_title("After SMOTE")
ax2.set_ylabel("Count")
ax2.set_xlabel("Addiction Level")

plt.tight_layout()
plt.savefig("analysis/class_distribution.png", dpi=150)
plt.show()
print("Saved: analysis/class_distribution.png")