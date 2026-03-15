import { useNavigate } from "react-router-dom";
import { Activity, BarChart3, Shield, Brain, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Brain,
    title: "ML-Powered Predictions",
    description: "Advanced machine learning models analyze patient data to predict disease risk with high accuracy.",
  },
  {
    icon: Shield,
    title: "Early Detection",
    description: "Identify health risks before they become critical, enabling proactive healthcare decisions.",
  },
  {
    icon: BarChart3,
    title: "Health Analytics",
    description: "Visual dashboards provide deep insights into health trends and risk factor distributions.",
  },
  {
    icon: Heart,
    title: "Patient-Centric",
    description: "Designed for healthcare professionals to deliver better patient outcomes through data.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 medical-gradient opacity-90" />
        <div className="relative px-6 py-20 lg:px-12 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/90 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <Activity className="h-4 w-4" />
              Powered by Machine Learning
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground lg:text-6xl">
              AI Disease Prediction System
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
              Predict the risk of diseases using machine learning and patient health data. 
              Get accurate risk assessments and actionable health insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/prediction")}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-lg px-8"
              >
                Start Prediction
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/insights")}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              >
                View Health Insights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mb-10">
          <h2 className="section-title">Why Choose Our System?</h2>
          <p className="mt-2 text-muted-foreground max-w-lg">
            Leverage cutting-edge AI technology for comprehensive health risk analysis.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="stat-card group animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg medical-gradient">
                <feature.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Accuracy Rate", value: "94.5%" },
            { label: "Patients Analyzed", value: "12,847" },
            { label: "Risk Factors", value: "8+" },
            { label: "Avg Response", value: "<2s" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-accent/50 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
