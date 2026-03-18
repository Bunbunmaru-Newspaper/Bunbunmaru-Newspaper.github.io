const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Post = require("./models/Post");
const Vote = require("./models/Vote");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// 🔗 CONNECT TO MONGODB ATLAS
mongoose.connect("YOUR_MONGODB_URI_HERE")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


// 🆕 Create a post
app.post("/post", async (req, res) => {
  const post = new Post({ title: req.body.title });
  await post.save();
  res.json(post);
});

// 📊 Get post
app.get("/post/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

// 👍👎 Vote
app.post("/vote/:postId", async (req, res) => {
  const { userId, value } = req.body;
  const postId = req.params.postId;

  let post = await Post.findById(postId);
  if (!post) return res.status(404).send("Post not found");

  let existingVote = await Vote.findOne({ userId, postId });

  if (!existingVote) {
    await Vote.create({ userId, postId, value });

    if (value === "like") post.likes++;
    else post.dislikes++;
  } else {
    if (existingVote.value === value) {
      // remove vote
      await Vote.deleteOne({ _id: existingVote._id });

      if (value === "like") post.likes--;
      else post.dislikes--;
    } else {
      // switch vote
      existingVote.value = value;
      await existingVote.save();

      if (value === "like") {
        post.likes++;
        post.dislikes--;
      } else {
        post.dislikes++;
        post.likes--;
      }
    }
  }

  await post.save();
  res.json(post);
});

app.listen(3000, () => console.log("Server running on port 3000"));