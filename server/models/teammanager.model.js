const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

// PATH gets replaced by the key name
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    preferredPosition: {
      type: String,
      required: [false],
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
