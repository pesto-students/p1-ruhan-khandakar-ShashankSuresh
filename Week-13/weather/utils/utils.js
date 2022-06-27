const moment = require("moment");

/**
 *
 * @param {string} date -> yyyy-MM-dd
 * @param {int} numberOfDays
 * @desc return true if date is greater than numberOfDays,
 */
const checkIsFutureDate = (date, numberOfDays = 10) => {
  const futureDate = moment().add(numberOfDays, "days");
  const givenDate = moment(date, "YYYY-MM-DD");

  const diff = givenDate.diff(futureDate, "days");

  return diff > numberOfDays;
};

module.exports = {
  checkIsFutureDate,
};
