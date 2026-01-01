import { motion } from "framer-motion";
import { 
  User, 
  Settings,
  Award,
  TrendingUp,
  Calendar,
  LogOut,
  ChevronRight,
  Bell,
  Shield,
  HelpCircle,
  Edit
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProfilePage() {
  const userStats = {
    daysActive: 45,
    workoutsCompleted: 38,
    currentStreak: 12,
    longestStreak: 21,
    totalVolume: "125,450 kg",
  };

  const achievements = [
    { name: "Primera Semana", unlocked: true },
    { name: "30 Días", unlocked: true },
    { name: "100 Entrenamientos", unlocked: false },
    { name: "Racha de Fuego", unlocked: true },
  ];

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Profile Header */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-display">
                    α
                  </AvatarFallback>
                </Avatar>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <Edit className="h-4 w-4 text-primary-foreground" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-display font-bold">Usuario Alpha</h2>
                <p className="text-muted-foreground">alpha@example.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="default">Premium</Badge>
                  <Badge variant="secondary">Nivel Intermedio</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <Calendar className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{userStats.daysActive}</p>
            <p className="text-xs text-muted-foreground">Días activo</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-5 w-5 text-status-success mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{userStats.workoutsCompleted}</p>
            <p className="text-xs text-muted-foreground">Entrenamientos</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <Award className="h-5 w-5 text-energy-medium mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{userStats.currentStreak}</p>
            <p className="text-xs text-muted-foreground">Racha actual</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <Award className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{userStats.longestStreak}</p>
            <p className="text-xs text-muted-foreground">Mejor racha</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Achievements */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Logros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center p-3 rounded-lg text-center ${
                    achievement.unlocked ? 'bg-primary/10' : 'bg-muted/30 opacity-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    achievement.unlocked ? 'bg-primary/20' : 'bg-muted'
                  }`}>
                    <Award className={`h-6 w-6 ${achievement.unlocked ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <p className="text-xs font-medium">{achievement.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Settings Menu */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Configuración</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {[
              { icon: User, label: "Editar Perfil", description: "Datos personales y objetivos" },
              { icon: Bell, label: "Notificaciones", description: "Recordatorios y alertas" },
              { icon: Settings, label: "Preferencias", description: "Unidades, idioma, tema" },
              { icon: Shield, label: "Privacidad", description: "Datos y seguridad" },
              { icon: HelpCircle, label: "Ayuda", description: "FAQ y soporte" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
            
            <Separator className="my-3" />
            
            <div 
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-destructive/10 cursor-pointer transition-all text-destructive"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <LogOut className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Cerrar Sesión</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
