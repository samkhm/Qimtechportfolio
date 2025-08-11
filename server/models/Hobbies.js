const mongoose = require("mongoose");

const hobbySchema = new mongoose.Schema({
    hobby: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});
module.exports = mongoose.model("Hobby", hobbySchema);