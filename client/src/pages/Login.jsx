import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import API from "../services/api";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { DotBackground } from "@/components/lightswind/grid-dot-background";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "", "error", or "success"
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("All fields are required");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const res = await API.post("/auth/login", { email, password });

      if (!res.data?.token) {
        setMessage("Login failed: No token received");
        setMessageType("error");
        return;
      }

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful. Redirecting...");
      setMessageType("success");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";
      setMessage(errorMsg);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="w-full h-screen">
  <DotBackground
    dotSize={1}
    dotColor="#d4d4d4"
    darkDotColor="#404040"
    spacing={20}
    showFade={true}
    fadeIntensity={20}
    className="flex items-center justify-center w-full h-full"
  >
    <Card className="w-full max-w-md shadow-xl animate-fade bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Log In</CardTitle>
        <CardDescription
          className={`text-sm mt-1 ${
            messageType === "error"
              ? "text-red-600"
              : messageType === "success"
              ? "text-green-600"
              : "text-zinc-500"
          }`}
        >
          {message || "Enter your credentials to continue"}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button
          onClick={handleLogin}
          disabled={loading}
        className="w-full bg-[rgb(66,153,170)] hover:bg-[rgb(56,133,150)] text-white font-semibold shadow-md transition-all duration-200"
 >
          {loading ? "Logging in..." : "Log In"}
        </Button>
        <div className="flex items-center justify-between text-sm">
          <Link
            to="/home"
            className="flex items-center gap-1 text-zinc-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <p className="text-zinc-600 dark:text-zinc-300">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  </DotBackground>
</div>

  );
}
