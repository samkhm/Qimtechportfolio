const express = require("express");
const { protect, authorize} = require("../middlewares/auth");
const { createHobby, getAllHobbies, updateHobby, deleteHobby} = require("../controllers/hobbyController");
const { createProject, getAllProjects, updateProject, deleteProject} = require("../controllers/projectController");
const { createService, getAllServices, updateService, deleteService} = require("../controllers/serviceController");
const { createSkill, getAllSkills, updateSkill, deleteSkill} = require("../controllers/skillsController");
const { createTestimony, getAllTestimonies, deleteTestimonies} = require("../controllers/testimonialsController");
const router = express.Router();

router.post("/hobby", protect, authorize(["admin"]), createHobby );
router.get("/hobby", protect, authorize(["admin"]), getAllHobbies);
router.put("/hobby", protect, authorize(["admin"]), updateHobby);
router.delete("/hobby", protect, authorize(["admin"]), deleteHobby);

router.post("/project", protect, authorize(["admin"]), createProject);
router.get("/project", protect, authorize(["admin"]), getAllProjects);
router.put("/project", protect, authorize(["admin"]), updateProject);
router.delete("/project", protect, authorize(["admin"]), deleteProject);

router.post("/services", protect, authorize(["admin"]), createService);
router.get("/services", protect, authorize(["admin"]), getAllServices);
router.put("/services", protect, authorize(["admin"]), updateService);
router.delete("/services", protect, authorize(["admin"]), deleteService);

router.post("/skills", protect, authorize(["admin"]), createSkill);
router.get("/skills", protect, authorize(["admin"]), getAllSkills);
router.put("/skills", protect, authorize(["admin"]), updateSkill);
router.delete("/skills", protect, authorize(["admin"]), deleteSkill);

router.get("/testimony", protect, authorize(["admin"]), getAllTestimonies);
router.delete("/testimony", protect, authorize(["admin"]), deleteTestimonies);


module.exports = router;