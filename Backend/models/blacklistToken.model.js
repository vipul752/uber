const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const Blacklist = mongoose.model("Blacklist", blacklistSchema);

module.exports = Blacklist;
 