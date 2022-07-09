const mongoose = require("mongoose");

const { fundTypes } = require("../utils/constants");

const FundSchema = new mongoose.Schema(
  {
    fundType: {
      type: String,
      trim: true,
      enum: {
        values: fundTypes,
        message: `Supported values: ${fundTypes.join(", ")}`,
      },
      required: [true, "fundType is mandatory"],
    },
    fundSubtype: {
      type: String,
      trim: true,
      uppercase: true,
    },
    fundAmount: {
      type: Number,
      required: [true, "Amount of wealth is required"],
      min: 0,
    },
    fundDate: {
      type: Date,
      required: [true, "Date is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      index: true,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "funds",
  }
);

FundSchema.pre("save", function preSave(next) {
  this.updatedAt = Date.now();
  return next();
});

FundSchema.methods.toJSON = function excludeSomeFields() {
  const obj = this.toObject();
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model("Fund", FundSchema);
