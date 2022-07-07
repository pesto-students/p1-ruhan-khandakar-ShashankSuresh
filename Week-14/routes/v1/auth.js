const express = require("express");

const { register, login } = require("../../controllers/auth");

const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validations");

const router = express.Router();

router.route("/register").post(validate(authValidation.register), register);
router.route("/login").post(validate(authValidation.login), login);

module.exports = router;
