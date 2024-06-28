import express from "express";
import {
  loginUsingEmailPassword,
  signout,
  signup,
} from "../controllers/authController.js";
import { isAuthenticated } from "../utils/features.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/loginUsingEmailPassword", loginUsingEmailPassword);
router.get("/signout", isAuthenticated, signout);

export default router;
