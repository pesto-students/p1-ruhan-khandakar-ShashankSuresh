const Joi = require("joi");
const httpStatus = require("http-status");

const pick = require("../utils/pick");
const ErrorResponse = require("../utils/errorResponse");

const validate = (schema) => (req, _, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .validate(object);

  if (error) {
    if (error.message) {
      return next(new ErrorResponse(error.message, httpStatus.BAD_REQUEST));
    }
    const errorMessage = error.details.map((details) => details.message).join(", ");
    return next(new ErrorResponse(errorMessage, httpStatus.BAD_REQUEST));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
