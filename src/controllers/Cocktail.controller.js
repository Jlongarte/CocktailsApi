const Cocktail = require("../models/Cocktail.model");
const deleteImgCloudinary = require("../utils/cloudinary.utils");
const cloudinary = require("cloudinary").v2;

const getCocktails = async (req, res, next) => {
  try {
    const cocktails = await Cocktail.find().populate("ingredients.ingredient");
    return res.status(200).json(cocktails);
  } catch (error) {
    return res.status(404).json({ error: "Items not found 💀" });
  }
};

const createCocktail = async (req, res, next) => {
  try {
    const cocktail = new Cocktail(req.body);
    if (req.file) {
      cocktail.image = req.file.path;
      cocktail.imgId = req.file.filename;
    }
    const savedCocktail = await cocktail.save();
    return res.status(201).json(savedCocktail);
  } catch (error) {
    return res.status(404).json({ error: "Unable to create item 💀" });
    //return next(error)
  }
};

const deleteCocktailById = async (req, res, next) => {
  try {
    const cocktail = await Cocktail.findById(req.params.id);
    if (!cocktail) {
      return res
        .status(404)
        .json("Error: we were not able to find the Cocktail in the data base");
    }

    if (cocktail.imgId) {
      await deleteImgCloudinary(cocktail.imgId);
    }

    await Cocktail.findByIdAndDelete(req.params.id);
    return res.status(200).json("Cocktail erased!");
  } catch (error) {
    return res.status(500).json({ error: "Failed to erase the Cocktail 💀" });
  }
};

const getCocktailsByAlcoholType = async (req, res, next) => {
  try {
    const cocktails = await Cocktail.find({
      alcohol: req.params.alcohol,
    }).populate("ingredients.ingredient");
    res.status(200).json(cocktails);
  } catch (error) {
    return res.status(500).json({ error: "Failed to find Cocktails 💀" });
  }
};
const updateCocktail = async (req, res, next) => {
  try {
    const cocktail = await Cocktail.findById(req.params.id);
    if (!cocktail) return res.status(404).json({ error: "Cocktail not found" });

    const oldImgId = cocktail.imgId;

    Object.assign(cocktail, req.body);

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      cocktail.image = uploadResult.secure_url;
      cocktail.imgId = uploadResult.public_id;

      if (oldImgId) {
        await deleteImgCloudinary(oldImgId);
      }
    }

    await cocktail.save();

    return res.status(200).json(cocktail);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update the cocktail 💀" });
  }
};

module.exports = {
  getCocktails,
  createCocktail,
  deleteCocktailById,
  getCocktailsByAlcoholType,
  updateCocktail,
};
