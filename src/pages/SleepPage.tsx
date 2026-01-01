import { motion } from "framer-motion";
import { 
  Moon, 
  Sun,
  Clock,
  TrendingUp,
  Star,
  Zap,
  BedDouble,
  Sunrise
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

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

export default function SleepPage() {
  const sleepData = {
    lastNight: {
      duration: 7.5,
      quality: 82,
      bedtime: "23:15",
      wakeTime: "06:45",
    },
    targets: {
      bedtime: "23:00",
      wakeTime: "07:00",
      duration: 8,
    },
    weekAvg: {
      duration: 7.2,
      quality: 78,
    },
  };

  const sleepHistory = [
    { day: "Lun", hours: 7.5, quality: 85 },
    { day: "Mar", hours: 6.8, quality: 70 },
    { day: "Mié", hours: 8.0, quality: 92 },
    { day: "Jue", hours: 7.2, quality: 78 },
    { day: "Vie", hours: 7.5, quality: 82 },
    { day: "Sáb", hours: 0, quality: 0 },
    { day: "Dom", hours: 0, quality: 0 },
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
        <h1 className="text-3xl font-display font-bold">Sueño</h1>
        <p className="text-muted-foreground">Tu recuperación empieza con un buen descanso.</p>
      </motion.div>

      {/* Last Night Summary */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" />
                Anoche
              </CardTitle>
              <Badge variant={sleepData.lastNight.quality >= 80 ? "success" : "warning"}>
                {sleepData.lastNight.quality}% calidad
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <BedDouble className="h-4 w-4" />
                  <span className="text-sm">Dormido</span>
                </div>
                <p className="text-2xl font-display font-bold">{sleepData.lastNight.bedtime}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-display font-bold text-primary">
                  {sleepData.lastNight.duration}h
                </p>
                <Progress value={(sleepData.lastNight.duration / sleepData.targets.duration) * 100} className="w-24 mt-2" />
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Sunrise className="h-4 w-4" />
                  <span className="text-sm">Despierto</span>
                </div>
                <p className="text-2xl font-display font-bold">{sleepData.lastNight.wakeTime}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <Star className="h-5 w-5 text-energy-medium mb-1" />
                <span className="text-lg font-bold">{sleepData.lastNight.quality}%</span>
                <span className="text-xs text-muted-foreground">Calidad</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <Zap className="h-5 w-5 text-energy-high mb-1" />
                <span className="text-lg font-bold">85%</span>
                <span className="text-xs text-muted-foreground">Recuperación</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <TrendingUp className="h-5 w-5 text-primary mb-1" />
                <span className="text-lg font-bold">+5%</span>
                <span className="text-xs text-muted-foreground">vs Media</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tonight's Plan */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Plan de Esta Noche
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Hora de Dormir</p>
                  <p className="text-sm text-muted-foreground">Objetivo recomendado</p>
                </div>
              </div>
              <span className="text-2xl font-display font-bold">{sleepData.targets.bedtime}</span>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-energy-medium/20 flex items-center justify-center">
                  <Sun className="h-5 w-5 text-energy-medium" />
                </div>
                <div>
                  <p className="font-medium">Hora de Despertar</p>
                  <p className="text-sm text-muted-foreground">Para {sleepData.targets.duration}h de sueño</p>
                </div>
              </div>
              <span className="text-2xl font-display font-bold">{sleepData.targets.wakeTime}</span>
            </div>

            <Button className="w-full" size="lg">
              Configurar Alarma
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sleep Quality Log */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">¿Cómo dormiste anoche?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Calidad del sueño</span>
                <span className="font-medium">80%</span>
              </div>
              <Slider defaultValue={[80]} max={100} step={5} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">¿Descansado al despertar?</span>
                <span className="font-medium">75%</span>
              </div>
              <Slider defaultValue={[75]} max={100} step={5} />
            </div>
            <Button variant="secondary" className="w-full">
              Guardar Registro
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Overview */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Esta Semana</CardTitle>
              <span className="text-sm text-muted-foreground">
                Promedio: {sleepData.weekAvg.duration}h
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-2">
              {sleepHistory.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-muted rounded-t-sm relative" style={{ height: '100px' }}>
                    <div 
                      className="absolute bottom-0 w-full rounded-t-sm transition-all bg-primary"
                      style={{ 
                        height: day.hours > 0 ? `${(day.hours / 10) * 100}%` : '0%',
                        opacity: day.quality / 100 
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{day.day}</span>
                  {day.hours > 0 && (
                    <span className="text-xs font-medium">{day.hours}h</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
