import Image from "@/assets/website.jpg";
import { motion } from "framer-motion";

export default function Skills() {
  const sKills = [
    { key: "js", skill: "Java Script" },
    { key: "react1", skill: "React" },
    { key: "node", skill: "Node.js" },
    { key: "ex", skill: "Express" },
    { key: "ph", skill: "PhP" },
    { key: "py", skill: "Python" },
    { key: "sql", skill: "SQL" },
    { key: "mongo", skill: "MongoDB" },
    { key: "tailwind", skill: "Tailwind CSS" },
  ];

  return (
    <div id="skills" className="flex flex-wrap p-10 items-center justify-center">
      {/* Left - Skills Text + Bubbles */}
      <section className="bg-gray-100 p-10 flex flex-col items-center justify-center rounded">
        {/* Headings and Paragraph */}
        <div className="flex flex-col max-w-200 items-center justify-center">
          <motion.h4
            className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h4>

          <motion.h3
            className="text-xl font-semibold"
            style={{ color: "rgb(66, 153, 170)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I am expert in
          </motion.h3>

        <motion.p
  className="max-w-100 text-left w-full"
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
☑️ I build modern, scalable web applications using technologies like React, Node.js, Express, and MongoDB.
  <br />
 ☑️ I’ve also developed custom content management systems from scratch.
  <br />
☑️  Whether it’s creating clean UI/UX or optimizing backend performance, I focus on delivering high-quality, maintainable solutions.
</motion.p>

        </div>

        {/* Skills Bubbles */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {sKills.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full border-8 border-b-[rgb(66,153,170)] 
                bg-[rgba(20,46,51,1)] text-white flex items-center justify-center 
                p-1 text-sm text-center"
            >
              {s.skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Right - Image */}
      <section className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <motion.img
          src={Image}
          alt="System Developer"
          className="w-full h-auto rounded-lg max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </section>
    </div>
  );
}
