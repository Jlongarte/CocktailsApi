const cocktails = require("./cocktails");
const Cocktail = require("../models/Cocktail.model");
const mongoose = require("mongoose");

mongoose
  .connect(
    ""
  )
  .then(async () => {
    const allCocktails = await Cocktail.find();
    if (allCocktails.length) {
      await Cocktail.collection.drop();
    }
  })
  .catch((error) => console.log(error.message, "Failed to erase Cocktails 💀"))
  .then(async () => {
    await Cocktail.insertMany(cocktails);
    console.log("All Cocktails have been uploaded 🎉");
  })
  .catch((error) => {
    console.log(error.mesage, "Failed to upload Cocktails 💀");
  })
  .finally(() => mongoose.disconnect());

