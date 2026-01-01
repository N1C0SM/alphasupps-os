import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Dumbbell, 
  Apple, 
  Droplets, 
  Moon, 
  CheckSquare, 
  BookOpen, 
  Users, 
  Pill,
  Settings,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Hoy", path: "/" },
  { icon: Dumbbell, label: "Entrenamiento", path: "/training" },
  { icon: Apple, label: "Nutrición", path: "/nutrition" },
  { icon: Droplets, label: "Hidratación", path: "/hydration" },
  { icon: Moon, label: "Sueño", path: "/sleep" },
  { icon: CheckSquare, label: "Hábitos", path: "/habits" },
  { icon: BookOpen, label: "Diario", path: "/journal" },
  { icon: Pill, label: "Suplementos", path: "/supplements" },
  { icon: Users, label: "Comunidad", path: "/community" },
];

export function BottomNav() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.slice(0, 5).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export function SideNav() {
  const location = useLocation();
  
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 glass border-r border-border/50 p-4">
      <div className="flex items-center gap-3 px-3 py-4 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-lime flex items-center justify-center">
          <span className="font-display font-bold text-lg text-primary-foreground">α</span>
        </div>
        <div>
          <h1 className="font-display font-bold text-lg">AlphaSupps</h1>
          <p className="text-xs text-muted-foreground">Sistema OS</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "drop-shadow-[0_0_8px_hsl(var(--primary))]")} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      
      <div className="border-t border-border pt-4 space-y-1">
        <NavLink
          to="/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
            location.pathname === "/settings"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          <Settings className="h-5 w-5" />
          <span className="text-sm font-medium">Ajustes</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
            location.pathname === "/profile"
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          <User className="h-5 w-5" />
          <span className="text-sm font-medium">Perfil</span>
        </NavLink>
      </div>
    </aside>
  );
}
