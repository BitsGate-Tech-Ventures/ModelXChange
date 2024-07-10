import express from "express";
import {
  loginUsingEmail,
  logout,
  register,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/signinEmail", loginUsingEmail);
router.post("/signout", logout);

export default router;
