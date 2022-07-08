const httpStatus = require("http-status");

const asyncHandler = require("../middlewares/asyncMiddleware");
const Wealth = require("../models/Wealth");

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
