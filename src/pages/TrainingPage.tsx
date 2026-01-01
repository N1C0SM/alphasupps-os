import { motion } from "framer-motion";
import { 
  Dumbbell, 
  Clock, 
  TrendingUp, 
  Play,
  CheckCircle2,
  ChevronRight,
  Target,
  Flame,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function TrainingPage() {
  const exercises = [
    { name: "Press Banca", sets: "4x8-10", weight: "80kg", rpe: 8, completed: true },
    { name: "Press Inclinado Mancuernas", sets: "3x10-12", weight: "30kg", rpe: 7, completed: true },
    { name: "Aperturas en Polea", sets: "3x12-15", weight: "15kg", rpe: 7, completed: false },
    { name: "Fondos en Paralelas", sets: "3x8-10", weight: "BW+10kg", rpe: 8, completed: false },
    { name: "Press Francés", sets: "3x10-12", weight: "25kg", rpe: 7, completed: false },
    { name: "Extensiones Polea", sets: "3x12-15", weight: "20kg", rpe: 7, completed: false },
  ];

  const weekSchedule = [
    { day: "Lun", type: "Push", completed: true },
    { day: "Mar", type: "Pull", completed: true },
    { day: "Mié", type: "Legs", completed: true },
    { day: "Jue", type: "Rest", completed: true },
    { day: "Vie", type: "Push", completed: false, isToday: true },
    { day: "Sáb", type: "Pull", completed: false },
    { day: "Dom", type: "Rest", completed: false },
  ];

  return (
    <motion.div 
      className="space-y-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="space-y-1">
        <h1 className="text-3xl font-display font-bold">Entrenamiento</h1>
        <p className="text-muted-foreground">Tu plan personalizado basado en tu recuperación.</p>
      </motion.div>

      {/* Week Overview */}
      <motion.div variants={item}>
        <Card className="glass overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-2">
              {weekSchedule.map((day, index) => (
                <div 
                  key={index}
                  className={`flex-1 text-center p-2 rounded-lg transition-all ${
                    day.isToday 
                      ? 'bg-primary text-primary-foreground' 
                      : day.completed 
                        ? 'bg-muted text-muted-foreground' 
                        : 'text-muted-foreground'
                  }`}
                >
                  <p className="text-xs font-medium">{day.day}</p>
                  <p className={`text-[10px] ${day.isToday ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {day.type}
                  </p>
                  {day.completed && !day.isToday && (
                    <CheckCircle2 className="h-3 w-3 mx-auto mt-1 text-status-success" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="today" className="flex-1">Hoy</TabsTrigger>
          <TabsTrigger value="history" className="flex-1">Historial</TabsTrigger>
          <TabsTrigger value="exercises" className="flex-1">Ejercicios</TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
            {/* Today's Workout Card */}
            <motion.div variants={item}>
              <Card glow className="overflow-hidden">
                <div className="gradient-lime h-1" />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Push Day</CardTitle>
                      <p className="text-muted-foreground">Pecho, Hombros y Tríceps</p>
                    </div>
                    <Badge variant="success">Óptimo para entrenar</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>~60 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span>6 ejercicios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-muted-foreground" />
                      <span>~450 kcal</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium">2/6 ejercicios</span>
                    </div>
                    <Progress value={33} />
                  </div>

                  <Button className="w-full" size="lg">
                    <Play className="h-5 w-5 mr-2" />
                    Continuar Entrenamiento
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exercise List */}
            <motion.div variants={item}>
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Ejercicios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {exercises.map((exercise, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg border transition-all cursor-pointer ${
                        exercise.completed 
                          ? 'bg-muted/50 border-border' 
                          : 'bg-card border-border hover:border-primary/50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        exercise.completed 
                          ? 'bg-status-success/20' 
                          : 'bg-primary/10'
                      }`}>
                        {exercise.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-status-success" />
                        ) : (
                          <Dumbbell className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${exercise.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {exercise.name}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{exercise.sets}</span>
                          <span>•</span>
                          <span>{exercise.weight}</span>
                          <span>•</span>
                          <span>RPE {exercise.rpe}</span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        <TabsContent value="history">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Historial de Entrenamientos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { date: "Jueves 26 Dic", type: "Rest Day", duration: "-", volume: "-" },
                { date: "Miércoles 25 Dic", type: "Legs", duration: "75 min", volume: "12,500 kg" },
                { date: "Martes 24 Dic", type: "Pull", duration: "65 min", volume: "8,200 kg" },
                { date: "Lunes 23 Dic", type: "Push", duration: "60 min", volume: "7,800 kg" },
              ].map((workout, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                >
                  <div>
                    <p className="font-medium">{workout.type}</p>
                    <p className="text-sm text-muted-foreground">{workout.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{workout.duration}</p>
                    <p className="text-xs text-muted-foreground">{workout.volume}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercises">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg">Biblioteca de Ejercicios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {["Pecho", "Espalda", "Hombros", "Bíceps", "Tríceps", "Piernas", "Core"].map((group) => (
                  <div 
                    key={group}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{group}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
