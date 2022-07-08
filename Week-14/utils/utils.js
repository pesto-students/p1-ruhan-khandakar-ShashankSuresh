const dayjs = require("dayjs");

/**
 *
 * @param {Number} monthNumber
 * @details return start date of the month and end date of the month
 */
const getStartDateEndDateByMonth = (monthNumber) => {
  const date = dayjs().month(monthNumber - 1);
  const startDate = date.startOf("month").format();
  const endDate = date.endOf("month").format();

  return {
    startDate,
    endDate,
  };
};

module.exports = {
  getStartDateEndDateByMonth,
};
