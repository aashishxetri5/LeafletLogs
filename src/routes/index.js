const express = require("express");
const router = express.Router();

const blogsRouter = require("./blogs");

const blogPosts = [];

router.use("/blogs", blogsRouter(blogPosts));

router.get("/", (req, res) => {
  res.render("index", { blogPosts });
});

module.exports = router;
