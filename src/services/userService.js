const User = require("../models/User");

const registerUser = async ({ userName, dob, phoneNumber, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('Email already exists');

    const user = new User({ userName, dob, phoneNumber, email, password });
    return await user.save();
};

module.exports = { registerUser };