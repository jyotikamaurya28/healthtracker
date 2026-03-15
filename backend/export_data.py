import pandas as pd
from database import SessionLocal
from models_db import PatientHistory

def export_csv():

    db = SessionLocal()

    patients = db.query(PatientHistory).all()

    data = []

    for p in patients:
        data.append({
            "pregnancies": p.pregnancies,
            "glucose": p.glucose,
            "blood_pressure": p.blood_pressure,
            "bmi": p.bmi,
            "age": p.age,
            "prediction": p.prediction
        })

    df = pd.DataFrame(data)

    df.to_csv("patients_data.csv", index=False)

    db.close()