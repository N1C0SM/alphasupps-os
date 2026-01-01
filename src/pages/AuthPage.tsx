import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

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

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Por favor ingresa un email válido");
      return;
    }

    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast.error("Credenciales inválidas. Verifica tu email y contraseña.");
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success("¡Bienvenido de vuelta!");
          navigate("/");
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes("User already registered")) {
            toast.error("Este email ya está registrado. Intenta iniciar sesión.");
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success("¡Cuenta creada! Revisa tu email para confirmar.");
          setIsLogin(true);
        }
      }
    } catch (error) {
      toast.error("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md"
      >
        {/* Logo */}
        <motion.div variants={item} className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gradient-lime flex items-center justify-center mx-auto mb-4">
            <span className="font-display font-bold text-3xl text-primary-foreground">α</span>
          </div>
          <h1 className="font-display font-bold text-2xl">AlphaSupps OS</h1>
          <p className="text-muted-foreground text-sm mt-1">Tu sistema operativo personal</p>
        </motion.div>

        {/* Auth Card */}
        <motion.div variants={item}>
          <Card glow className="border-border/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="font-display text-xl">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? "Ingresa tus credenciales para continuar" 
                  : "Completa los datos para registrarte"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (signup only) */}
                {!isLogin && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full gradient-lime text-primary-foreground font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <ArrowRight className="h-4 w-4 mr-2" />
                  )}
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </Button>
              </form>

              {/* Toggle Login/Signup */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setPassword("");
                      setConfirmPassword("");
                    }}
                    className="ml-1 text-primary hover:underline font-medium"
                    disabled={isLoading}
                  >
                    {isLogin ? "Regístrate" : "Inicia Sesión"}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.p variants={item} className="text-center text-xs text-muted-foreground mt-6">
          Al continuar, aceptas nuestros términos de servicio y política de privacidad.
        </motion.p>
      </motion.div>
    </div>
  );
}
