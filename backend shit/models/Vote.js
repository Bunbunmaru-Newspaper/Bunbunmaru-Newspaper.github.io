const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
  userId: String,
  postId: String,
  value: String // "like" or "dislike"
});

module.exports = mongoose.model("Vote", VoteSchema);