const User = require("../models/user.model");

module.exports.createUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  if (!firstName || !lastName || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await User.create({
    fullName: {
      firstName,
      lastName,
    },
    password,
    email,
  });

  return user;
};
