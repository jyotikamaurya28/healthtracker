import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "@/components/DashboardLayout";

import DiseaseSelectPage from "@/pages/DiseaseSelectPage";
import PredictionPage from "@/pages/PredictionPage";
import HeartPredictionPage from "@/pages/HeartPredictionPage";
import InsightsPage from "@/pages/InsightsPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";
import HealthReport from "./pages/HealthReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>

            {/* Disease Selection Page */}
            <Route path="/" element={<DiseaseSelectPage />} />

            {/* Diabetes Prediction */}
            <Route path="/prediction/diabetes" element={<PredictionPage />} />

            {/* Heart Disease Prediction */}
            <Route path="/prediction/heart" element={<HeartPredictionPage />} />

            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/report" element={<HealthReport />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
            
            
            <Route path="/prediction" element={<DiseaseSelectPage />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;