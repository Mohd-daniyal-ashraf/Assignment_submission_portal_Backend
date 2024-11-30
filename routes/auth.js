const express = require("express");
const { register, login } = require("../controllers/authController")
const router1 = express.Router();

console.log("hi");
router1.post("/register", register);
router1.post("/login", login);

module.exports = router1;
