const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    assetType: {
      type: String,
      trim: true,
      uppercase: true,
      required: [true, "assetType is mandatory"],
    },
    assetSubtype: {
      type: String,
      trim: true,
    },
    details: {
      type: String,
    },
    fileUrls: {
      type: Object,
    },
    uploaderResponse: {
      type: Object,
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
    collection: "assets",
  }
);

AssetSchema.pre("save", function preSave(next) {
  this.updatedAt = Date.now();
  return next();
});

AssetSchema.methods.toJSON = function excludeSomeFields() {
  const obj = this.toObject();
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model("Asset", AssetSchema);
