import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RoleDashboard from "./pages/RoleDashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./pages/Home";
import { Toaster } from "@/components/ui/sonner";

export default function App({children}){
  return(
    <BrowserRouter>
      < Toaster richColors position="top-right"/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to ="/home"/>}/>        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
           path="/dashboard"
           element = {
            <ProtectedRoutes>
              <RoleDashboard />
            </ProtectedRoutes>
           }
        />
      </Routes>
    </BrowserRouter>      
  )
}