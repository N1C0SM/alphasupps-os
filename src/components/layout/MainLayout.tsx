import { Outlet } from "react-router-dom";
import { BottomNav, SideNav } from "./Navigation";
import { Toaster } from "@/components/ui/sonner";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      <main className="lg:ml-64 pb-24 lg:pb-8">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
      <BottomNav />
      <Toaster />
    </div>
  );
}
