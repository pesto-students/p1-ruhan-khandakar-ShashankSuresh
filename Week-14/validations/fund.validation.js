const Joi = require("joi");

const { fundTypes } = require("../utils/constants");

const createFund = {
  body: Joi.object().keys({
    fundType: Joi.string()
      .valid(...fundTypes)
      .required()
      .error(new Error(`fundType is mandatory and type must be in ${fundTypes.join(", ")}`)),
    fundSubtype: Joi.string(),
    fundAmount: Joi.number()
      .greater(0)
      .required()
      .error(new Error("fundAmount muse be greater than zero")),
    fundDate: Joi.date().required().error(new Error("fundDate is required and must be valid date")),
  }),
};

const updateFund = {
  body: Joi.object().keys({
    fundType: Joi.string()
      .valid(...fundTypes)
      .error(new Error(`fundType type must be in ${fundTypes.join(", ")}`)),
    fundSubtype: Joi.string(),
    fundAmount: Joi.number().greater(0).error(new Error("fundAmount muse be greater than zero")),
    fundDate: Joi.date().error(new Error("fundDate must be a valid date")),
  }),
};

module.exports = {
  createFund,
  updateFund,
};
