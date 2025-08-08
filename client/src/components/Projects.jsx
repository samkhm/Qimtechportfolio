import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholder = "/placeholder.svg";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      key: "analytics-dashboard",
      title: "Analytics Dashboard",
      image: placeholder,
      githubLink: "https://github.com/yourname/analytics-dashboard",
      liveLink: "https://yourdomain.com/analytics",
      status: "complete",
      tech: ["Next.js", "Tailwind", "Chart.js"],
    },
    {
      key: "ecommerce-ui",
      title: "E‑commerce UI Kit",
      image: placeholder,
      githubLink: "https://github.com/yourname/ecommerce-ui",
      liveLink: "https://yourdomain.com/shop",
      status: "inprogress",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      key: "realtime-chat",
      title: "Realtime Chat App",
      image: placeholder,
      githubLink: "https://github.com/yourname/realtime-chat",
      liveLink: "https://yourdomain.com/chat",
      status: "complete",
      tech: ["Socket.io", "Node.js", "MongoDB"],
    },
    {
      key: "portfolio-site",
      title: "Personal Portfolio",
      image: placeholder,
      githubLink: "https://github.com/yourname/portfolio",
      liveLink: "https://yourdomain.com/portfolio",
      status: "complete",
      tech: ["React", "TailwindCSS"],
    },
    {
      key: "blog-platform",
      title: "Markdown Blog Platform",
      image: placeholder,
      githubLink: "https://github.com/yourname/blog-platform",
      liveLink: "https://yourdomain.com/blog",
      status: "inprogress",
      tech: ["Next.js", "MDX", "Tailwind"],
    },
  ];

  const statusVariant = {
    complete: { label: "Complete", variant: "secondary" },
    inprogress: { label: "In Progress", variant: "outline" },
  };

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

 const handleLoadMore = () => {
  setVisibleCount((prev) => prev + 3);
};


  const easing = [0.25, 0.8, 0.25, 1];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easing },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easing },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="max-w-screen p-5" id="projects">
      <section
        aria-labelledby="projects-heading"
        className="container py-12 font-sans antialiased"
      >
        <motion.div
          className="mb-8 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Projects
          </motion.h2>
          <motion.p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A curated selection of modern web projects showcasing clean UI,
            performance, and accessibility. Explore the code and try live demos.
          </motion.p>

          <div className="mt-4 flex justify-center gap-4">
            {["all", "complete", "inprogress"].map((status) => (
              <motion.button
                key={status}
                className={`px-4 py-2 rounded-md border font-medium transition ${
                  filter === status
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-black dark:bg-transparent dark:text-white border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter(status);
                  setVisibleCount(3);
                }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleProjects.map((proj) => (
              <motion.article
                key={proj.key}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group p-10"
              >
                <Card className="flex flex-col h-full shadow-md transition-shadow dark:shadow-white/10 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <div className="relative aspect-[16/9]">
                      <img
                        src={proj.image}
                        alt={`${proj.title} project thumbnail`}
                        loading="lazy"
                        className="h-full w-full object-cover rounded-t-md"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge variant={statusVariant[proj.status].variant}>
                          {statusVariant[proj.status].label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4 flex-grow">
                    <CardTitle className="text-base md:text-lg lg:text-xl font-semibold">
                      {proj.title}
                    </CardTitle>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-5 px-4 pb-4">
                    <Button asChild variant="secondary" className="w-fit">
                      <a
                        href={proj.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button asChild className="w-fit bg-red-600 text-white">
                      <a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <motion.div
            className="mt-6 flex justify-center sm:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={handleLoadMore}
              className="px-6 py-2 border rounded-md hover:bg-gray-100 hover:text-black dark:hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More
            </motion.button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
