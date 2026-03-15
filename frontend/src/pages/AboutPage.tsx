import { Brain, Target, Cpu, BarChart3, Database, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  { icon: Brain, name: "Machine Learning", desc: "Supervised learning algorithms for classification" },
  { icon: Cpu, name: "Python", desc: "Core language for ML model training & evaluation" },
  { icon: BarChart3, name: "Power BI", desc: "Interactive dashboards and data visualization" },
  { icon: Database, name: "Data Processing", desc: "Pandas, NumPy for data cleaning & analysis" },
  { icon: Globe, name: "React + TypeScript", desc: "Modern responsive frontend interface" },
  { icon: Target, name: "Scikit-learn", desc: "Classification models and evaluation metrics" },
];

export default function AboutPage() {
  return (
    <div className="p-6 lg:p-12 max-w-4xl space-y-10">
      <div className="animate-fade-in">
        <h1 className="section-title">About the System</h1>
        <p className="mt-2 text-muted-foreground">
          Understanding our AI-powered disease prediction platform.
        </p>
      </div>

      {/* Problem Statement */}
      <Card className="card-shadow animate-fade-in-up border-l-4 border-l-primary">
        <CardContent className="p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Problem Statement</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diabetes is one of the most prevalent chronic diseases worldwide, affecting millions of people. 
            Early detection is crucial for effective management, yet many cases go undiagnosed until 
            complications arise. Traditional screening methods can be time-consuming and may not account 
            for the complex interplay of risk factors. There is a critical need for an intelligent system 
            that can rapidly assess diabetes risk based on patient health data.
          </p>
        </CardContent>
      </Card>

      {/* ML Approach */}
      <Card className="card-shadow animate-fade-in-up border-l-4 border-l-secondary" style={{ animationDelay: "100ms" }}>
        <CardContent className="p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">
            How Machine Learning Helps
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our system uses supervised machine learning algorithms trained on the Pima Indians Diabetes 
            Dataset. The model analyzes 8 key health indicators — including glucose levels, BMI, age, 
            and insulin — to classify patients as either high-risk or low-risk for diabetes. 
            By learning patterns from hundreds of patient records, the model achieves over 94% accuracy 
            in predicting diabetes risk, enabling healthcare providers to make data-driven decisions 
            and prioritize at-risk patients for further evaluation.
          </p>
        </CardContent>
      </Card>

      {/* Technologies */}
      <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <h2 className="font-display text-lg font-bold text-foreground mb-4">Technologies Used</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <Card
              key={tech.name}
              className="card-shadow group hover:border-primary/30 transition-colors animate-fade-in"
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg medical-gradient">
                  <tech.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
