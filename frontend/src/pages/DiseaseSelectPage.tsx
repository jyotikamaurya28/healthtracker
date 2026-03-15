import { useNavigate } from "react-router-dom";
import { Activity, Plus, Heart, Info, ArrowRight } from "lucide-react";

export default function DiseaseSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="p-8 lg:p-12 max-w-3xl">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-medium text-blue-600 uppercase tracking-widest">
            AI-Powered Analysis
          </span>
        </div>
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Health Risk Predictor
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
          Enter your health data and get instant AI-powered disease risk
          assessment with a personalized report.
        </p>
      </div>

      {/* Disease Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

        {/* Diabetes Card */}
        <button
          onClick={() => navigate("/prediction/diabetes")}
          className="relative text-left bg-background border border-border rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all group"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-500 rounded-t-xl" />
          <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-base font-medium text-foreground mb-1">
            Diabetes Risk
          </h2>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Predict diabetes risk using glucose, BMI, insulin & 5 other biomarkers.
          </p>
          <div className="flex items-center gap-1.5 text-sm font-medium text-blue-600">
            Start prediction
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>

        {/* Heart Disease Card */}
        <button
          onClick={() => navigate("/prediction/heart")}
          className="relative text-left bg-background border border-border rounded-xl p-6 hover:border-red-300 hover:shadow-sm transition-all group"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-500 rounded-t-xl" />
          <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center mb-4">
            <Heart className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-base font-medium text-foreground mb-1">
            Heart Disease Risk
          </h2>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Analyze cholesterol, blood pressure, ECG & 10 cardiac indicators.
          </p>
          <div className="flex items-center gap-1.5 text-sm font-medium text-red-600">
            Start prediction
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>

      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { value: "2", label: "Diseases covered" },
          { value: "ML", label: "Powered models" },
          { value: "AI", label: "Health reports" },
        ].map((stat) => (
          <div key={stat.label} className="bg-muted/50 rounded-lg p-4 text-center">
            <p className="text-xl font-medium text-foreground mb-1">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-muted/50 rounded-xl p-4 flex gap-3 items-start">
        <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          This tool is for educational purposes only. Always consult a qualified
          healthcare professional for medical advice.
        </p>
      </div>

    </div>
  );
}