import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import API from "../services/api";
import { Link } from "react-router-dom"
import { toast } from "sonner";
import { DotBackground } from "@/components/lightswind/grid-dot-background";


export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "", "error", or "success"


const handleSignup = async () => {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 ;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  // Trimmed input values
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedEmail = email.trim();
 
  const trimmedPassword = password.trim();

  // Check for empty fields
  if (
    !trimmedFirstName ||
    !trimmedLastName ||
    !trimmedEmail ||
    
    !trimmedPassword
  ) {
    setMessage("All fields are required!");
    setMessageType("error");
    return;
  }

  // Validate names
  if (!nameRegex.test(trimmedFirstName)) {
    setMessage("First name must contain only letters");
    setMessageType("error");
    return;
  }

  if (!nameRegex.test(trimmedLastName)) {
    setMessage("Last name must contain only letters");
    setMessageType("error");
    return;
  }

  // Validate email
  if (!emailRegex.test(trimmedEmail)) {
    setMessage("Invalid email format");
    setMessageType("error");
    return;
  }

 

  // Validate password
  if (!passwordRegex.test(trimmedPassword)) {
    setMessage(
      "Password must be at least 8 characters, include a letter, number, and special character"
    );
    setMessageType("error");
    return;
  }

  // All validations passed
  setLoading(true);
  setMessage("");
  setMessageType("");

  try {
    const res = await API.post("/auth/signup", {
      first_name: trimmedFirstName,
      last_name: trimmedLastName,
      email: trimmedEmail,
      
      password: trimmedPassword,
    });

    if (!res.data?.token) {
      setMessage("Register failed: No token received");
      setMessageType("error");
      return;
    }

    localStorage.setItem("token", res.data.token);
    setMessage("Signup successful. Redirecting...");
    setMessageType("success");
    toast("Registered successfully");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  } catch (err) {
    const errorMsg =
      err.response?.data?.message || "Signup failed. Please try again.";
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
    // className="flex items-center justify-center w-full h-full"
  >
    <Card className="w-screen max-w-md shadow-xl animate-fade bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
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
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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

      <CardFooter className="mt-2">
        <Button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-[rgb(66,153,170)] hover:bg-[rgb(56,133,150)] text-white font-semibold shadow-md transition-all duration-200"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </Button>
      </CardFooter>

      <p className="text-sm text-center text-zinc-600 dark:text-zinc-300 mt-4 mb-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[rgb(66,153,170)] hover:underline"
        >
          Login
        </Link>
      </p>
    </Card>
  </DotBackground>
</div>

   
  );
}
