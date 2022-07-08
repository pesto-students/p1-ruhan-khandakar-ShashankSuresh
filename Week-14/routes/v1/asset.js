const express = require("express");

// Middlewares
const { protect } = require("../../middlewares/auth");

// Controllers
const { uploadAsset } = require("../../controllers/asset");

const router = express.Router();

router.route("/").post(protect, uploadAsset);

module.exports = router;
