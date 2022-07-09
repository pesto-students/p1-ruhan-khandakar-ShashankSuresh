const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");

const asyncHandler = require("./asyncMiddleware");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect Routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    // set token from bearer token in header
    [, token] = req.headers.authorization.split(" ");
  }
  // Set token from cookie
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized.", httpStatus.UNAUTHORIZED));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    return next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized.", httpStatus.UNAUTHORIZED));
  }
});
