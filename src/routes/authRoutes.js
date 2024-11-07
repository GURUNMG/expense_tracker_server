const express = require("express");
const { validateUserLogin } = require("../controllers/authController");
const router = express.Router();

router.post("/login", validateUserLogin);

module.exports = router;
