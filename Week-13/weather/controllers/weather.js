const asyncHandler = require("../middlewares/asyncHandler");

/* 
    @desc       Get weather details
    @route      GET /weather/cites
    @access     Public
*/
exports.getWeatherDetails = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "working",
  });
});
