import Navbar from "@/components/Navbar";
import HomeHeader from "@/components/HomeHeader";
import About from "@/components/About";


export default function Home(){
    return(
 
       <div className="w-full min-h-screen bg-gray-300">
        <Navbar />
        <HomeHeader />
        <About />
        </div>



    )
}