const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");
const advancedResults = require("../../middlewares/advanceResults");

// Controllers
const {
  uploadAsset,
  getAllAssets,
  getAssetDetailsById,
  deleteAsset,
} = require("../../controllers/asset");

// Models
const Asset = require("../../models/Asset");

const router = express.Router();

router.route("/").post(protect, uploadAsset).get(protect, advancedResults(Asset), getAllAssets);

router.route("/:assetId").get(protect, getAssetDetailsById).delete(protect, deleteAsset);

module.exports = router;
