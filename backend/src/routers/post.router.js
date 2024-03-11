const express = require("express");
const catchAsync = require("../utils/catchAsync");
const {
  createPost,
  editPost,

  findPosts,
  getPostById,
  getPostByPk,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", catchAsync(createPost));
router.put("/edit/:id", catchAsync(editPost));
router.get("/", catchAsync(findPosts));
router.get("/:id", catchAsync(getPostByPk));

module.exports = router;
