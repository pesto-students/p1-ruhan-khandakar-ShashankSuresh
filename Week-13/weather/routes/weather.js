const express = require("express");

const router = express.Router();

const { getWeatherDetails } = require("../controllers/weather");

router.route("/cities").get(getWeatherDetails);

module.exports = router;
