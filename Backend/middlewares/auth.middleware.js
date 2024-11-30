const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Captain = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const isBlackListed = await User.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const isBlackListed = await User.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await Captain.findById(decoded.id);

    req.captain = captain;
    return next();
  } catch (error) {
    next(error);
  }
};
