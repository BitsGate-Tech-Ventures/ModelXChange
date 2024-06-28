import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { sendCookie } from "../utils/features.js";

export const signup = async (req, res) => {
  try {
    const { email, password, confirmPassword, username, phoneNumber, role } =
      req.body;

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.json({
        success: false,
        message: "Invalid email",
      });
    }

    let user = await User.findOne({ phoneNumber, email });

    if (user) {
      res.json({
        success: false,
        message: "User already exists",
      });
    }

    if (password !== confirmPassword) {
      res.json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      phoneNumber,
    });

    sendCookie(user, res, "User created successfully");
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUsingEmailPassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    sendCookie(user, res, "Logged in successfully");
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const signout = async (req, res) => {
  try {
    res.cookie("token", null, {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "none",
    });

    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
