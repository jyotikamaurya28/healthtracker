from fastapi import FastAPI
import numpy as np
import pickle

from database import SessionLocal
from models_db import PatientHistory

app = FastAPI()
@app.post("/predict")
def predict(data: dict):

    pregnancies = float(data.get("pregnancies"))
    glucose = float(data.get("glucose"))
    blood_pressure = float(data.get("blood_pressure"))
    bmi = float(data.get("bmi"))
    age = float(data.get("age"))

    input_data = np.array([[pregnancies, glucose, blood_pressure, bmi, age]])

    diabetes_model = pickle.load(open("models/diabetes_model.pkl", "rb"))

    prediction = diabetes_model.predict(input_data)[0]

    result = "High Risk of Diabetes" if prediction == 1 else "Low Risk"

    # Save to database
    db = SessionLocal()

    patient = PatientHistory(
        pregnancies=pregnancies,
        glucose=glucose,
        blood_pressure=blood_pressure,
        bmi=bmi,
        age=age,
        prediction=result
    )

    db.add(patient)
    db.commit()
    db.close()

    return {"prediction": result}