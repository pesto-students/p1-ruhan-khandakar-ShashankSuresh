const httpStatus = require("http-status");

const Fund = require("../models/Fund");

const ErrorResponse = require("../utils/errorResponse");

/**
 *
 * @param {Express Request} req
 * @returns {<Fund>}
 * @details check Fund for loggedIn user and given fund Id
 */
const fundCheck = async (req) => {
  const userId = req.user.id;
  const { fundId } = req.params;

  const fund = await Fund.findOne({ user: userId, _id: fundId });

  if (!fund) {
    throw new ErrorResponse("Data not found", httpStatus.UNAUTHORIZED);
  }

  return fund;
};

/**
 *
 * @param {string} fundId
 * @returns {Object} bodyData
 * @details Update fund details
 */
const updateFund = async (fundId, bodyData) => {
  const fund = await Fund.findByIdAndUpdate(fundId, bodyData, {
    runValidators: true,
    new: true, // for returning updated document
  });

  return fund;
};
module.exports = {
  fundCheck,
  updateFund,
};
