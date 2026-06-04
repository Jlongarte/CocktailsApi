<<<<<<< HEAD
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getImageUrl = (imgId) => {
  return cloudinary.url(imgId, {
    secure: true,
  });
};

const deleteImgCloudinary = async (imgId) => {
  if (!imgId) {
    return;
  }

  try {
    await cloudinary.uploader.destroy(imgId);
  } catch (error) {
    console.error("Failed to erase de image");
  }
};

module.exports = { deleteImgCloudinary, getImageUrl };

//  node .\src\seed\Cocktails.seed.js
=======
require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getImageUrl = (imgId) => {
  return cloudinary.url(imgId, {
    secure: true,
  });
};

const deleteImgCloudinary = async (imgId) => {
  if (!imgId) {
    return;
  }

  try {
    await cloudinary.uploader.destroy(imgId);
  } catch (error) {
    console.error("Failed to erase de image");
  }
};

module.exports = { deleteImgCloudinary, getImageUrl };

//  node .\src\seed\Cocktails.seed.js
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
