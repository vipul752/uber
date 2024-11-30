const Captain = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blacklistToken = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const {
      fullName,
      email,
      password,
      vehicle: { color, plate, capacity, vehicleType },
    } = req.body;

    const existingCaptain = await Captain.findOne({ email: req.body.email });
    if (existingCaptain) {
      return res.status(400).json({ error: "Captain already exists" });
    }

    const hashedPassword = await Captain.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      email,
      password: hashedPassword,
      color,
      plate,
      capacity,
      vehicleType,
    });

    const token = await captain.generateAuthToken();

    res.status(201).json({
      message: "captain create successfully",
      captain,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { email, password } = req.body;

    const captain = await Captain.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(400).json({ error: "Captain not found" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = await captain.generateAuthToken();

    res.cookie("token", token);

    res.status(200).json({
      message: "Login successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.captainProfile = async (req, res, next) => {
  try {
    const captain = req.captain;
    res.status(200).json({ captain });
  } catch (error) {
    next(error);
  }
};

module.exports.logoutCaptain = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    await blacklistToken.create({ token });

    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    next(error);
  }
};
