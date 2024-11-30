const express = require("express");
const { register, login } = require("../controllers/authController")
const router1 = express.Router();


router1.post("/register", register);
router1.post("/login", login);

module.exports = router1;
