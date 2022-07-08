/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
const httpStatus = require("http-status");
const { bccMailList } = require("../config");

const Fund = require("../models/Fund");

const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/mailer");

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

/**
 *
 * @param {<Fund>} fundDetails
 * @param {String} actionType
 * @details Notify user when user create of update fund
 */
const emailNotify = async (fundDetails, actionType) => {
  const useFundDetails = await fundDetails.populate("user");
  const subject =
    fundDetails.fundType === "INCOME"
      ? `Fund ${actionType === "created" ? "Added" : "Updated"} into your portfolio`
      : `Fund ${actionType === "created" ? "Removed" : "Updated"} from your portfolio`;

  const mainMessage =
    actionType === "created"
      ? `${actionType === "created" ? "You've" : "Your"} ${
          useFundDetails.fundType === "INCOME" ? "Added" : "Removed"
        }  <strong>${useFundDetails.fundAmount}</strong> Amount ${
          useFundDetails.fundType === "INCOME" ? "into" : "from"
        } your <strong>portfolio.</strong>`
      : `Your updated amount is <strong>${useFundDetails.fundAmount}</strong>.`;

  const bodyData = `
        <div style="background:rgb(221, 221, 221); padding: 15px;">
          <h2 style="margin:0; padding:0; margin-bottom:20px">Hey ${useFundDetails.user.name}</h2>
          <p style="margin:0; padding:0;">${mainMessage}</p>
        </div>
      `;

  sendEmail({
    to: useFundDetails.user.email,
    subject,
    bodyData,
    bcc: bccMailList,
  });
};

module.exports = {
  fundCheck,
  updateFund,
  emailNotify,
};
