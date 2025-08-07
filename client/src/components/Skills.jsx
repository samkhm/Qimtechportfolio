import Image from "@/assets/website.jpg";
import { motion } from "framer-motion";

export default function Skills() {
  const sKills = [
    { key: "react1", skill: "React" },
    { key: "node", skill: "Node.js" },
    { key: "wp", skill: "WordPress" },
    { key: "sql", skill: "SQL" },
    { key: "mongo", skill: "MongoDB" },
    { key: "tailwind", skill: "Tailwind CSS" },
  ];

  return (
    <div id="skills" className="flex flex-wrap p-10 items-center justify-center">
      {/* Left Section - Skills Text + Bubbles */}
      <motion.section
        className="bg-gray-100 p-10 flex flex-col items-center justify-center rounded"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-col max-w-200 items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4
            className="text-xl font-bold p-3 border-b-[1px] border-b-[rgb(66,153,170)] mb-2 w-fit"
            style={{ color: "rgb(66, 153, 170)" }}
          >
            My Skills
          </h4>
          <h3 className="text-xl font-semibold" style={{ color: "rgb(66, 153, 170)" }}>
            I am expert in
          </h3>
          <p className="max-w-100 p-2 text-center">
            I've created and updated websites for many different clients. I worked with multiple CMS
            including WordPress, Joomla, and Drupal, as well as created my own custom website
            management system in Node.js.
          </p>
        </motion.div>

        {/* Skills Bubbles */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {sKills.map((s) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full border-8 border-b-[rgb(66,153,170)] 
              bg-[rgba(20,46,51,1)] text-white flex items-center justify-center p-1 text-sm text-center"
            >
              {s.skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Right Section - Image */}
      <motion.section
        className="w-full md:w-1/2 p-6 flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={Image}
          alt="System Developer"
          className="w-full h-auto rounded-lg max-w-md"
        />
      </motion.section>
    </div>
  );
}
