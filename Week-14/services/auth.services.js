const httpStatus = require("http-status");

const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const { env } = require("../config");

/**
 *
 * @param {User} user
 * @param {Number} statusCode
 */
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwt();

  const options = {
    expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (env === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  // Validate Email & Password
  if (!email || !password) {
    throw new ErrorResponse("Please provide an email and password", httpStatus.BAD_REQUEST);
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ErrorResponse("Invalid Credentials", httpStatus.UNAUTHORIZED);
  }

  const isMatched = await user.checkPassword(password);

  if (!isMatched) {
    throw new ErrorResponse("Invalid Credentials", httpStatus.UNAUTHORIZED);
  }

  return user;
};

module.exports = {
  loginUserWithEmailAndPassword,
  sendTokenResponse,
};
