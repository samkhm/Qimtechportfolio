const Project = require("../models/Projects");

//api/rooms
function isValidImageUrl(url) {
  try {
    const u = new URL(url);
    // Allow http/https only
    if (!["http:", "https:"].includes(u.protocol)) return false;

    // Optional: check extension (basic sanity check, not bulletproof)
    return /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(u.pathname);
  } catch {
    return false;
  }
}

exports.createProject = async (req, res) => {
  try {
    let { title, imageLink, liveLink, githubLink } = req.body;

    // cleanup
    title = title?.trim();
    imageLink = imageLink?.trim();
    liveLink = liveLink?.trim();
    githubLink = githubLink?.trim();

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (imageLink && !isValidImageUrl(imageLink)) {
      return res.status(400).json({ 
        message: "Please provide a valid image URL (jpg, png, webp, etc.)" 
      });
    }

    const projectExist = await Project.findOne({ title });
    if (projectExist) {
      return res.status(409).json({ message: "Title already exists" });
    }

    const project = await Project.create({
      title,
      owner: req.user.id,
      imageLink,
      liveLink,
      githubLink,
    });

    return res.status(201).json(project);

  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


//api/hobbies/getAllHobbies
exports.getAllProjects = async (req, res) => {
  const { search } = req.query;
  try {
    let projects;

    if (search && search.trim() !== "") {
      // Search filter
      projects = await Project.find({
        title: { $regex: search, $options: 'i' }
      });
    } 

        
    else {
      // Return all if search is missing or empty
      projects = await Project.find();
    }

    res.json(projects);

  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Server error fetching projects" });
  }
};




//api/hobbies/:id

exports.updateProject = async (req, res) =>{
    try {
      
        const project = await Project.findById(req.params.id);
        if(!project){
            return res.status(404).json({ message: "No Project found"});
        };
   

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        res.json(updatedProject);

        
    } catch (error) {
        console.log("Failed to update", error);
    }
};

// Backend
exports.toggleCompleted = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed }, // only update this field
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ message: "No Project found" });
    }
    res.json({ message: "Completion status updated", project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};



//api/room/deleterooms
exports.deleteProject = async (req, res) =>{
    try {
        const project = await Project.findById(req.params.id);
        if(!project) return res.status(404).json({ message: "Project not found"});

        if(req.user.role !== "admin"){
            return res.status(403).json({ message: "You cant delete a project"});
        };

        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted"});
        
    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
}


