import { Button } from "@/components/ui/button";
import Image from "@/assets/image.png";
import { FaSquareGit, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HomeHeader() {
  return (
    <div
      className="bg-gray-300/60 dark:bg-black/30 dark:text-white flex flex-wrap p-10"
      id="home"
    >
      {/* Left Section */}
      <div className="max-w-200 md:w-1/2 p-2 flex flex-col justify-center">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-bold p-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hey! I am a System <br /> Developer
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg p-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I am a System developer with extensive experience in building scalable
          and robust systems.
        </motion.p>

        {/* Buttons and Icons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button asChild variant="outline">
            <a href="#about">LEARN MORE</a>
          </Button>

          <Button asChild variant="outline">
            <a href="#contact">HIRE ME</a>
          </Button>

          <Button asChild variant="outline" aria-label="GitHub Profile">
            <a
              href="https://github.com/samkhm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <FaSquareGit />
              </motion.div>
            </a>
          </Button>

          <Button asChild variant="outline" aria-label="Chat on WhatsApp">
            <a
              href="https://wa.me/254745801435"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <FaWhatsapp className="text-green-600" />
              </motion.div>
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Right Section - Animated Image */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <motion.img
          src={Image}
          alt="Portrait of the system developer"
          className="w-full h-auto rounded-lg max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </div>
  );
}
