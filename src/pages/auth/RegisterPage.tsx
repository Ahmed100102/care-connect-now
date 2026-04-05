import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Stethoscope } from "lucide-react";

const RegisterPage = () => {
  const [step, setStep] = useState<"role" | "form">("role");
  const [role, setRole] = useState<UserRole>("customer");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register({ email, password, name, role });
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Your Account</CardTitle>
          <CardDescription>Join CareConnect today</CardDescription>
        </CardHeader>
        <CardContent>
          {step === "role" ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center mb-4">I want to...</p>
              <div className="grid gap-3 grid-cols-2">
                <button
                  onClick={() => { setRole("customer"); setStep("form"); }}
                  className="flex flex-col items-center gap-3 rounded-xl border-2 border-border p-6 transition-all hover:border-primary hover:bg-secondary"
                >
                  <Heart className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-foreground">Find Care</span>
                  <span className="text-xs text-muted-foreground text-center">Book nurses for healthcare services</span>
                </button>
                <button
                  onClick={() => { setRole("nurse"); setStep("form"); }}
                  className="flex flex-col items-center gap-3 rounded-xl border-2 border-border p-6 transition-all hover:border-primary hover:bg-secondary"
                >
                  <Stethoscope className="h-8 w-8 text-primary" />
                  <span className="font-semibold text-foreground">Provide Care</span>
                  <span className="text-xs text-muted-foreground text-center">Offer your nursing services</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <button type="button" onClick={() => setStep("role")} className="text-sm text-primary hover:underline mb-2">
                ← Change role
              </button>
              <div className="rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground text-center">
                Registering as <strong>{role === "customer" ? "Patient" : "Nurse"}</strong>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Jane Doe" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          )}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Sign In</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
