const express = require("express");

const catchAsync = require("../utils/catchAsync.js");
const { profile } = require("../controllers/user.controller.js");

const router = express.Router();

router.get("/profile", catchAsync(profile));

module.exports = router;
