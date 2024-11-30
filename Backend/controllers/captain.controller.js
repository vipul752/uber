const Captain = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");

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
