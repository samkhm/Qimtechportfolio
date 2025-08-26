import { Card, CardContent } from "@/components/ui/card";
import API from "@/services/api";
import { useState, useEffect } from "react";

export default function Testimonials() {
 const [testimonies = [], setTestimonies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTestimonies = async () =>{
    try {
      const res = await API.get('/admin_operations/testimony');
      setTestimonies(res.data);
      
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false);

    }
  }
useEffect(() => {
  loadTestimonies();

}, [])

const approvedTestimony = testimonies.filter(t => t.approved === true);

  return (
    <div className="max-w-screen" id="testimonials">
      <div className="py-16 bg-background overflow-hidden flex items-center justify-center dark:text-white" >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up bg-gray-100 p-2">
          <h3 className="text-lg font-semibold text-testimonial-accent mb-2 uppercase tracking-wide">
            Testimonials
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-testimonial-text" style={{ color: "rgb(66, 153, 170)" }}>
            What Clients Say
          </h2>
        </div>

<div className="overflow-hidden relative">
  {/* Gradient overlays */}
  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

  {/* Scrolling container */}
  <div
    className="testimonial-scroll"
    aria-label="Client Testimonials"
  >
    <div className="flex">

      {
        loading ? (
          <p className="text-lg font-medium text-[rgb(66,153,170)] animate-pulse ml-90">
            Loading testimonies...
          </p>          
        ):(

          approvedTestimony.map((test) => (
        <Card
          key={test._id}
          className="flex-shrink-0 w-80 mx-4 bg-card border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <blockquote className="text-testimonial-text leading-relaxed mb-4 text-sm font-medium">
              “{test.message}”
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-testimonial-accent rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">
                  {`${test.first_name?.[0] || ""}${test.last_name?.[0] || ""}`}

                </span>
              </div>
              <div>
                <h4 className="font-semibold text-testimonial-text">
                  {`${test.first_name}  ${test.last_name}`}
                </h4>
                <p className="text-testimonial-muted text-sm">
                  Verified Client
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))

        )
      }



    </div>
  </div>
</div>

      </div>
    </div>

    </div>
    
  );
}
