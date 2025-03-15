const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Veuillez entre un nom"],
    },
    email: {
      type: String,
      required: [true, "Veuillez entre un email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Veuillez insérer votre mot de passe"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
