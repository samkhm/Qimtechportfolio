const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});
module.exports = mongoose.model("Skill", skillSchema);