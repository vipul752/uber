const User = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistToken = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await User.hashPasword(password);

    const user = await userService.createUser({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();

    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const matchingPassword = await user.comparePassword(password);

  if (!matchingPassword) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = await user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    token,
  });
};

module.exports.getUserProfile = async (req, res, next) => {
  return res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token;

  await blacklistToken.create({ token });

  res.status(200).json({ message: "Logged out successfully" });
};
