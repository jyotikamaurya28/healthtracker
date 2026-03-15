import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle
import os

# Load datasets
data = pd.read_csv("datasets/diabetes.csv")

X = data.drop("Outcome", axis=1)
y = data["Outcome"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Create models folder if not exists
os.makedirs("models", exist_ok=True)

# Save model
pickle.dump(model, open("models/diabetes_model.pkl", "wb"))

print("✅ Model trained and saved in models folder!")