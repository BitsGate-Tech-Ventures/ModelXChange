import express from "express";
import {
  loginUsingEmailPassword,
  signup,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/loginUsingEmailPassword", loginUsingEmailPassword);

export default router;
