import Home from "./pages/Home";
import { Toaster } from "@/components/ui/sonner";

export default function App({children}){
  return(
    <div>
      {children}
      <Toaster position="top-center" />
      <Home />
    </div> 
    
        
  )
}