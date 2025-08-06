import Image from "@/assets/laptop.jpg"

import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/lightswind/button";
import  CountUp  from "react-countup";

export default function About() {

    const expExperience = [
        {
            key: "years",
            number: 1,
            desc: "Years Experience"

        },
        {
            key: "project",
            number: 30,
            desc: "Projects Done"

        },

        {
            key: "years",
            number: 10,
            desc: "Happy Clients"

        }

    ];
    const hobbIes = [
        {
            key: "coding",
            hobby: "Coding"
        },
        {
            key: "drawing",
            hobby: "Drawing"
        },
        ,
        {
            key: "drawing",
            hobby: "Drawing"
        },



    ];
    return (

      
            <div id="about" className="w-full flex flex-col items-center justify-center">

                <div className="max-w-300 flex flex-wrap scroll-mt-20 p-5 ">
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



                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {expExperience.map(item => (
                        <Card
                            key={item.key}
                            className="group flex flex-col items-center justify-center 
    p-6 w-64 bg-white shadow-lg rounded-2xl 
    border-2 border-[rgb(66,153,170)] 
    transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:bg-[rgba(20,46,51,1)] hover:scale-105"
                        >
                            <h2 className="text-3xl font-bold mb-2 text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                               <CountUp end={item.number} duration={2} suffix="+"/>
                                
                            </h2>
                            <h3 className="text-lg text-center text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                                {item.desc}
                            </h3>
                        </Card>




                    ))}


                </div>
                <div className="flex flex-col items-center justify-center p-5 mt-2">
                    <h3 className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit ">Hobbies</h3>
                    <h2 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>Things I Love To Do</h2>
                    <div className="flex flex-wrap p-5 gap-5 max-w-200 items-center justify-center">
                        {hobbIes.map(h => (
                            <Button
                                key={h.key}
                                className="flex p-5 w-40 bg-gray-100 text-[rgb(66,153,170)] border-b-2 border-b-[rgb(66,153,170)] hover:bg-[rgba(20,46,51,1)] hover:text-white"
                            >
                                {h.hobby}
                            </Button>


                        ))}

                    </div>

                </div>



                <div>

                </div>
            </div>

        

    )
}