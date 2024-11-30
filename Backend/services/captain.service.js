const Captain = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }
  const captain = await Captain.create({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });

  return captain;
};
