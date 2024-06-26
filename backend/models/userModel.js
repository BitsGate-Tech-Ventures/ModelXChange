import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long."],
    maxlength: [128, "Password must be at most 128 characters long."],
  },
  role: {
    type: String,
    enum: ["customer", "seller"],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
});

export const User = new mongoose.model("User", userSchema);
