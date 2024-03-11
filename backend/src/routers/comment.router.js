const express = require("express");
const catchAsync = require("../utils/catchAsync");
const {
  createComment,
  editComment,
  deleteComment,
} = require("../controllers/comment.controller");

const router = express.Router();

router.post("/create", catchAsync(createComment));
router.put("/edit/:id", catchAsync(editComment));
router.delete("/delete/:id", catchAsync(deleteComment));
module.exports = router;
