const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    imageLink: String,
    liveLink: String,
    githubLink: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});
module.exports = mongoose.model("Project", projectSchema);