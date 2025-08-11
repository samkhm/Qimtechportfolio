const express = require("express");
const { signup, login, getAllUsers} = require("../controllers/authAdminController");
const router = express.Router();
const { protect, authorize} = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", protect, authorize(["admin"]), getAllUsers);

module.exports = router;