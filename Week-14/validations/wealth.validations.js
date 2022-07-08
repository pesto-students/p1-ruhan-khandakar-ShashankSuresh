const Joi = require("joi");

const { wealthTypes } = require("../utils/constants");

const createWealth = {
  body: Joi.object().keys({
    wealthType: Joi.string()
      .valid(...wealthTypes)
      .required()
      .error(new Error(`wealthType is mandatory and type must be in ${wealthTypes.join(", ")}`)),
    wealthSubtype: Joi.string(),
    wealthAmount: Joi.number()
      .greater(0)
      .required()
      .error(new Error("wealthAmount muse be greater than zero")),
    wealthDate: Joi.date().required().error(new Error("wealthDate is required")),
  }),
};

module.exports = {
  createWealth,
};
