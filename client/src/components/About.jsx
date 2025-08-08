import Image from "@/assets/laptop.jpg";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/lightswind/button";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function About() {
  const expExperience = [
    { key: "years", number: 1, desc: "Years Experience" },
    { key: "project", number: 30, desc: "Projects Done" },
    { key: "clients", number: 10, desc: "Happy Clients" },
    
  ];

  const hobbIes = [
    { key: "coding", hobby: "Coding" },
    { key: "ux", hobby: "UX Research" },
    { key: "dev", hobby: "DevOps" },
    {key:"gd", hobby: "Graphic Design"},
    {key:"pj", hobby:"Project Manage"},
    {key:"ms", hobby:"Music"},
    {key:"pg", hobby:"Photography"}
  ];

  return (
    <div id="about" className="w-full flex flex-col items-center justify-center">
      <div className="max-w-300 flex flex-wrap scroll-mt-20 p-5">
        {/* Left - Image */}
        <motion.section
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Image}
            alt="My image"
            className="w-full h-auto rounded-lg max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.section>

        {/* Right - Content */}
        <section className="w-full md:w-1/2 p-6 flex flex-col justify-center h-auto bg-gray-100 rounded">
          <motion.h4
            className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h4>

          <motion.h3
            className="text-xl font-semibold"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Full-Stack Web Systems Developer | MERN Stack Specialist
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Welcome to <strong>Qimtech Solutions</strong> — your partner in building modern, custom web systems that solve real business challenges.
            <br /><br />
            I’m a Full-Stack Developer with deep expertise in the MERN stack (MongoDB, Express, React, Node.js). From interactive dashboards and client portals to internal tools and automation systems, I create software that’s fast, scalable, and easy to maintain.
            <br /><br />
            Alongside running Qimtech, I offer <strong>freelance development services</strong> for startups, small businesses, and digital agencies. Whether you need a complete system or just extra hands on a sprint, I deliver clean, production-ready code with a focus on performance and user experience.
            <br /><br />
            Let’s build something that works — and works well.
          </motion.p>

          <motion.h3
            className="text-xl font-semibold p-2"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Qimtech Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>Qimtech Solutions</strong> is the personal brand I operate under — a platform for delivering high-quality freelance services and full-stack web development projects. Every line of code I write reflects the values of Qimtech: precision, performance, and practical solutions.
          </motion.p>

          <motion.h3
            className="text-xl font-semibold p-2"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Modern Work
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            I work with modern technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, along with tools like <strong>Git</strong>, <strong>Figma</strong>, <strong>Trello</strong>, and <strong>Vercel</strong> for smooth collaboration and deployment. My focus is always on clean architecture, scalability, and user-first design.
          </motion.p>

          <Button className="mt-4 w-fit px-6 py-2 bg-[rgb(66,153,170)] text-white rounded hover:bg-[rgba(20,46,51,1)] transition-all">
             <a href="#contacts">Let's Work Together</a>
          </Button>
        </section>
      </div>

      {/* Experience Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {expExperience.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              className="group flex flex-col items-center justify-center 
                p-6 w-64 bg-white shadow-lg rounded-2xl 
                border-2 border-[rgb(66,153,170)] 
                transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:bg-[rgba(20,46,51,1)] hover:scale-105"
            >
              <h2 className="text-3xl font-bold mb-2 text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                <CountUp end={item.number} duration={2} suffix="+" />
              </h2>
              <h3 className="text-lg text-center text-[rgb(66,153,170)] group-hover:text-white transition-colors duration-300">
                {item.desc}
              </h3>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Hobbies */}
      <motion.div
        className="flex flex-col items-center justify-center p-5 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit">Hobbies</h3>
        <h2 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>Things I Love To Do</h2>
        <div className="flex flex-wrap p-5 gap-5 max-w-200 items-center justify-center">
          {hobbIes.map((h, i) => (
            <motion.div
              key={h.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                className="flex p-5 w-40 bg-gray-100 text-[rgb(66,153,170)] border-b-2 border-b-[rgb(66,153,170)] hover:bg-[rgba(20,46,51,1)] hover:text-white"
              >
                {h.hobby}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
