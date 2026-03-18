const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Post", PostSchema);