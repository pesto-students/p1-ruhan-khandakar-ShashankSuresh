const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");

// Controllers
const { register, login, getMe } = require("../../controllers/auth");

// Validators
const authValidation = require("../../validations/auth.validations");

const router = express.Router();

router.route("/register").post(validate(authValidation.register), register);
router.route("/login").post(validate(authValidation.login), login);
router.route("/me").get(protect, getMe);

module.exports = router;
