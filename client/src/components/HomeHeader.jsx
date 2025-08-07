import { Button } from "@/components/ui/button";

import Image from "@/assets/image.png";


import { FaSquareGit, FaWhatsapp } from "react-icons/fa6";

export default function HomeHeader() {
  return (
    <div className="bg-gray-300 dark:bg-black/30 dark:text-white flex flex-wrap p-10" id="home">
      {/* Left Section */}
      <section className="max-w-200 md:w-1/2 p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold p-2">
          Hey! I am a System <br /> Developer
        </h1>
        <p className="text-lg p-2">
          I am a System developer with extensive experience in building scalable and robust systems.
        </p>

        {/* Buttons and Icons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 p-4">
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
              <FaSquareGit />
            </a>
          </Button>

          <Button asChild variant="outline" aria-label="Chat on WhatsApp">
            <a
              href="https://wa.me/254745801435"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-600" />
            </a>
          </Button>
        </div>
      </section>

      {/* Right Section - Image */}
      <section className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <img
          src={Image}
          alt="Portrait of the system developer"
          className="w-full h-auto rounded-lg max-w-md"
        />
      </section>
    </div>
  );
}

