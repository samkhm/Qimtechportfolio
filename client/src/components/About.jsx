import Image from "@/assets/laptop.jpg"
import { DotBackground } from "@/components/lightswind/grid-dot-background";
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";


export default function About(){

    const expExperience = [
        {
            key : "years",
            number : 1,
            desc :  "Years Experience"

        },
                {
            key : "project",
            number : 30,
            desc :  "Projects Done"

        },

                {
            key : "years",
            number : 10,
            desc :  "Happy Clients"

        }

    ];
    return(
        <DotBackground 
            dotSize={1}
            dotColor="#d4d4d4"
            darkDotColor="#404040"
            spacing={20}
            showFade={true}
            fadeIntensity={20}
            className="h-[500px]"
            >
        
        
        <div id="about" className="w-full flex flex-wrap scroll-mt-20 p-5 mt-60 md:mt-1">
                  <section className="w-full md:w-1/2 flex items-center justify-center">
                    <img src={Image} alt="My image" className="w-full h-auto rounded-lg max-w-md" />
                  </section>
           
            <section className="w-full md:w-1/2 p-6 flex flex-col justify-center h-auto bg-gray-100 rounded">
             <h4 className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit" style={{ color: "rgb(66, 153, 170)" }}>About Me</h4>
             <h3 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>I AM A Passionate Web Designer</h3>
             <p>Obviously I am a Web Designer. Web Developer with over 7 years of the best experience. Experienced with all stages of the development cycle for ourself dynamic web projects. 
                The as opposed to using Content here, 
                content here, making it look like readable English.</p>
           
            <h3 className="text-xl font-semibold p-2" style={{ color: "rgb(66, 153, 170)" }}>Qimtech Solutions</h3>
            <p>I have a brand called <a href="">Qimtech Solution</a> am using </p>

            <h3 className="text-xl font-semibold p-2" style={{ color: "rgb(66, 153, 170)" }}>Moder Work</h3>
               <p>I've worked with React, express, mongo, sql etc</p>             
            </section>
        </div>
   
         {/* <div className="flex flex-wrap align-center justify-center gap-5">
                
                {expExperience.map(item => (
                    <Card key={item.key}>
                        <CardContent>
                            <CardHeader>`{item.number} +`</CardHeader>
                            <CardHeader>{item.desc}</CardHeader>
                        </CardContent>
                        
                    </Card>
                ))}      



            </div> */}
</DotBackground>
    )
}