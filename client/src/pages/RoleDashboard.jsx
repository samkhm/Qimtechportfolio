import { getUserRole } from "../utils/auth";
import  AdminDashboard from "./AdminDashboard";
import { Navigate } from "react-router-dom";

export default function RoleDashboard(){
    const userRole = getUserRole();

    // if no role go to login
    if(!userRole){
        return <Navigate to="/login" replace />
    }

    // render dashboard based on role
    switch(userRole){
        case 'admin':
            return <AdminDashboard />;
       
        default:
            return <Navigate to="/login" replace />
    }
}