import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HealthReport() {

  const location = useLocation();
  const navigate = useNavigate();

  const risk = location.state?.risk;

  const dietAdvice =
    risk === "high"
      ? "Avoid sugar, refined carbs, and processed food. Eat vegetables, whole grains, and lean protein."
      : "Maintain balanced diet with fruits, vegetables, and regular hydration.";

  const exerciseAdvice =
    risk === "high"
      ? "30 minutes daily walking, yoga, and weight management exercises."
      : "Regular physical activity like jogging, cycling, or sports.";

  const precautions =
    risk === "high"
      ? "Monitor blood sugar regularly and consult a doctor."
      : "Maintain healthy lifestyle and yearly health checkup.";

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        AI Health Report
      </h1>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Prediction Result</CardTitle>
        </CardHeader>
        <CardContent>
          {risk === "high" ? (
            <p className="text-red-500 text-lg">
              High Risk of Diabetes
            </p>
          ) : (
            <p className="text-green-500 text-lg">
              Low Risk of Diabetes
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Diet Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          {dietAdvice}
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Exercise Plan</CardTitle>
        </CardHeader>
        <CardContent>
          {exerciseAdvice}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Precautions</CardTitle>
        </CardHeader>
        <CardContent>
          {precautions}
        </CardContent>
      </Card>

      <Button onClick={() => navigate("/")}>
        Go Back
      </Button>

    </div>
  );
}