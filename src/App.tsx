import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { MainLayout } from "@/components/layout/MainLayout";

// Pages
import AuthPage from "@/pages/AuthPage";
import TodayPage from "@/pages/TodayPage";
import TrainingPage from "@/pages/TrainingPage";
import NutritionPage from "@/pages/NutritionPage";
import HydrationPage from "@/pages/HydrationPage";
import SleepPage from "@/pages/SleepPage";
import HabitsPage from "@/pages/HabitsPage";
import JournalPage from "@/pages/JournalPage";
import SupplementsPage from "@/pages/SupplementsPage";
import CommunityPage from "@/pages/CommunityPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public route */}
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<TodayPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/nutrition" element={<NutritionPage />} />
                <Route path="/hydration" element={<HydrationPage />} />
                <Route path="/sleep" element={<SleepPage />} />
                <Route path="/habits" element={<HabitsPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/supplements" element={<SupplementsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<ProfilePage />} />
              </Route>
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
