const httpStatus = require("http-status");

const Fund = require("../models/Fund");

const { fundCheck, updateFund, emailNotify } = require("../services/fund.services");

const asyncHandler = require("../middlewares/asyncMiddleware");

/**
 * @desc       Create Fund
 * @route      POST /api/v1/funds
 * @access     Private
 */
exports.createFund = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const fund = await Fund.create(req.body);

  emailNotify(fund, "create");

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Fund created successfully. You'll receive a mail shortly. Please check spam also.",
    data: fund,
  });
});

/**
 * @desc       Get All Fund
 * @route      GET /api/v1/funds
 * @access     Private
 */
exports.getAllFunds = asyncHandler(async (req, res) => {
  res.status(httpStatus.OK).json(res.advancedResults);
});

/**
 * @desc       Get Single fund Details
 * @route      GET /api/v1/funds/:fundId
 * @access     Private
 */
exports.getFundDetailsById = asyncHandler(async (req, res) => {
  const fund = await fundCheck(req);

  return res.status(httpStatus.OK).json({
    success: true,
    data: fund,
  });
});

/**
 * @desc       Update fund
 * @route      PUT /api/v1/funds/:fundId
 * @access     Private
 */
exports.updateFund = asyncHandler(async (req, res) => {
  const fund = await fundCheck(req);

  const response = await updateFund(fund._id, req.body);

  emailNotify(response, "update");

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Fund updated successfully. You'll receive a mail shortly. Please check spam also.",
    data: response,
  });
});

/**
 * @desc       Delete fund
 * @route      DELETE /api/v1/funds/:fundId
 * @access     Private
 */
exports.deleteFund = asyncHandler(async (req, res) => {
  const fund = await fundCheck(req);

  fund.remove();

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully Deleted",
  });
});
