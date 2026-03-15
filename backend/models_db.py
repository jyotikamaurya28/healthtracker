from sqlalchemy import Column, Integer, Float, String
from database import Base

class PatientHistory(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)

    pregnancies = Column(Float)
    glucose = Column(Float)
    blood_pressure = Column(Float)
    bmi = Column(Float)
    age = Column(Float)

    prediction = Column(String)