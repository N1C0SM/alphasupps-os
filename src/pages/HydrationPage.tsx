import { motion } from "framer-motion";
import { 
  Droplets, 
  Plus,
  Minus,
  TrendingUp,
  Clock,
  Thermometer,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function HydrationPage() {
  const hydration = {
    current: 1600,
    target: 3000,
    percentage: 53,
  };

  const history = [
    { time: "07:15", amount: 250, type: "Agua" },
    { time: "09:30", amount: 300, type: "Café" },
    { time: "11:00", amount: 400, type: "Agua" },
    { time: "13:30", amount: 350, type: "Agua" },
    { time: "15:45", amount: 300, type: "Té" },
  ];

  const quickAdd = [
    { ml: 250, label: "Vaso" },
    { ml: 500, label: "Botella" },
    { ml: 330, label: "Lata" },
    { ml: 1000, label: "Litro" },
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
        <h1 className="text-3xl font-display font-bold">Hidratación</h1>
        <p className="text-muted-foreground">Mantén tu cuerpo óptimamente hidratado.</p>
      </motion.div>

      {/* Main Progress */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardContent className="pt-6 pb-8">
            <div className="flex flex-col items-center">
              {/* Circular Progress */}
              <div className="relative w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={553}
                    strokeDashoffset={553 - (553 * hydration.percentage) / 100}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Droplets className="h-8 w-8 text-primary mb-2" />
                  <span className="text-4xl font-display font-bold">{hydration.current}</span>
                  <span className="text-muted-foreground">/ {hydration.target} ml</span>
                </div>
              </div>

              {/* Quick Add Buttons */}
              <div className="flex items-center gap-2 mb-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {quickAdd.map((btn, index) => (
                    <Button 
                      key={index}
                      variant="secondary" 
                      className="flex-col h-auto py-2"
                    >
                      <span className="text-lg font-bold">+{btn.ml}</span>
                      <span className="text-xs text-muted-foreground">{btn.label}</span>
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Te faltan <span className="text-primary font-medium">{hydration.target - hydration.current} ml</span> para alcanzar tu objetivo
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Factors */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Factores de Hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <Activity className="h-5 w-5 text-energy-high mb-2" />
                <span className="text-sm font-medium">Alta</span>
                <span className="text-xs text-muted-foreground">Actividad</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <Thermometer className="h-5 w-5 text-energy-medium mb-2" />
                <span className="text-sm font-medium">22°C</span>
                <span className="text-xs text-muted-foreground">Clima</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-muted/30">
                <TrendingUp className="h-5 w-5 text-primary mb-2" />
                <span className="text-sm font-medium">+500ml</span>
                <span className="text-xs text-muted-foreground">Ajuste</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Tu objetivo de hoy está ajustado por entrenamiento programado.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* History */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Registro de Hoy
              </CardTitle>
              <Badge variant="secondary">{history.length} entradas</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {history.map((entry, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-status-info/20 flex items-center justify-center">
                    <Droplets className="h-5 w-5 text-status-info" />
                  </div>
                  <div>
                    <p className="font-medium">{entry.type}</p>
                    <p className="text-sm text-muted-foreground">{entry.time}</p>
                  </div>
                </div>
                <span className="font-display font-bold">+{entry.amount}ml</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Stats */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 gap-2">
              {[85, 92, 78, 100, 53, 0, 0].map((percent, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-muted rounded-t-sm relative" style={{ height: '100px' }}>
                    <div 
                      className={`absolute bottom-0 w-full rounded-t-sm transition-all ${
                        percent >= 100 ? 'bg-status-success' : percent > 0 ? 'bg-primary' : 'bg-muted'
                      }`}
                      style={{ height: `${percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {["L", "M", "X", "J", "V", "S", "D"][index]}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-status-success" />
                <span className="text-muted-foreground">Objetivo cumplido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                <span className="text-muted-foreground">En progreso</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
