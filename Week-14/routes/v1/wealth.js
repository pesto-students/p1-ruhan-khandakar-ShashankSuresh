const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");

// Controllers
const { createWealth } = require("../../controllers/wealth");

// Validators
const wealthValidations = require("../../validations/wealth.validations");

const router = express.Router();

router.route("/").post(protect, validate(wealthValidations.createWealth), createWealth);

module.exports = router;
