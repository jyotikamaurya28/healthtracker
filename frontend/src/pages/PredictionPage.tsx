import { useState } from "react";
import { Activity, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const API_BASE_URL = " ";

interface FormData {
  pregnancies: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
  bmi: string;
  diabetesPedigree: string;
  age: string;
}

const initialForm: FormData = {
  pregnancies: "",
  glucose: "",
  bloodPressure: "",
  skinThickness: "",
  insulin: "",
  bmi: "",
  diabetesPedigree: "",
  age: "",
};

const fields: { key: keyof FormData; label: string; placeholder: string; unit?: string }[] = [
  { key: "pregnancies", label: "Pregnancies", placeholder: "e.g. 2" },
  { key: "glucose", label: "Glucose Level", placeholder: "e.g. 120", unit: "mg/dL" },
  { key: "bloodPressure", label: "Blood Pressure", placeholder: "e.g. 80", unit: "mm Hg" },
  { key: "skinThickness", label: "Skin Thickness", placeholder: "e.g. 20", unit: "mm" },
  { key: "insulin", label: "Insulin", placeholder: "e.g. 85", unit: "µU/mL" },
  { key: "bmi", label: "BMI", placeholder: "e.g. 25.5", unit: "kg/m²" },
  { key: "diabetesPedigree", label: "Diabetes Pedigree Function", placeholder: "e.g. 0.5" },
  { key: "age", label: "Age", placeholder: "e.g. 45", unit: "years" },
];

export default function PredictionPage() {

  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"high" | "low" | null>(null);

  const handleChange = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handlePredict = async () => {

    setLoading(true);
    setResult(null);

    const payload = {
      pregnancies: parseFloat(form.pregnancies) || 0,
      glucose: parseFloat(form.glucose) || 0,
      blood_pressure: parseFloat(form.bloodPressure) || 0,
      skin_thickness: parseFloat(form.skinThickness) || 0,
      insulin: parseFloat(form.insulin) || 0,
      bmi: parseFloat(form.bmi) || 0,
      diabetes_pedigree: parseFloat(form.diabetesPedigree) || 0,
      age: parseFloat(form.age) || 0,
    };

    try {

      const response = await fetch(`/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      console.log(data.report);
      toast.success("AI Report Generated");

      const isHighRisk =
        data.prediction === "High Risk of Diabetes" ||
        data.prediction === 1;

      setResult(isHighRisk ? "high" : "low");

    } catch (error) {

      console.error(error);

      toast.error("Backend not reachable. Using fallback prediction.");

      const glucose = payload.glucose;
      const bmi = payload.bmi;
      const age = payload.age;
      const pedigree = payload.diabetes_pedigree;

      const risk = glucose > 140 || bmi > 30 || (age > 50 && pedigree > 0.5);

      setResult(risk ? "high" : "low");
    }

    setLoading(false);
  };

  const allFilled = Object.values(form).every((v) => v.trim() !== "");

  return (
    <div className="p-6 lg:p-12 max-w-5xl">

      <div className="mb-8">
        <h1 className="flex items-center gap-3 text-2xl font-bold">
          <Activity className="h-7 w-7 text-primary" />
          Diabetes Risk Prediction
        </h1>
        <p className="text-muted-foreground">
          Enter patient health data to predict diabetes risk.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Health Data</CardTitle>
          <CardDescription>Fill all fields</CardDescription>
        </CardHeader>

        <CardContent>

          <div className="grid gap-4 sm:grid-cols-2">

            {fields.map((field) => (
              <div key={field.key}>
                <Label>{field.label}</Label>
                <Input
                  type="number"
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                />
              </div>
            ))}

          </div>

          <Button
            onClick={handlePredict}
            disabled={!allFilled || loading}
            className="mt-6 w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Predicting...
              </>
            ) : (
              "Predict Risk"
            )}
          </Button>

        </CardContent>
      </Card>

      {result && (
        <Card className="mt-6">

          <CardContent className="text-center py-10">

            {result === "high" ? (
              <>
                <AlertTriangle className="mx-auto text-red-500 mb-2" size={40} />
                <h2 className="text-xl font-bold text-red-500">
                  High Risk of Diabetes
                </h2>
              </>
            ) : (
              <>
                <CheckCircle2 className="mx-auto text-green-500 mb-2" size={40} />
                <h2 className="text-xl font-bold text-green-500">
                  Low Risk of Diabetes
                </h2>
              </>
            )}

          </CardContent>

        </Card>
      )}

    </div>
  );
}