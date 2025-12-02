import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import logo from "@assets/generated_images/minimalist_abstract_geometric_logo_for_ai_evaluation_platform.png";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/domain/maps");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access EvalsGenie
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" defaultValue="demo@evalsgenie.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="password" />
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700" type="submit">
              Sign in
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-center text-muted-foreground w-full">
            Don't have an account? <Link href="/"><a className="underline hover:text-indigo-600">Contact sales</a></Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
