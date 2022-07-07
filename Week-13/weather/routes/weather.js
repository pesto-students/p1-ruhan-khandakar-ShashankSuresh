const express = require("express");

const router = express.Router();

const { getWeatherDetails } = require("../controllers/weather");

router.route("/cities/:cityName?").get(getWeatherDetails);

module.exports = router;
