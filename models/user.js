const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: 4,
    maxlength: 20,
    unique: true,
  },
  fullName: {
    type: String,
    required: [true, "full name is required"],
    minlength: 4,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "email must be correct"],
    unique: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password invalid, it should contain 8-20 alphanumeric with small and capital letters and be unique!",
    ],
  },
});

const User = model("User", userSchema);
module.exports = User;
