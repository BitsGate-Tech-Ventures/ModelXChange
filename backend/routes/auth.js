const express = require("express");
const router = express.Router();  //creating sub router
const { authcontroller } = require("../controllers");
const { signupValidator, verifyUserValidator, emailValidator, recoverPasswordValidator, signinValidator, updateProfileValidator  } = require("../validators/auth");
const validate = require("../validators/validate");
const isAuth = require("../middlewares/isAuth");

router.post("/signup", signupValidator, validate, authcontroller.signup );
router.post("/send-verification-email",emailValidator, validate, authcontroller.verifyCode);
router.post("/verify-user", verifyUserValidator, validate, authcontroller.verifyUser);
router.post("/forgot-password-code", emailValidator, validate, authcontroller.forgotPasswordCode);
router.post("/recover-password", recoverPasswordValidator, validate, authcontroller.recoverPassword);
router.post("/signin", signinValidator, validate, authcontroller.signin);
router.put("/update-profile", isAuth, updateProfileValidator, validate, authcontroller.updateProfile);

module.exports = router;