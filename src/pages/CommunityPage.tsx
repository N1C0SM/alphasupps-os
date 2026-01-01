import { motion } from "framer-motion";
import { 
  Users, 
  MessageCircle,
  Heart,
  TrendingUp,
  Award,
  Plus,
  Filter,
  ThumbsUp,
  Flame,
  Target,
  HelpCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default function CommunityPage() {
  const postTypeIcons = {
    progress: TrendingUp,
    question: HelpCircle,
    tip: Flame,
    motivation: Target,
  };

  const postTypeLabels = {
    progress: "Progreso",
    question: "Pregunta",
    tip: "Tip",
    motivation: "Motivación",
  };

  const posts = [
    {
      id: 1,
      author: "Carlos M.",
      avatar: "",
      type: "progress" as const,
      content: "¡4 meses de consistencia! Empecé sin poder hacer ni una dominada y hoy hice 15 seguidas. La clave ha sido la progresión gradual y no saltarme días.",
      reactions: 47,
      comments: 12,
      time: "hace 2h",
    },
    {
      id: 2,
      author: "Laura R.",
      avatar: "",
      type: "question" as const,
      content: "¿Cuánto tiempo dejáis entre series de sentadilla pesada? Últimamente me cuesta recuperar el aliento...",
      reactions: 8,
      comments: 23,
      time: "hace 4h",
    },
    {
      id: 3,
      author: "Miguel A.",
      avatar: "",
      type: "tip" as const,
      content: "Tip para mejorar el sueño: Dejar el móvil 1h antes de dormir ha sido game changer para mí. Mi calidad de sueño subió del 65% al 88% según la app.",
      reactions: 89,
      comments: 31,
      time: "hace 6h",
    },
    {
      id: 4,
      author: "Ana P.",
      avatar: "",
      type: "motivation" as const,
      content: "Recordatorio: El progreso no es lineal. Ayer tuve un día horrible de entreno pero hoy volví más fuerte. No os rindáis en los días malos.",
      reactions: 124,
      comments: 18,
      time: "hace 8h",
    },
  ];

  const leaderboard = [
    { rank: 1, name: "David S.", streak: 145, points: 12450 },
    { rank: 2, name: "María L.", streak: 98, points: 9870 },
    { rank: 3, name: "Pablo G.", streak: 87, points: 8540 },
    { rank: 4, name: "Carmen V.", streak: 76, points: 7320 },
    { rank: 5, name: "Tú", streak: 45, points: 4560, isCurrentUser: true },
  ];

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
          <h1 className="text-3xl font-display font-bold">Comunidad</h1>
          <p className="text-muted-foreground">Comparte, aprende y motívate con otros Alphas.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Publicar
        </Button>
      </motion.div>

      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="feed" className="flex-1">Feed</TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex-1">Ranking</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-4">
          {/* Filter */}
          <motion.div variants={item} className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button variant="secondary" size="sm">Todos</Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <TrendingUp className="h-4 w-4" />
              Progreso
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <HelpCircle className="h-4 w-4" />
              Preguntas
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <Flame className="h-4 w-4" />
              Tips
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <Target className="h-4 w-4" />
              Motivación
            </Button>
          </motion.div>

          {/* Posts */}
          {posts.map((post) => {
            const TypeIcon = postTypeIcons[post.type];
            return (
              <motion.div key={post.id} variants={item}>
                <Card className="glass">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {post.author.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{post.author}</span>
                          <Badge variant="secondary" className="gap-1 text-xs">
                            <TypeIcon className="h-3 w-3" />
                            {postTypeLabels[post.type]}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{post.time}</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">{post.content}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-primary">
                            <ThumbsUp className="h-4 w-4" />
                            {post.reactions}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                            <MessageCircle className="h-4 w-4" />
                            {post.comments}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          {/* Leaderboard Header */}
          <motion.div variants={item}>
            <Card glow className="overflow-hidden">
              <div className="gradient-lime h-1" />
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-display font-bold">#5</p>
                    <p className="text-sm text-muted-foreground">Tu posición</p>
                  </div>
                  <div className="text-center">
                    <Flame className="h-8 w-8 text-energy-medium mx-auto mb-2" />
                    <p className="text-3xl font-display font-bold">45</p>
                    <p className="text-sm text-muted-foreground">Días racha</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-status-success mx-auto mb-2" />
                    <p className="text-3xl font-display font-bold">4,560</p>
                    <p className="text-sm text-muted-foreground">Puntos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Leaderboard List */}
          <motion.div variants={item}>
            <Card className="glass">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Alphas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                      user.isCurrentUser 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-muted/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                      user.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                      user.rank === 3 ? 'bg-amber-600/20 text-amber-600' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {user.rank}
                    </div>
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{user.name}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Flame className="h-3 w-3 text-energy-medium" />
                        <span>{user.streak} días</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold">{user.points.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">puntos</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
