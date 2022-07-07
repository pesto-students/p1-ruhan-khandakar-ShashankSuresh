const axios = require("axios");

const {
  weatherAPIBaseUrl,
  weatherAPIKey,
  openWeatherAPIKey,
  openWeatherAPI,
} = require("../config");
const { checkIsFutureDate, isEmpty } = require("../utils/utils");
const citiesData = require("../citiesData.json");

const topCities = [
  "mumbai",
  "delhi",
  "kolkata",
  "chennai",
  "bengaluru",
  "hyderabad",
  "jaipur",
  "ahmedabad",
  "pune",
];

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

  if (isEmpty(query) && !cityName) {
    return {};
  }

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

const prepareQueryForOpenWeatherApi = () => {
  const allTopCitiesCode = topCities
    .map((city) => citiesData[city]?.id)
    .filter(Boolean);

  const params = {
    id: allTopCitiesCode.join(","),
    units: "metric",
    appid: openWeatherAPIKey,
  };
  const URL = `${openWeatherAPI}/group`;
  const message = `Due to some limitations in the OpenWeather API, we're able showing only ${topCities.join(
    ","
  )} cities data`;
  return {
    URL,
    params,
    message,
  };
};

const getParamsAndUrl = (queryData) => {
  if (isEmpty(queryData)) {
    const res = prepareQueryForOpenWeatherApi();
    return res;
  }

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
    const { URL, params, message } = getParamsAndUrl(queryData);

    const { data } = await axios.get(URL, { params });
    return {
      success: true,
      message: message || "",
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
