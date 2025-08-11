const Skill = require("../models/Skills");

//api/rooms
exports.createSkill = async (req, res) => {
  try {
    const { skill, ...rest } = req.body;

    if (!skill) {
      return res.status(400).json({ message: "Skill is required" });
    }

    const skillExist = await Skill.findOne({ skill });
    if (skillExist) {
      return res.status(409).json({ message: "Skill already exists" });
    }

const skillP = await Skill.create({
      skill, 
      ...rest     
    });

    return res.status(201).json(skillP);

  } catch (error) {
    console.error("Error creating skill:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



//api/hobbies/getAllHobbies
exports.getAllSkills = async (req, res) => {
    try {
   skills = await Skill.find();
   if(!hobbies) return res.status(401).json({ message: "No Skills found"});
    res.json(skills);
  } catch (err) {
    console.error("Error fetching skill:", err);
    res.status(500).json({ error: "Server error fetching skills" });
  }
};



//api/hobbies/:id

exports.updateSkill = async (req, res) =>{
    try {

        const skill = await Skill.findById(req.params.id);
        if(!skill){
            return res.status(404).json({ message: "No skill found"});
        };
   
        const updatedSkill = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        res.json(updatedSkill);

        
    } catch (error) {
        console.log("Failed to update", error);
    }
};


//api/room/deleterooms
exports.deleteSkill = async (req, res) =>{
    try {
        const skill = await Skill.findById(req.params.id);
        if(!skill) return res.status(404).json({ message: "Skill not found"});

        if(req.user.role !== "admin"){
            return res.status(403).json({ message: "You cant delete a Skill"});
        };

        await Skill.findByIdAndDelete(req.params.id);
        res.json({ message: "Skill deleted"});
        
    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
}


