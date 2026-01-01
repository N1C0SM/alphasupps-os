import { motion } from "framer-motion";
import { 
  BookOpen, 
  Plus,
  Smile,
  Meh,
  Frown,
  Zap,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Target,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
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

export default function JournalPage() {
  const moodOptions = [
    { icon: Smile, label: "Genial", value: 5, color: "text-status-success" },
    { icon: Smile, label: "Bien", value: 4, color: "text-energy-high" },
    { icon: Meh, label: "Normal", value: 3, color: "text-energy-medium" },
    { icon: Frown, label: "Bajo", value: 2, color: "text-energy-low" },
    { icon: Frown, label: "Mal", value: 1, color: "text-destructive" },
  ];

  const recentEntries = [
    { 
      date: "Jueves 26 Dic", 
      mood: 4, 
      energy: 85,
      gratitude: ["Buen entrenamiento", "Llamada con familia"],
      priorities: ["Terminar proyecto", "Preparar presentación"]
    },
    { 
      date: "Miércoles 25 Dic", 
      mood: 5, 
      energy: 90,
      gratitude: ["Navidad en familia", "Descanso merecido"],
      priorities: ["Disfrutar el día", "Agradecer"]
    },
    { 
      date: "Martes 24 Dic", 
      mood: 4, 
      energy: 75,
      gratitude: ["Productivo", "Buena comida"],
      priorities: ["Cerrar pendientes", "Preparar viaje"]
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
        <h1 className="text-3xl font-display font-bold">Diario</h1>
        <p className="text-muted-foreground">Reflexiona, agradece y planifica.</p>
      </motion.div>

      {/* Date Navigation */}
      <motion.div variants={item}>
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span className="font-display font-semibold">Viernes, 27 de Diciembre</span>
          </div>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="today" className="flex-1">Hoy</TabsTrigger>
          <TabsTrigger value="history" className="flex-1">Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {/* Mood Check */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smile className="h-5 w-5" />
                  ¿Cómo te sientes hoy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between gap-2">
                  {moodOptions.map((mood, index) => (
                    <button
                      key={index}
                      className="flex-1 flex flex-col items-center gap-1 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <mood.icon className={`h-8 w-8 ${mood.color}`} />
                      <span className="text-xs text-muted-foreground">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Energy Level */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Nivel de Energía
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
                    <button
                      key={level}
                      className={`flex-1 aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                        level <= 8 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Gratitude */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  Gratitud
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  ¿Por qué 3 cosas estás agradecido hoy?
                </p>
                <div className="space-y-2">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-medium">
                        {num}
                      </span>
                      <input 
                        type="text"
                        placeholder={`Gratitud ${num}...`}
                        className="flex-1 bg-muted/30 rounded-lg px-3 py-2 text-sm border-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Priorities */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Prioridades de Hoy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  ¿Cuáles son las 3 cosas más importantes para hoy?
                </p>
                <div className="space-y-2">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-energy-high/10 flex items-center justify-center text-xs text-energy-high font-medium">
                        {num}
                      </span>
                      <input 
                        type="text"
                        placeholder={`Prioridad ${num}...`}
                        className="flex-1 bg-muted/30 rounded-lg px-3 py-2 text-sm border-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Free Writing */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Reflexiones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea 
                  placeholder="Escribe libremente tus pensamientos, reflexiones o lo que necesites expresar..."
                  className="min-h-[120px] resize-none"
                />
                <Button className="w-full">
                  Guardar Entrada
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {recentEntries.map((entry, index) => (
            <motion.div key={index} variants={item}>
              <Card className="glass">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{entry.date}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="gap-1">
                        <Smile className="h-3 w-3" />
                        {entry.mood}/5
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Zap className="h-3 w-3" />
                        {entry.energy}%
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Gratitud</p>
                    <div className="flex flex-wrap gap-1">
                      {entry.gratitude.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Prioridades</p>
                    <div className="flex flex-wrap gap-1">
                      {entry.priorities.map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
