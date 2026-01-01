import { motion } from "framer-motion";
import { 
  CheckSquare, 
  Plus,
  Flame,
  TrendingUp,
  Calendar,
  ChevronRight,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

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

export default function HabitsPage() {
  const habits = [
    { name: "Meditación 10 min", streak: 15, completed: true, priority: "critical" },
    { name: "Beber 8 vasos de agua", streak: 8, completed: true, priority: "high" },
    { name: "10,000 pasos", streak: 5, completed: false, priority: "high" },
    { name: "Leer 20 minutos", streak: 12, completed: false, priority: "medium" },
    { name: "Sin azúcar añadida", streak: 3, completed: false, priority: "medium" },
    { name: "Journaling nocturno", streak: 7, completed: false, priority: "low" },
  ];

  const stats = {
    todayCompleted: 2,
    todayTotal: 6,
    weeklyRate: 78,
    longestStreak: 21,
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold">Hábitos</h1>
          <p className="text-muted-foreground">Pequeñas acciones, grandes resultados.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo
        </Button>
      </motion.div>

      {/* Today Progress */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-muted-foreground text-sm">Progreso de Hoy</p>
                <p className="text-3xl font-display font-bold">
                  {stats.todayCompleted}/{stats.todayTotal}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-primary">
                  <Flame className="h-5 w-5" />
                  <span className="text-2xl font-display font-bold">{stats.longestStreak}</span>
                </div>
                <p className="text-sm text-muted-foreground">Mejor racha</p>
              </div>
            </div>
            <Progress value={(stats.todayCompleted / stats.todayTotal) * 100} className="h-3" />
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-3 gap-3">
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">{stats.weeklyRate}%</p>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <Calendar className="h-5 w-5 text-status-info mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">45</p>
            <p className="text-xs text-muted-foreground">Días activo</p>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardContent className="p-4 text-center">
            <Star className="h-5 w-5 text-energy-medium mx-auto mb-2" />
            <p className="text-2xl font-display font-bold">6</p>
            <p className="text-xs text-muted-foreground">Hábitos</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Habits List */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Hábitos de Hoy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {habits.map((habit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                  habit.completed 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <Checkbox 
                  checked={habit.completed}
                  className="h-6 w-6"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-medium ${habit.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {habit.name}
                    </p>
                    <Badge 
                      variant={
                        habit.priority === 'critical' ? 'destructive' :
                        habit.priority === 'high' ? 'default' :
                        'secondary'
                      }
                      className="text-[10px] px-1.5 py-0"
                    >
                      {habit.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Flame className="h-3 w-3 text-energy-medium" />
                    <span>{habit.streak} días</span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Heatmap */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Actividad Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, index) => {
                const intensity = Math.random();
                return (
                  <div 
                    key={index}
                    className="aspect-square rounded-sm transition-all"
                    style={{
                      backgroundColor: intensity > 0.7 
                        ? 'hsl(var(--primary))' 
                        : intensity > 0.4 
                          ? 'hsl(var(--primary) / 0.5)' 
                          : intensity > 0.2 
                            ? 'hsl(var(--primary) / 0.2)' 
                            : 'hsl(var(--muted))'
                    }}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
              <span>Menos</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-muted" />
                <div className="w-3 h-3 rounded-sm bg-primary/20" />
                <div className="w-3 h-3 rounded-sm bg-primary/50" />
                <div className="w-3 h-3 rounded-sm bg-primary" />
              </div>
              <span>Más</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
