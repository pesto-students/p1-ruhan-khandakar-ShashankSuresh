const Joi = require("joi");

const { password } = require("./common.validations");

const register = {
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};
const login = {
  body: Joi.object().keys({
    password: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
};

module.exports = {
  register,
  login,
};
