const cloudinary = require("cloudinary").v2;

const { cloudinaryName, cloudinaryApiKey, cloudinaryApiScret } = require("../config");

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiScret,
});
module.exports = cloudinary;
