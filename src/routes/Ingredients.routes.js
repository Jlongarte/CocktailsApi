const express = require("express");
const {
  getAllIngredients,
  getIngredientByName,
  createIngredient,
} = require("../controllers/Ingredients.controller");
const router = express.Router();

router.get("/", getAllIngredients);
router.get("/:name", getIngredientByName);
router.post("/", createIngredient);

module.exports = router;
