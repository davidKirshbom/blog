const express = require("express");
const catchAsync = require("../utils/catchAsync");
const {
  createPost,
  editPost,

  findPosts,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", catchAsync(createPost));
router.put("/edit/:id", catchAsync(editPost));
router.get("/", catchAsync(findPosts));
module.exports = router;
