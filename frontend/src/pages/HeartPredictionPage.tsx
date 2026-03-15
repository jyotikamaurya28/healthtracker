import { useState } from "react";
import { Activity, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const API_BASE_URL = "http://localhost:8000";

export default function HeartPredictionPage() {

  const [form, setForm] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    thalach: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);

    const payload = {
      age: Number(form.age),
      sex: Number(form.sex),
      cp: Number(form.cp),
      trestbps: Number(form.trestbps),
      chol: Number(form.chol),
      thalach: Number(form.thalach),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/predict-heart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.prediction === 1) {
        setResult("high");
      } else {
        setResult("low");
      }

    } catch (error) {
      console.error(error);
      alert("Backend connection error");
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-4xl">

      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Activity /> Heart Disease Prediction
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Enter Patient Details</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-4">

          <div>
            <Label>Age</Label>
            <Input
              type="number"
              value={form.age}
              onChange={(e) => handleChange("age", e.target.value)}
            />
          </div>

          <div>
            <Label>Sex (1 = Male, 0 = Female)</Label>
            <Input
              type="number"
              value={form.sex}
              onChange={(e) => handleChange("sex", e.target.value)}
            />
          </div>

          <div>
            <Label>Chest Pain Type</Label>
            <Input
              type="number"
              value={form.cp}
              onChange={(e) => handleChange("cp", e.target.value)}
            />
          </div>

          <div>
            <Label>Blood Pressure</Label>
            <Input
              type="number"
              value={form.trestbps}
              onChange={(e) => handleChange("trestbps", e.target.value)}
            />
          </div>

          <div>
            <Label>Cholesterol</Label>
            <Input
              type="number"
              value={form.chol}
              onChange={(e) => handleChange("chol", e.target.value)}
            />
          </div>

          <div>
            <Label>Max Heart Rate</Label>
            <Input
              type="number"
              value={form.thalach}
              onChange={(e) => handleChange("thalach", e.target.value)}
            />
          </div>

        </CardContent>
      </Card>

      <Button
        onClick={handlePredict}
        className="mt-6"
      >
        {loading ? <Loader2 className="animate-spin" /> : "Predict Heart Risk"}
      </Button>

      {result && (
        <Card className="mt-6">
          <CardContent className="text-center py-8">

            {result === "high" ? (
              <>
                <AlertTriangle className="text-red-500 mx-auto mb-2" size={40} />
                <h2 className="text-xl font-bold text-red-500">
                  High Heart Disease Risk
                </h2>
              </>
            ) : (
              <>
                <CheckCircle2 className="text-green-500 mx-auto mb-2" size={40} />
                <h2 className="text-xl font-bold text-green-500">
                  Low Heart Disease Risk
                </h2>
              </>
            )}

          </CardContent>
        </Card>
      )}

    </div>
  );
}