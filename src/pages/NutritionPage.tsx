import { motion } from "framer-motion";
import { 
  Apple, 
  Beef, 
  Wheat, 
  Droplet,
  Plus,
  Clock,
  Flame,
  ChevronRight,
  UtensilsCrossed
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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

export default function NutritionPage() {
  const macros = {
    calories: { current: 1650, target: 2400 },
    protein: { current: 120, target: 180 },
    carbs: { current: 180, target: 280 },
    fat: { current: 55, target: 75 },
  };

  const meals = [
    {
      name: "Desayuno",
      time: "07:30",
      calories: 550,
      foods: ["Avena con frutas", "Huevos revueltos", "Café"],
      completed: true,
    },
    {
      name: "Media Mañana",
      time: "10:30",
      calories: 300,
      foods: ["Yogur griego", "Almendras"],
      completed: true,
    },
    {
      name: "Almuerzo",
      time: "13:00",
      calories: 800,
      foods: ["Pollo a la plancha", "Arroz integral", "Ensalada"],
      completed: true,
    },
    {
      name: "Merienda",
      time: "17:00",
      calories: 350,
      foods: ["Batido de proteína", "Plátano"],
      completed: false,
    },
    {
      name: "Cena",
      time: "20:30",
      calories: 400,
      foods: ["Salmón", "Verduras asadas"],
      completed: false,
    },
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
        <h1 className="text-3xl font-display font-bold">Nutrición</h1>
        <p className="text-muted-foreground">Plan personalizado según tus objetivos y preferencias.</p>
      </motion.div>

      {/* Daily Summary */}
      <motion.div variants={item}>
        <Card glow className="overflow-hidden">
          <div className="gradient-lime h-1" />
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                Resumen del Día
              </CardTitle>
              <span className="text-2xl font-display font-bold">
                {macros.calories.current} / {macros.calories.target} kcal
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <Progress 
              value={(macros.calories.current / macros.calories.target) * 100} 
              className="h-4 mb-4"
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Beef className="h-4 w-4 text-red-400" />
                  <span className="text-xs text-muted-foreground">Proteína</span>
                </div>
                <p className="text-lg font-display font-bold">{macros.protein.current}g</p>
                <Progress 
                  value={(macros.protein.current / macros.protein.target) * 100}
                  className="h-1 mt-1"
                  indicatorClassName="bg-red-400"
                />
                <p className="text-xs text-muted-foreground mt-1">/{macros.protein.target}g</p>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Wheat className="h-4 w-4 text-amber-400" />
                  <span className="text-xs text-muted-foreground">Carbos</span>
                </div>
                <p className="text-lg font-display font-bold">{macros.carbs.current}g</p>
                <Progress 
                  value={(macros.carbs.current / macros.carbs.target) * 100}
                  className="h-1 mt-1"
                  indicatorClassName="bg-amber-400"
                />
                <p className="text-xs text-muted-foreground mt-1">/{macros.carbs.target}g</p>
              </div>
              
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Droplet className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-muted-foreground">Grasas</span>
                </div>
                <p className="text-lg font-display font-bold">{macros.fat.current}g</p>
                <Progress 
                  value={(macros.fat.current / macros.fat.target) * 100}
                  className="h-1 mt-1"
                  indicatorClassName="bg-blue-400"
                />
                <p className="text-xs text-muted-foreground mt-1">/{macros.fat.target}g</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Meals */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5" />
                Comidas de Hoy
              </CardTitle>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Añadir
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {meals.map((meal, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer ${
                  meal.completed 
                    ? 'bg-muted/30 border-border' 
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  meal.completed ? 'bg-status-success/20' : 'bg-primary/10'
                }`}>
                  <Apple className={`h-6 w-6 ${meal.completed ? 'text-status-success' : 'text-primary'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`font-medium ${meal.completed ? 'text-muted-foreground' : ''}`}>
                      {meal.name}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {meal.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{meal.foods.join(", ")}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{meal.calories}</p>
                  <p className="text-xs text-muted-foreground">kcal</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Add */}
      <motion.div variants={item}>
        <Card className="glass">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Añadir Rápido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Proteína Whey", cal: 120, pro: 24 },
                { name: "Huevo", cal: 70, pro: 6 },
                { name: "Pollo 100g", cal: 165, pro: 31 },
                { name: "Arroz 100g", cal: 130, pro: 3 },
              ].map((food, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  className="h-auto flex-col py-3"
                >
                  <span className="font-medium text-sm">{food.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {food.cal} kcal • {food.pro}g pro
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
