const {login} = require("../services/authService");
const jwt = require("jsonwebtoken");
const config = require("../config/env");

const validateUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await login(email, password);
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ message: "Login successful", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { validateUserLogin };
