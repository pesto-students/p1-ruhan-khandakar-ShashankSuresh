const httpStatus = require("http-status");

const asyncHandler = require("../middlewares/asyncMiddleware");

const ErrorResponse = require("../utils/errorResponse");

const { uploadFile, insertAssetData } = require("../services/asset.services");

/**
 * @desc       Upload asset
 * @route      POST /api/v1/assets
 * @access     Private
 */
exports.uploadAsset = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const file = req.files.asset;
  const bodyData = req.body;

  if (!file) {
    return next(new ErrorResponse("File is missing", httpStatus.BAD_REQUEST));
  }

  if (!bodyData.assetType) {
    return next(new ErrorResponse("assetType is mandatory", httpStatus.BAD_REQUEST));
  }

  const response = await uploadFile(file);

  const insertedData = await insertAssetData({
    ...response,
    bodyData,
  });

  return res.status(httpStatus.CREATED).json({
    success: true,
    data: insertedData,
  });
});
