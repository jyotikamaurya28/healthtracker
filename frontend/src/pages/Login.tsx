import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { authService } from "@/services/authService";
import { Activity, Mail, Lock, Loader2, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email format";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await authService.login(form);
      authService.setToken(res.access_token);
      toast({ title: "Login successful", description: "Welcome back to AI Health Prediction System" });
      navigate("/dashboard");
    } catch (err) {
      toast({ title: "Login failed", description: err instanceof Error ? err.message : "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background grid-bg">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-[45%] relative items-center justify-center p-12 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon/5 blur-[120px]" />

        {/* Grid circles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full neon-border opacity-20"
              style={{
                width: `${250 + i * 140}px`,
                height: `${250 + i * 140}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-sm float-animation">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl neon-gradient neon-glow-strong mb-8">
            <Activity className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 neon-gradient-text leading-tight">AI Health<br/>Prediction</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Powered by advanced machine learning for smarter healthcare decisions.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Real-time</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> HIPAA Ready</span>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl neon-gradient">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold neon-gradient-text">AI Health</span>
          </div>

          <div className="surface-card rounded-2xl p-8 neon-glow">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back</h2>
              <p className="text-muted-foreground">Sign in to your account to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground text-sm">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-11 h-12 bg-secondary border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-muted-foreground text-sm">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-11 h-12 bg-secondary border-border/50 focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-xl"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                </div>
                {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl neon-gradient text-primary-foreground font-semibold text-base neon-glow hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <ArrowRight className="w-5 h-5 mr-2" />}
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border/50" /></div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:text-neon-glow transition-colors">
                Create account
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-muted-foreground/50 mt-6">
            Protected by enterprise-grade encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
