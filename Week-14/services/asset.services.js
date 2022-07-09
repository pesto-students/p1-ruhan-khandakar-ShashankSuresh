const fs = require("fs");

const httpStatus = require("http-status");

const Asset = require("../models/Asset");

const cloudinary = require("../utils/cloudinary");
const ErrorResponse = require("../utils/errorResponse");

/**
 *
 * @param {Express Request} req
 * @returns {<Asset>}
 * @details check asset for loggedIn user and given asset Id
 */
const assetCheck = async (req) => {
  const userId = req.user.id;
  const { assetId } = req.params;

  const asset = await Asset.findOne({ user: userId, _id: assetId });

  if (!asset) {
    throw new ErrorResponse("Data not found", httpStatus.UNAUTHORIZED);
  }

  return asset;
};

/**
 *
 * @param {<Request>} req
 * @returns cloudinary file object
 */
const uploadFile = async (file) => {
  try {
    const { tempFilePath } = file;
    const response = await cloudinary.uploader.upload(tempFilePath);

    // Delete file after uploading
    fs.unlink(tempFilePath, (err) => {
      if (err) {
        console.log(`$File Delete Error: ${err}`.red);
      }
    });
    return response;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

/**
 *
 * @param {Object} assetData
 * @details insert data into assets collection
 */
const insertAssetData = async (assetData) => {
  const { bodyData } = assetData;
  const fileUrls = {
    url: assetData.url,
    secureUrl: assetData.secure_url,
  };
  const uploaderResponse = {
    assetId: assetData.asset_id,
    publicId: assetData.public_id,
    versionId: assetData.version_id,
  };

  const payload = {
    ...bodyData,
    fileUrls,
    uploaderResponse,
  };

  const response = await Asset.create(payload);
  return response;
};

const deleteFileFromCloudinary = async (cloudinaryId) => {
  // Delete file from cloudinary
  await cloudinary.uploader.destroy(cloudinaryId);
};
module.exports = {
  uploadFile,
  insertAssetData,
  assetCheck,
  deleteFileFromCloudinary,
};
