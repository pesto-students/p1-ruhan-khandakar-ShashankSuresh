const asyncHandler = require("../middlewares/asyncHandler");
const {
  getParamsAndQueryFromUrl,
  getWeatherData,
} = require("../services/weather");

/*
 *    @desc       Get weather details
 *    @route      GET /weather/cites/:cityName
 *    @access     Public
 *    @details
 *            date format: yyyy-MM-dd
 */
exports.getWeatherDetails = asyncHandler(async (req, res) => {
  const queryDetails = getParamsAndQueryFromUrl(req);

  const response = await getWeatherData(queryDetails);

  if (!response.success) {
    return res.status(400).json({
      success: false,
      message: response.error,
    });
  }

  return res.json({
    success: true,
    message: response.message,
    data: response.data,
  });
});
