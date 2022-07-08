const httpStatus = require("http-status");

const Wealth = require("../models/Wealth");

const { wealthCheck, updateWealth } = require("../services/wealth.services");

const asyncHandler = require("../middlewares/asyncMiddleware");

/**
 * @desc       Create Wealth
 * @route      POST /api/v1/wealth
 * @access     Private
 */
exports.createWealth = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const wealth = await Wealth.create(req.body);

  res.status(httpStatus.CREATED).json({
    success: true,
    data: wealth,
  });
});

/**
 * @desc       Get All Wealths
 * @route      GET /api/v1/wealth
 * @access     Private
 */
exports.getAllWealths = asyncHandler(async (req, res) => {
  res.status(httpStatus.OK).json(res.advancedResults);
});

/**
 * @desc       Get Single Wealth Details wealth
 * @route      GET /api/v1/wealth/:wealthId
 * @access     Private
 */
exports.getWealthDetailsById = asyncHandler(async (req, res) => {
  const wealth = await wealthCheck(req);

  return res.status(httpStatus.OK).json({
    success: true,
    data: wealth,
  });
});

/**
 * @desc       Update wealth
 * @route      PUT /api/v1/wealth/:wealthId
 * @access     Private
 */
exports.updateWealth = asyncHandler(async (req, res) => {
  const wealth = await wealthCheck(req);

  const response = await updateWealth(wealth._id, req.body);

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully updated",
    data: response,
  });
});

/**
 * @desc       Delete wealth
 * @route      DELETE /api/v1/wealth/:wealthId
 * @access     Private
 */
exports.deleteWealth = asyncHandler(async (req, res) => {
  const wealth = await wealthCheck(req);

  wealth.remove();

  return res.status(httpStatus.OK).json({
    success: true,
    message: "Successfully Deleted",
  });
});
