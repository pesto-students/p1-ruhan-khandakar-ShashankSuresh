const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");
const advancedResults = require("../../middlewares/advanceResults");

// Controllers
const {
  createFund,
  getAllFunds,
  getFundDetailsById,
  updateFund,
  deleteFund,
} = require("../../controllers/fund");

// Validators
const fundValidations = require("../../validations/fund.validation");

// Models
const Fund = require("../../models/Fund");

const router = express.Router();

router
  .route("/")
  .post(protect, validate(fundValidations.createFund), createFund)
  .get(protect, advancedResults(Fund), getAllFunds);

router
  .route("/:fundId")
  .get(protect, getFundDetailsById)
  .put(protect, validate(fundValidations.updateFund), updateFund)
  .delete(protect, deleteFund);

module.exports = router;
