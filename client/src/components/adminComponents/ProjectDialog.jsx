import { Dialog, DialogTrigger, DialogContent, 
    DialogHeader, DialogTitle, DialogDescription, 
    DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { X } from "lucide-react";

export default function ProjectDialog({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [githubLink, setGitLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showBigPreview, setShowBigPreview] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setTitle("");
    setGitLink("");
    setLiveLink("");
    setImageFile(null);
    setPreviewUrl(null);
    setShowBigPreview(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    if (!imageFile) {
      alert("Project image is required");
      return;
    }

    onSubmit({ title, githubLink, liveLink, imageFile });
    resetForm();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:from-emerald-600 hover:to-teal-600">
          Add Project
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            New Project
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-gray-600 dark:text-gray-300">
          Create a new project for your portfolio.
        </DialogDescription>

        <div className="space-y-3 mt-4">
          <Input
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          {imageFile && previewUrl && (
            <div className="relative inline-block mt-2 group">
              <p
                onClick={() => setShowBigPreview(true)}
                className="text-sm text-emerald-600 dark:text-emerald-400 font-medium cursor-pointer underline"
              >
                {imageFile.name} (hover to preview / click to enlarge)
              </p>
              <div className="absolute left-0 mt-1 hidden group-hover:block z-10">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border shadow-lg"
                />
              </div>
            </div>
          )}

          {showBigPreview && previewUrl && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 max-w-lg">
                <button
                  onClick={() => setShowBigPreview(false)}
                  className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black/90"
                >
                  <X size={16} />
                </button>
                <img
                  src={previewUrl}
                  alt="Large Preview"
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          <Input
            placeholder="Github Link"
            value={githubLink}
            onChange={(e) => setGitLink(e.target.value)}
          />

          <Input
            placeholder="Live Link"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
          />
        </div>

        <DialogFooter className="mt-6 flex gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            onClick={handleSubmit}
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            disabled={!title.trim() || !imageFile}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
