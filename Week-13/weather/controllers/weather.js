const asyncHandler = require("../middlewares/asyncHandler");
const {
  getParamsAndQueryFromUrl,
  getWeatherData,
} = require("../services/weather");

/* 
    @desc       Get weather details
    @route      GET /weather/cites/:cityName
    @access     Public
    @details
            date format: DD-MM-YYYY
*/
exports.getWeatherDetails = asyncHandler(async (req, res) => {
  const queryDetails = getParamsAndQueryFromUrl(req);

  const defaultQuery = "auto:ip";

  const response = await getWeatherData({ ...queryDetails, defaultQuery });

  if (!response.success) {
    return res.status(400).json({
      success: false,
      message: response.error,
    });
  }
  console.log("response", response);

  return res.json({
    success: true,
    data: response.data,
  });
});
