import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrashIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ProjectCard({ project, deleteProject, updateProject }) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(project.title);
  const [githubLink, setGitLink] = useState(project.githubLink);
  const [liveLink, setLiveLink] = useState(project.liveLink);
  const [imageLink, setImageLink] = useState(project.imageLink);

  const handleSubmit = () => {
    updateProject(project._id, { title, githubLink, liveLink, imageLink });
    setOpen(false);
  };

  return (
    <Card className={`relative animation-fade ${project.completed ? "bg-gray-100" : ""}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex justify-between gap-2 flex-wrap">
        
        <Button onClick={() => deleteProject(project._id)}>
          <TrashIcon className="w-5 h-5" />
        </Button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <BookmarkIcon className="w-5 h-5" />
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border p-6">
            <DialogHeader>
              <DialogTitle>Update Project</DialogTitle>
              <DialogDescription>Update project for your portfolio.</DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mt-4">
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
              <Input value={imageLink} onChange={e => setImageLink(e.target.value)} placeholder="Image Link" />
              <Input value={githubLink} onChange={e => setGitLink(e.target.value)} placeholder="Github Link" />
              <Input value={liveLink} onChange={e => setLiveLink(e.target.value)} placeholder="Live Link" />
            </div>

            <DialogFooter className="mt-6 flex gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={handleSubmit} className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Update
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
