const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    image_link: String,
    live_link: String,
    github_link: String,
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});
module.exports = mongoose.model("Project", projectSchema);