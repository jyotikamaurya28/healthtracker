from fastapi import FastAPI
import pickle
import numpy as np
from ai_report import generate_report
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the diabetes model
diabetes_model = pickle.load(open("models/diabetes_model.pkl", "rb"))


@app.post("/predict")
def predict(data: dict):

    pregnancies = float(data.get("pregnancies", 0))
    glucose = float(data.get("glucose", 0))
    blood_pressure = float(data.get("blood_pressure", 0))
    skin_thickness = float(data.get("skin_thickness", 0))
    insulin = float(data.get("insulin", 0))
    bmi = float(data.get("bmi", 0))
    diabetes_pedigree = float(data.get("diabetes_pedigree", 0))
    age = float(data.get("age", 0))

    input_data = np.array([[
        pregnancies, glucose, blood_pressure,
        skin_thickness, insulin, bmi, diabetes_pedigree, age
    ]])

    prediction = diabetes_model.predict(input_data)[0]

    result = "High Risk of Diabetes" if prediction == 1 else "Low Risk"

    report = generate_report(data, result)

    return {
        "prediction": result,
        "report": report
    }