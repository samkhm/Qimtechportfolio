const Project = require("../models/Projects");

//api/rooms
exports.createProject = async (req, res) => {
  try {
    const { title, ...rest } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const projectExist = await Hobby.findOne({ title });
    if (projectExist) {
      return res.status(409).json({ message: "Title already exists" });
    }

const project = await Project.create({
      title, 
      ...rest     
    });

    return res.status(201).json(project);

  } catch (error) {
    console.error("Error creating hobby:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



//api/hobbies/getAllHobbies
exports.getAllProjects = async (req, res) => {
    try {
   projects = await Project.find();
   if(!hobbies) return res.status(401).json({ message: "No projects found"});
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


