const express = require("express");
const router = express.Router();
const {
  getAllIngredients,
  getIngredientByName,
  createIngredient,
} = require("../controllers/Ingredients.controller");

router.get("/", getAllIngredients);
router.get("/:name", getIngredientByName);
router.post("/", createIngredient);

module.exports = router;
