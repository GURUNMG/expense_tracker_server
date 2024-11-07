const { registerUser } = require("../services/userService");

const signUp = async (req, res) => {
  const { userName, dob, phoneNumber, email, password } = req.body;
  try {
    const newUser = await registerUser({
      userName,
      dob,
      phoneNumber,
      email,
      password,
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signUp };
