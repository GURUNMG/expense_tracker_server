const {login} = require("../services/authService");
const jwt = require("jsonwebtoken");
const config = require("../config/env");

const validateUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await login(email, password);
    if (!data.user) return res.status(400).json({ message: "Invalid credentials" });
    res
      .status(200)
      .json({ message: "Login successful", token: `Bearer ${data.token}` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { validateUserLogin };
