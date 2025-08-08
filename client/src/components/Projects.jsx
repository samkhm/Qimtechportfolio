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
import { motion } from "framer-motion";

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
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="max-w-screen p-5" id="projects">
      <section
        aria-labelledby="projects-heading"
        className="container py-12 font-sans antialiased"
      >
        <div className="mb-8 text-center">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A curated selection of modern web projects showcasing clean UI, performance, and accessibility. Explore the code and try live demos.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {["all", "complete", "inprogress"].map((status) => (
              <Button
                key={status}
                variant={filter === status ? "default" : "outline"}
                onClick={() => {
                  setFilter(status);
                  setVisibleCount(3); // Reset to 3 on filter change
                }}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((proj) => (
            <motion.article
              key={proj.key}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="group p-10"
            >
              <Card className="flex flex-col h-full">
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
                  <Button asChild className="w-fit bg-red-600">
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
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-6 flex justify-center sm:justify-end">
            <Button variant="outline" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
