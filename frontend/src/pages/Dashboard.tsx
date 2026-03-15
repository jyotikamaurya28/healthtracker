import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import { Activity, LogOut, Brain, Heart, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.removeToken();
    navigate("/login");
  };

  const stats = [
    { icon: Heart, title: "Health Score", value: "92/100", desc: "Based on latest analysis", color: "text-red-400" },
    { icon: Brain, title: "AI Predictions", value: "14", desc: "Active predictions running", color: "text-primary" },
    { icon: TrendingUp, title: "Risk Level", value: "Low", desc: "Overall health risk", color: "text-emerald-400" },
    { icon: Zap, title: "Scans Today", value: "38", desc: "Processed in real-time", color: "text-amber-400" },
  ];

  return (
    <div className="min-h-screen bg-background grid-bg">
      <header className="border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg neon-gradient">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold neon-gradient-text">AI Health Prediction</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6 pt-10">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-2">Dashboard</h2>
          <p className="text-muted-foreground text-lg">Welcome to your AI Health Prediction System</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, title, value, desc, color }) => (
            <div key={title} className="surface-card rounded-2xl p-6 hover:neon-glow transition-shadow duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{title}</span>
              </div>
              <p className="text-4xl font-bold text-foreground mb-1 group-hover:neon-gradient-text transition-all">{value}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="surface-card rounded-2xl p-8 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {["Heart rate analysis completed", "Blood pressure prediction updated", "Sleep pattern scan finished"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/30">
                <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
                <span className="text-foreground">{item}</span>
                <span className="ml-auto text-xs text-muted-foreground">{i + 1}h ago</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
