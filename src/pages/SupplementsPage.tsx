import { motion } from "framer-motion";
import { 
  Pill, 
  Clock,
  CheckCircle2,
  Info,
  ShoppingCart,
  ChevronRight,
  Sparkles,
  Sun,
  Moon,
  Dumbbell
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

export default function SupplementsPage() {
  const todaySupplements = [
    { name: "Creatina Monohidrato", dose: "5g", timing: "morning", taken: true, benefit: "Fuerza y recuperación" },
    { name: "Omega-3", dose: "2 cápsulas", timing: "morning", taken: true, benefit: "Salud cardiovascular" },
    { name: "Vitamina D3", dose: "4000 UI", timing: "morning", taken: true, benefit: "Sistema inmune" },
    { name: "Pre-Workout AlphaSupps", dose: "1 scoop", timing: "pre_workout", taken: false, benefit: "Energía y enfoque" },
    { name: "Whey Protein AlphaSupps", dose: "30g", timing: "post_workout", taken: false, benefit: "Síntesis proteica" },
    { name: "Magnesio Bisglicinato", dose: "400mg", timing: "evening", taken: false, benefit: "Relajación y sueño" },
    { name: "ZMA", dose: "3 cápsulas", timing: "before_bed", taken: false, benefit: "Recuperación nocturna" },
  ];

  const timingIcons = {
    morning: Sun,
    pre_workout: Dumbbell,
    post_workout: Sparkles,
    evening: Clock,
    before_bed: Moon,
  };

  const timingLabels = {
    morning: "Mañana",
    pre_workout: "Pre-Entreno",
    post_workout: "Post-Entreno",
    evening: "Tarde",
    before_bed: "Antes de Dormir",
  };

  const allProducts = [
    { name: "Whey Protein", category: "Proteínas", description: "Proteína de suero de alta calidad", benefits: ["Recuperación muscular", "Síntesis proteica"] },
    { name: "Creatina Monohidrato", category: "Rendimiento", description: "Mejora fuerza y potencia", benefits: ["Fuerza", "Resistencia"] },
    { name: "Pre-Workout", category: "Energía", description: "Energía y enfoque para entrenar", benefits: ["Energía", "Concentración"] },
    { name: "BCAA", category: "Recuperación", description: "Aminoácidos de cadena ramificada", benefits: ["Anti-catabólico", "Recuperación"] },
    { name: "Glutamina", category: "Recuperación", description: "Recuperación intestinal y muscular", benefits: ["Inmunidad", "Recuperación"] },
    { name: "Omega-3", category: "Salud", description: "Ácidos grasos esenciales", benefits: ["Corazón", "Cerebro"] },
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
        <h1 className="text-3xl font-display font-bold">Suplementos</h1>
        <p className="text-muted-foreground">Tu stack personalizado de AlphaSupps.</p>
      </motion.div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="today" className="flex-1">Plan de Hoy</TabsTrigger>
          <TabsTrigger value="catalog" className="flex-1">Catálogo</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          {/* Today's Progress */}
          <motion.div variants={item}>
            <Card glow className="overflow-hidden">
              <div className="gradient-lime h-1" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-sm">Suplementos de Hoy</p>
                    <p className="text-3xl font-display font-bold">
                      {todaySupplements.filter(s => s.taken).length}/{todaySupplements.length}
                    </p>
                  </div>
                  <Button variant="outline">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Supplements by Timing */}
          {Object.entries(timingLabels).map(([timing, label]) => {
            const supplements = todaySupplements.filter(s => s.timing === timing);
            if (supplements.length === 0) return null;
            
            const TimingIcon = timingIcons[timing as keyof typeof timingIcons];
            
            return (
              <motion.div key={timing} variants={item}>
                <Card className="glass">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TimingIcon className="h-5 w-5 text-primary" />
                      {label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {supplements.map((supp, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${
                          supp.taken 
                            ? 'bg-primary/5 border-primary/20' 
                            : 'bg-card border-border hover:border-primary/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          supp.taken ? 'bg-status-success/20' : 'bg-muted'
                        }`}>
                          {supp.taken ? (
                            <CheckCircle2 className="h-5 w-5 text-status-success" />
                          ) : (
                            <Pill className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${supp.taken ? 'text-muted-foreground' : ''}`}>
                            {supp.name}
                          </p>
                          <p className="text-sm text-muted-foreground">{supp.dose}</p>
                        </div>
                        <Button 
                          variant={supp.taken ? "ghost" : "secondary"} 
                          size="sm"
                          disabled={supp.taken}
                        >
                          {supp.taken ? 'Tomado' : 'Marcar'}
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </TabsContent>

        <TabsContent value="catalog" className="space-y-4">
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Productos AlphaSupps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {allProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 cursor-pointer transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Pill className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium">{product.name}</p>
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <div className="flex gap-1 mt-2">
                        {product.benefits.map((benefit, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Card */}
          <motion.div variants={item}>
            <Card className="glass border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Suplementación Inteligente</p>
                    <p className="text-sm text-muted-foreground">
                      Tu plan de suplementación se ajusta automáticamente según tu entrenamiento, 
                      sueño y objetivos. Solo te recomendamos lo que realmente necesitas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
