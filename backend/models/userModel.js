import mongoose from "mongoose";

//user schema

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, unique: true },
  profile_pic: { type: String },
  role: {
    type: String,
    enum: ["seller", "customer", "admin"],
    default: "buyer",
  },
  phoneNumber: { type: String, required: true },
});

export const User = new mongoose.model("User", userSchema);
