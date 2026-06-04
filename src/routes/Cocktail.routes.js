const express = require("express");
const router = express.Router();
const {
  getCocktails,
  createCocktail,
  deleteCocktailById,
  getCocktailsByAlcoholType,
  updateCocktail,
} = require("../controllers/Cocktail.controller");
const isAuth = require("../middlewares/Auth.middleware");
const upload = require("../middlewares/files.middleware");

router.get("/", getCocktails);
router.get("/alcohol/:alcohol", getCocktailsByAlcoholType);
router.post("/", isAuth(["admin"]), upload.single("image"), createCocktail);
router.delete("/:id", isAuth(["admin"]), deleteCocktailById);
router.put("/:id", isAuth(["admin"]), upload.single("image"), updateCocktail);

module.exports = router;
