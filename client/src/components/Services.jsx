import { Card } from "@/components/ui/card";


export default function Services(){

    const myServices = [
        {
            key: "web",
            service: "Web Design"
        },
        {
            key: "web",
            service: "Web Design"
        },
        {
            key: "web",
            service: "Web Design"
        },
        {
            key: "web",
            service: "Web Design"
        },
        {
            key: "web",
            service: "Web Design"
        },
        {
            key: "web",
            service: "Web Design"
        },
    ]
    return(
        <div className=" w-full flex items-center justify-center">
            <div id="services" className="flex flex-col items-center bg-gray-100 rounded max-w-300">
                <div className="flex flex-col items-center justify-center p-5">
                    <h4 className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit" style={{ color: "rgb(66, 153, 170)" }}>Services</h4>
                    <h3 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>What Do I Offer</h3>
                    <p className="max-w-200 p-3">It is a long established fact that a reader 
                        will be distracted by the next readable content 
                        of a page when looking at its layout. 
                        The point of all a using the best of all the places.

                    </p>
                </div>

                <div className="flex max-w-400 flex-wrap w-fit p-5 gap-3">
                    {myServices.map(s =>(
                        <Card
                        key={s.key}
                            
                            className="group flex flex-col items-center justify-center 
    p-6 w-64 bg-white shadow-lg rounded-2xl 
    border-2 border-[rgb(66,153,170)] 
    transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:bg-[rgba(20,46,51,1)] hover:scale-105"
                        >
                            <h3 className="text-3xl font-bold mb-2 text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                                {s.service}
                            </h3>
                           
                        </Card>

                    ))}
                             
                </div>

            </div>

        </div>
            
            
         
    )
}