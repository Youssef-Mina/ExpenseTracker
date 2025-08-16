const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    validate: [validator.isEmail, "Incorrect Email"],
  },
  photo: { type: String, defualt: "profile.png" },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minlength: [4, "Password too short min 4 characters"],
  },
});

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", userschema);

module.exports = User;
