
import Image from "@/assets/website.jpg";
export default function Skills(){

    const sKills = [
        {
            key: "react",
            skill: "React"
        },
        {
            key: "react",
            skill: "React"
        },
        {
            key: "react",
            skill: "React"
        },
    ]
    return(
        <div id="skills" className="flex flex-wrap p-10 items-center justify-center">
            <section className="bg-gray-100 p-10 flex flex-col items-center justify-center rounded">
                <div className="flex flex-col max-w-200 items-center justify-center">
                    <h4 className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit" style={{ color: "rgb(66, 153, 170)" }}>My Skills</h4>
                    <h3 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>I am expert in</h3>
                    
                    <p className="max-w-100 p-2">I've created and updated websites for many 
                        different clients. I worked with multiple CMS 
                        including WordPress, Joomla, and Drupal, as well 
                        as created my own custom website management system in Node.js.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {sKills.map(s =>(
                    <div
                    key={s.key}
                    className="w-20 h-20 rounded-full border-8 border-b-[rgb(66,153,170)] 
                    bg-[rgba(20,46,51,1)] text-white
                    flex items-center justify-center p-1"
                    >
                    {s.skill}
                    </div>


                    ))}
                    
                </div>
            </section>
                <section className="w-full md:w-1/2 p-6 flex items-center justify-center">
                    <img
                      src={Image}
                      alt="Portrait of the system developer"
                      className="w-full h-auto rounded-lg max-w-md"
                    />
                  </section>

        </div>
    )
}