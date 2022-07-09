const mongoose = require("mongoose");

const { wealthTypes } = require("../utils/constants");

const WealthSchema = new mongoose.Schema(
  {
    wealthType: {
      type: String,
      trim: true,
      enum: {
        values: wealthTypes,
        message: `Supported values: ${wealthTypes.join(", ")}`,
      },
      required: [true, "Wealth Type is mandatory"],
    },
    wealthSubtype: {
      type: String,
      trim: true,
      uppercase: true,
      required: [
        function required() {
          return this.wealthType === "ALTERNATIVES";
        },
        "For this wealthType, you have to use wealthSubtype",
      ],
    },
    wealthAmount: {
      type: Number,
      required: [true, "Amount of wealth is required"],
      min: 0,
    },
    wealthDate: {
      type: Date,
      required: [true, "Date is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      index: true,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "wealths",
  }
);

WealthSchema.pre("save", function preSave(next) {
  this.updatedAt = Date.now();
  return next();
});

WealthSchema.methods.toJSON = function excludeSomeFields() {
  const obj = this.toObject();
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model("Wealth", WealthSchema);
