const httpStatus = require("http-status");

const Wealth = require("../models/Wealth");

const ErrorResponse = require("../utils/errorResponse");

/**
 *
 * @param {Express Request} req
 * @returns {<Wealth>}
 * @details check wealth for loggedIn user and given wealth Id
 */
const wealthCheck = async (req) => {
  const userId = req.user.id;
  const { wealthId } = req.params;

  const wealth = await Wealth.findOne({ user: userId, _id: wealthId });

  if (!wealth) {
    throw new ErrorResponse("Data not found", httpStatus.UNAUTHORIZED);
  }

  return wealth;
};

const updateWealth = async (wealthId, bodyData) => {
  console.log("wealthId", wealthId);
  console.log("bodyData", bodyData);

  const wealth = await Wealth.findByIdAndUpdate(wealthId, bodyData, {
    runValidators: true,
    new: true, // for returning updated document
  });

  return wealth;
};
module.exports = {
  wealthCheck,
  updateWealth,
};
