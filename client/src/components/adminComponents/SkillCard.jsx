import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrashIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription,
  DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function SkillCard({ skill = [], deleteSkill, updateSkill }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(skill.title);

  const handleSubmit = () =>{
    updateService(skill._id, {title});
    setOpen(false)
  }
  
  return (
     <Card className= "relative animation-fade ">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          {skill.title}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex justify-between gap-2 flex-wrap">
        
        <Button onClick={() => deleteSkill(service._id)}>
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
              <DialogTitle>Update Skill</DialogTitle>
              <DialogDescription>Update skill for your portfolio.</DialogDescription>
            </DialogHeader>

            <div className="space-y-3 mt-4">
              <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
              
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
