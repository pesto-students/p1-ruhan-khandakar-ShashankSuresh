const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const advancedResults = require("../../middlewares/advanceResults");

// Controllers
const { createWealth, getAllWealths } = require("../../controllers/wealth");

// Validators
const wealthValidations = require("../../validations/wealth.validations");

// Models
const Wealth = require("../../models/Wealth");

const router = express.Router();

router
  .route("/")
  .post(protect, validate(wealthValidations.createWealth), createWealth)
  .get(protect, advancedResults(Wealth), getAllWealths);

module.exports = router;
