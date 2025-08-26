import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import API from "@/services/api";
import { useState, useEffect } from "react";

export default function Services() {
  const [services = [], setServices] = useState([]);
  const [loading, setLoading] = useState(true);

const loadServices = async () =>{
  try {
    const res = await API.get('admin_operations/services');
    setServices(res.data);
    
  } catch (error) {
    console.log(error);
    
  }finally{
    setLoading(false);
  }
}


  useEffect(() =>{
    loadServices();

  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <motion.div
        id="services"
        className="flex flex-col items-center bg-gray-100 rounded max-w-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center justify-center p-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4
            className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit"
            style={{ color: "rgb(66, 153, 170)" }}
          >
            Services
          </h4>
          <h3 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>
            What Do I Offer
          </h3>
          <p className="max-w-200 p-3 text-center">
            It is a long established fact that a reader will be distracted by the next readable content
            of a page when looking at its layout. The point of all a using the best of all the places.
          </p>
        </motion.div>

        {/* Service Cards */}
      
        <motion.div
          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
            {
          loading ? (
            <p className="text-lg font-medium text-[rgb(66,153,170)] animate-pulse">
            Loading services...
          </p>
          ) : (
            services.map((s) => (
            <motion.div
              key={s._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="group flex flex-col items-center justify-center 
                p-6 w-64 bg-white shadow-lg rounded-2xl 
                border-2 border-[rgb(66,153,170)] 
                transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:bg-[rgba(20,46,51,1)] hover:scale-105"
              >
                <h3 className="text-3xl font-bold mb-2 text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                  {s.title}
                </h3>
              </Card>
            </motion.div>
          ))
            
          )
        }
          
        </motion.div>
      </motion.div>
    </div>
  );
}
