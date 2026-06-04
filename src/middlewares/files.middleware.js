<<<<<<< HEAD
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "CocktailsApi",
    allowFormats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });
module.exports = upload;
=======
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "CocktailsApi",
    allowFormats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });
module.exports = upload;
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
