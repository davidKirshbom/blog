const express = require("express");
const catchAsync = require("../utils/catchAsync.js");
const {
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller.js");

const router = express.Router();

router.post("/register", catchAsync(createUser));

router.post("/login", catchAsync(loginUser));
router.post("/logout", catchAsync(logoutUser));

module.exports = router;
