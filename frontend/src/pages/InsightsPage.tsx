import { Users, HeartPulse, ShieldCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, Legend,
} from "recharts";

const diabetesDistribution = [
  { name: "Diabetic", value: 268 },
  { name: "Non-Diabetic", value: 500 },
];

const ageVsDiabetes = [
  { age: "21-30", diabetic: 32, healthy: 120 },
  { age: "31-40", diabetic: 58, healthy: 105 },
  { age: "41-50", diabetic: 72, healthy: 95 },
  { age: "51-60", diabetic: 65, healthy: 80 },
  { age: "61-70", diabetic: 30, healthy: 55 },
  { age: "70+", diabetic: 11, healthy: 45 },
];

const bmiVsDiabetes = [
  { bmi: "18-22", diabetic: 10, healthy: 80 },
  { bmi: "22-26", diabetic: 30, healthy: 140 },
  { bmi: "26-30", diabetic: 65, healthy: 120 },
  { bmi: "30-34", diabetic: 80, healthy: 70 },
  { bmi: "34-38", diabetic: 50, healthy: 40 },
  { bmi: "38+", diabetic: 33, healthy: 20 },
];

const glucoseAnalysis = [
  { level: "70", risk: 5 },
  { level: "90", risk: 10 },
  { level: "110", risk: 25 },
  { level: "130", risk: 45 },
  { level: "150", risk: 65 },
  { level: "170", risk: 80 },
  { level: "190", risk: 90 },
  { level: "210", risk: 95 },
];

const PIE_COLORS = ["hsl(0, 72%, 51%)", "hsl(152, 55%, 45%)"];

const summaryCards = [
  { title: "Total Patients", value: "768", icon: Users, color: "text-primary" },
  { title: "Diabetes Cases", value: "268", icon: HeartPulse, color: "text-destructive" },
  { title: "Healthy Cases", value: "500", icon: ShieldCheck, color: "text-success" },
  { title: "Detection Rate", value: "94.5%", icon: TrendingUp, color: "text-info" },
];

export default function InsightsPage() {
  return (
    <div className="p-6 lg:p-12 space-y-8">
      <div className="animate-fade-in">
        <h1 className="section-title">Health Insights Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Comprehensive analytics on diabetes risk factors and patient data distribution.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, i) => (
          <Card key={card.title} className="card-shadow animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted">
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pie Chart */}
        <Card className="card-shadow animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <CardHeader>
            <CardTitle className="font-display text-base">Diabetes Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={diabetesDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {diabetesDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Age vs Diabetes */}
        <Card className="card-shadow animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <CardHeader>
            <CardTitle className="font-display text-base">Age vs Diabetes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={ageVsDiabetes}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="age" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="diabetic" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} name="Diabetic" />
                <Bar dataKey="healthy" fill="hsl(152, 55%, 45%)" radius={[4, 4, 0, 0]} name="Healthy" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* BMI vs Diabetes */}
        <Card className="card-shadow animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <CardHeader>
            <CardTitle className="font-display text-base">BMI vs Diabetes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={bmiVsDiabetes}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="bmi" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="diabetic" fill="hsl(38, 92%, 50%)" radius={[4, 4, 0, 0]} name="Diabetic" />
                <Bar dataKey="healthy" fill="hsl(210, 80%, 55%)" radius={[4, 4, 0, 0]} name="Healthy" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Glucose Analysis */}
        <Card className="card-shadow animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <CardHeader>
            <CardTitle className="font-display text-base">Glucose Level vs Risk %</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={glucoseAnalysis}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="level" tick={{ fontSize: 12 }} label={{ value: "Glucose (mg/dL)", position: "insideBottom", offset: -2, fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} label={{ value: "Risk %", angle: -90, position: "insideLeft", fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="risk" stroke="hsl(0, 72%, 51%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(0, 72%, 51%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
