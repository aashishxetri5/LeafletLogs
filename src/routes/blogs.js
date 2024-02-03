const express = require("express");
const router = express.Router();

module.exports = function (blogPosts) {
  router.get("/new", (req, res) => {
    res.render("new.ejs");
  });

  router.post("/create", (req, res) => {
    const { Heading, content } = req.body;

    const publishedDate = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newPost = { Heading, content, publishedDate };

    blogPosts.push(newPost);
    res.redirect("/");
  });

  router.get("/:id", (req, res) => {
    const postId = req.params.id;
    const post = blogPosts[postId];
    res.render("post.ejs", { post });
  });

  return router;
};
