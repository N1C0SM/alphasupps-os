import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-24 h-24 rounded-2xl gradient-lime mx-auto flex items-center justify-center">
          <span className="font-display font-bold text-5xl text-primary-foreground">404</span>
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Página no encontrada</h1>
          <p className="text-muted-foreground">La página que buscas no existe o ha sido movida.</p>
        </div>
        <Button asChild size="lg">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </motion.div>
    </div>
  );
}
