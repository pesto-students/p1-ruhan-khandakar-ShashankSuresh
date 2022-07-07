const crypto = require("crypto");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret, jwtExpire } = require("../config");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: [true, "Duplicate Field found. use your own credentials."],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "users" }
);

// Encrypt password using bcrypt
UserSchema.pre("save", async function preSave(next) {
  this.updatedAt = Date.now();
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// get jwt
UserSchema.methods.getSignedJwt = function getSignedJwt() {
  return jwt.sign({ id: this._id }, jwtSecret, {
    expiresIn: jwtExpire,
  });
};

// check password
UserSchema.methods.checkPassword = async function checkPassword(enteredPassword) {
  const isMatched = await bcrypt.compare(enteredPassword, this.password);
  return isMatched;
};

// Generate Hash password token
UserSchema.methods.getResetPasswordToken = function getResetPasswordToken() {
  // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash a token and set to resetPasswordToken filed.
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  // Set the expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
