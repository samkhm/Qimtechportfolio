import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import { getUserRole } from "@/utils/auth";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Projects({
  project = [], // default empty array to avoid undefined
  deleteProject,
  createProject,
  updateProject,
  toggleCompleted,
  query,
  setQuery,
}) {
  const [category, setCategory] = useState("all");
  const userRole = getUserRole();
  const isAdmin = userRole === "admin";

  // Filter projects by category
  let filtered = [...project];
  switch (category) {
    case "completed":
      filtered = filtered.filter((p) => p.completed);
      break;
    case "uncompleted":
      filtered = filtered.filter((p) => !p.completed);
      break;
    case "all":
    default:
      break;
  }

  // Filter projects by search query
  const filteredProjects = query.trim()
    ? filtered.filter((p) => p.title?.toLowerCase().includes(query.toLowerCase()))
    : filtered;

  const categoryValue = [
    { name: "All Projects", key: "all" },
    { name: "Completed", key: "completed" },
    { name: "Pending", key: "uncompleted" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Controls */}
      <div className="flex flex-wrap bg-gray-100 rounded gap-5 mb-5">
        {isAdmin && (
          <Input
            className="bg-gray-200 max-w-100 border-1 border-solid border-gray-700"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        {isAdmin && <ProjectDialog onSubmit={createProject} />}
        {isAdmin && (
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categoryValue.map((v) => (
                <SelectItem key={v.key} value={v.key}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((proj, index) => (
            <ProjectCard
              key={proj._id || index} // fallback to index if _id missing
              project={proj}
              deleteProject={deleteProject}
              updateProject={updateProject}
              toggleCompleted={toggleCompleted}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Projects found</p>
        </div>
      )}
    </div>
  );
}
