import Navbar from "@/components/Navbar";
import HomeHeader from "@/components/HomeHeader";
import About from "@/components/About";
import Services from "@/components/Services";
import { DotBackground } from "@/components/lightswind/grid-dot-background";


export default function Home() {
    return (

        <div className="w-full min-h-screen bg-gray-300">
            <Navbar />
                        <DotBackground
                                    dotSize={1}
                                    dotColor="#d4d4d4"
                                    darkDotColor="#404040"
                                    spacing={20}
                                    showFade={true}
                                    fadeIntensity={20}
                                    className="h-fit "
                                >
            <HomeHeader />
            <About />
            <Services />

                    </DotBackground>
            
        </div>



    )
}