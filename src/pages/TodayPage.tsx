import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  Moon, 
  Droplets, 
  Dumbbell,
  CheckCircle2,
  Clock,
  Flame
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

export default function TodayPage() {
  const currentDate = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="space-y-1">
        <p className="text-muted-foreground capitalize">{currentDate}</p>
        <h1 className="text-3xl font-display font-bold">Buenos días, Alpha</h1>
        <p className="text-muted-foreground">Tu día de hoy está optimizado para rendimiento máximo.</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-energy-high/20 flex items-center justify-center">
              <Zap className="h-5 w-5 text-energy-high" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">85%</p>
              <p className="text-xs text-muted-foreground">Energía</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-status-info/20 flex items-center justify-center">
              <Moon className="h-5 w-5 text-status-info" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">7.5h</p>
              <p className="text-xs text-muted-foreground">Sueño</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-status-info/20 flex items-center justify-center">
              <Droplets className="h-5 w-5 text-status-info" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">1.2L</p>
              <p className="text-xs text-muted-foreground">Hidratación</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Flame className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold">2,100</p>
              <p className="text-xs text-muted-foreground">Calorías</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Today's Decision - Workout */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Entrenamiento de Hoy
              </CardTitle>
              <Badge variant="success">Día de entreno</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-display font-semibold">Push Day - Pecho y Tríceps</h3>
              <p className="text-muted-foreground text-sm mt-1">
                Tu recuperación está óptima. Hoy toca empujar fuerte.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>~60 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span>6 ejercicios</span>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Comenzar Entrenamiento
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Time Blocks */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Bloques de Energía</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { time: "07:00 - 09:00", task: "Trabajo profundo", energy: "high", completed: true },
              { time: "09:00 - 12:00", task: "Reuniones y emails", energy: "medium", completed: true },
              { time: "12:00 - 13:00", task: "Almuerzo + descanso", energy: "low", completed: false },
              { time: "14:00 - 16:00", task: "Tareas creativas", energy: "high", completed: false },
              { time: "17:00 - 18:00", task: "Entrenamiento", energy: "high", completed: false },
            ].map((block, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  block.completed 
                    ? "bg-muted/50 border-border" 
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-1 h-10 rounded-full ${
                  block.energy === 'high' ? 'bg-energy-high' :
                  block.energy === 'medium' ? 'bg-energy-medium' :
                  'bg-energy-low'
                }`} />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${block.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {block.task}
                  </p>
                  <p className="text-xs text-muted-foreground">{block.time}</p>
                </div>
                {block.completed && (
                  <CheckCircle2 className="h-5 w-5 text-status-success" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Daily Habits */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Hábitos del Día</CardTitle>
              <span className="text-sm text-muted-foreground">3/6 completados</span>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={50} className="mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { name: "Meditación", completed: true },
                { name: "8 vasos agua", completed: true },
                { name: "10k pasos", completed: false },
                { name: "Proteína", completed: true },
                { name: "Sin azúcar", completed: false },
                { name: "Leer 20min", completed: false },
              ].map((habit, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border text-sm transition-all cursor-pointer ${
                    habit.completed 
                      ? "bg-primary/10 border-primary/30 text-primary" 
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <CheckCircle2 className={`h-4 w-4 ${habit.completed ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={habit.completed ? 'line-through' : ''}>{habit.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Supplements */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Suplementos de Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Creatina", timing: "Mañana", taken: true },
                { name: "Omega-3", timing: "Con almuerzo", taken: true },
                { name: "Pre-workout", timing: "Pre-entreno", taken: false },
                { name: "Proteína Whey", timing: "Post-entreno", taken: false },
                { name: "Magnesio", timing: "Antes de dormir", taken: false },
              ].map((supp, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      supp.taken ? 'bg-status-success/20' : 'bg-muted'
                    }`}>
                      <CheckCircle2 className={`h-4 w-4 ${supp.taken ? 'text-status-success' : 'text-muted-foreground'}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{supp.name}</p>
                      <p className="text-xs text-muted-foreground">{supp.timing}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" disabled={supp.taken}>
                    {supp.taken ? 'Tomado' : 'Marcar'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
