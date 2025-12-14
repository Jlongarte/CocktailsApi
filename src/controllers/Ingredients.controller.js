const Ingredient = require("../models/Ingredients.model");

const getAllIngredients = async (req, res, next) => {
  try {
    const ingredients = await Ingredient.find();
    return res.status(200).json(ingredients);
  } catch (error) {
    return res.status(404).json({ error: "Ingredients not found 💀" });
  }
};
const getIngredientByName = async (req, res, next) => {
  try {
    const ingredient = await Ingredient.findOne({ name: req.params.name });
    res.status(200).json(ingredient);
  } catch (error) {
    return res.status(500).json({ error: "Failed to find ingredient 💀" });
  }
};

const createIngredient = async (req, res, next) => {
  try {
    const newIngredient = new Ingredient(req.body);
    const savedIngredient = await newIngredient.save();
    res.status(201).json(savedIngredient);
  } catch (error) {
    res.status(500).json({ error: " We could not create the ingredient" });
  }
};

module.exports = { getAllIngredients, getIngredientByName, createIngredient };
