<<<<<<< HEAD
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
=======
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
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
