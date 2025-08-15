const Service = require("../models/Services");

//api/rooms
exports.createService = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Service is required" });
    }

    const serviceExist = await Service.findOne({ title });
    if (serviceExist) {
      return res.status(409).json({ message: "Service already exists" });
    }

const serviceP = await Service.create({
      title,
      owner: req.user.id    
    });

    return res.status(201).json(serviceP);

  } catch (error) {
    console.error("Error creating Service:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};



//api/hobbies/getAllHobbies
exports.getAllServices = async (req, res) => {
  const { search } = req.query;
    try {
    let services;
   if (search && search.trim() !== ""){
    services = await Service.find({
      title: { $regex: search, $options: 'i' }

    });
  } else{
    services = await Service.find();
  }
   
     res.json(services);
  } catch (err) {
    console.error("Error fetching Service:", err);
    res.status(500).json({ error: "Server error fetching Services" });
  }
};



//api/hobbies/:id

exports.updateService = async (req, res) =>{
    try {

        const service = await Service.findById(req.params.id);
        if(!service){
            return res.status(404).json({ message: "No Service found"});
        };
   
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true}
        );
        res.json(updatedService);

        
    } catch (error) {
        console.log("Failed to update", error);
    }
};


//api/room/deleterooms
exports.deleteService = async (req, res) =>{
    try {
        const service = await Service.findById(req.params.id);
        if(!service) return res.status(404).json({ message: "Service not found"});

        if(req.user.role !== "admin"){
            return res.status(403).json({ message: "You cant delete a Service"});
        };

        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: "Service deleted"});
        
    } catch (error) {
        res.status(400).json({ message: error.message});
        
    }
}


