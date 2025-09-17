const Project = require("../models/Projects");
const multer = require("multer");
const path = require("path");

exports.createProject = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);
  try {
    const { title, liveLink, githubLink } = req.body || {};

    if (!title) {
      return res.status(400).json({ message: "Title is required!" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Project image is required" });
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    const projectExist = await Project.findOne({ title });
    if (projectExist) {
      return res.status(409).json({ message: "Title already exists." });
    }

    const project = await Project.create({
      title,
      image: req.file.filename,
      liveLink,
      githubLink,
    });

    return res.status(201).json({
      message: "Project created successfully",
      project,
      imagePath: imageUrl,
    });

  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};






//api/hobbies/getAllHobbies
exports.getAllProjects = async (req, res) => {
  const { search } = req.query;

  try {
    let projects;

    if (search && search.trim() !== "") {
      // Search filter (case-insensitive)
      projects = await Project.find({
        title: { $regex: search, $options: "i" },
      });
    } else {
      // Return all if search is missing or empty
      projects = await Project.find();
    }

    // Build full image URL for each project
    const projectsWithUrls = projects.map((project) => ({
      ...project.toObject(),
      imagePath: `${req.protocol}://${req.get("host")}/images/${project.image}`,
    }));

    res.json({ projects: projectsWithUrls });
  } catch (err) {
    console.error("Error fetching projects:", err);
    res.status(500).json({ error: "Server error fetching projects" });
  }
};





//api/hobbies/:id

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "No Project found" });
    }

    // Prepare update object
    const updateData = {};

    if (req.body.title) updateData.title = req.body.title.trim();
    if (req.body.githubLink) updateData.githubLink = req.body.githubLink.trim();
    if (req.body.liveLink) updateData.liveLink = req.body.liveLink.trim();

    // ✅ Handle tech (could be JSON string or array)
    if (req.body.tech) {
      try {
        const parsedTech =
          typeof req.body.tech === "string"
            ? JSON.parse(req.body.tech)
            : req.body.tech;
        if (Array.isArray(parsedTech)) {
          updateData.tech = parsedTech;
        }
      } catch (err) {
        console.error("Error parsing tech:", err.message);
      }
    }

    // ✅ If a file was uploaded, save its filename
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    console.error("Failed to update", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// Backend
exports.toggleCompleted = async (req, res) => {
  console.log("Toggle completed called with:", req.body);
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

// ✅ Add a single language to a project's tech stack
exports.addLanguage = async (req, res) => {

  // console.log("Add language called with:", req.body);
  try {
    const { id } = req.params;
    const { language } = req.body;

    if (!language || !language.trim()) {
      return res.status(400).json({ message: "Language is required please"});
    }

    const project = await Project.findByIdAndUpdate(
      id,
      { $addToSet: { tech: language.trim() } }, // prevents duplicates
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Language added", project });
  } catch (error) {
    console.error("Failed to add language:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Remove a single language from a project's tech stack
exports.removeLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { language } = req.body;

    if (!language || !language.trim()) {
      return res.status(400).json({ message: "Language is required" });
    }

    const project = await Project.findByIdAndUpdate(
      id,
      { $pull: { tech: language.trim() } },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Language removed", project });
  } catch (error) {
    console.error("Failed to remove language:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



//api/room/deleterooms
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "You cant delete a project" });
    }

    // Delete the project from DB
    await Project.findByIdAndDelete(req.params.id);

    // If the project has an image file, try to remove it from uploads
    if (project.imageFile) {
      const filePath = path.join(__dirname, "../uploads", project.imageFile);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err.message);
          // Don’t fail the request if file is missing
        }
      });
    }

    return res.json({ success: true, message: "Project deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



