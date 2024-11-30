const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    // validation
    body("fullName.firstName").notEmpty().withMessage("First name is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),

    body("vehicle.color").notEmpty().withMessage("Color is required"),
    body("vehicle.plate").notEmpty().withMessage("Plate is required"),
    body("vehicle.capacity")
      .isNumeric()
      .withMessage("Capacity must be a number"),
    body("vehicle.vehicleType")
      .notEmpty()
      .withMessage("Vehicle type is required"),
  ],
  // controller
  captainController.registerCaptain
);

module.exports = router;
