const httpStatus = require("http-status");

const asyncHandler = require("../middlewares/asyncMiddleware");
const User = require("../models/User");

const { sendTokenResponse, loginUserWithEmailAndPassword } = require("../services/auth.services");

/*
 * @desc       Register user
 * @route      POST /api/v1/auth/register
 * @access     Public
 */
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  // Create a user
  const user = await User.create({
    name,
    email,
    password,
  });

  sendTokenResponse(user, httpStatus.CREATED, res);
});

/*
 * @desc       Login user
 * @route      POST /api/v1/auth/login
 * @access     Public
 */
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await loginUserWithEmailAndPassword(email, password);

  return sendTokenResponse(user, httpStatus.OK, res);
});
