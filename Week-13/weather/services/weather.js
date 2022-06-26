const axios = require("axios");

const { weatherAPIBaseUrl, weatherAPIKey } = require("../config");

const getParamsAndQueryFromUrl = ({ query, params }) => {
  const { cityName } = params;
  const {
    cityName: queryCityName,
    cityCode,
    pageNumber = 1,
    numberOfDays,
    date,
    hour,
  } = query;

  return {
    cityName: cityName || queryCityName,
    cityCode,
    pageNumber,
    numberOfDays,
    date,
    hour,
  };
};

const getWeatherData = async (queryData) => {
  try {
    const URL = `${weatherAPIBaseUrl}/current.json`;
    const params = {
      key: weatherAPIKey,
      q: queryData.defaultQuery,
    };
    const { data } = await axios.get(URL, { params });
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

module.exports = {
  getParamsAndQueryFromUrl,
  getWeatherData,
};
