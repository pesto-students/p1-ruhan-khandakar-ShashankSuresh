const axios = require("axios");

const { weatherAPIBaseUrl, weatherAPIKey } = require("../config");
const { checkIsFutureDate } = require("../utils/utils");

const getParamsAndQueryFromUrl = ({ query, params }) => {
  const { cityName } = params;
  const {
    cityName: queryCityName,
    cityCode,
    pageNumber = 1,
    days,
    date,
    hour,
  } = query;

  if (days && (+days > 10 || +days < 0)) {
    throw new Error("Invalid days. Days must be between 0 and 10");
  }

  return {
    cityName: cityName || queryCityName,
    cityCode,
    pageNumber,
    days,
    date,
    hour,
  };
};

const getParamsAndUrl = (queryData) => {
  const defaultQuery = "auto:ip";

  let jsonType = "current";
  if (queryData.days) {
    jsonType = "forecast";
  }
  if (queryData.date) {
    const isMoreThan10Days = checkIsFutureDate(queryData.date, 10);
    if (isMoreThan10Days) {
      jsonType = "future";
    } else {
      jsonType = "history";
    }
  }

  const URL = `${weatherAPIBaseUrl}/${jsonType}.json`;
  const params = {
    key: weatherAPIKey,
    q: queryData.cityCode || queryData.cityName?.toLowerCase() || defaultQuery,
  };

  if (queryData.date) {
    params.dt = queryData.date;
  }

  if (queryData.hour) {
    params.hour = queryData.hour;
  }

  return {
    URL,
    params,
  };
};

/* 
  @details: Multiple city not supporting, city code not supporting, no such pagination thing
*/
const getWeatherData = async (queryData) => {
  try {
    const { URL, params } = getParamsAndUrl(queryData);

    const { data } = await axios.get(URL, { params });
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error?.response?.data?.error?.message) {
      return {
        success: false,
        error: error.response.data.error.message,
      };
    }
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
