<<<<<<< HEAD
const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    preparation: { type: String },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dzo0dufcr/image/upload/v1765442774/nophoto_scrdpm.png",
    },
    alcohol: {
      type: String,
      required: true,
      enum: ["Vodka", "Martini", "Wine", "Absenta", "Tequila", "Ginebra"],
    },
    imgId: { type: String, trim: true },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredient",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Cocktail = mongoose.model("cocktail", cocktailSchema);
module.exports = Cocktail;
=======
const mongoose = require("mongoose");

const cocktailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    preparation: { type: String },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dzo0dufcr/image/upload/v1765442774/nophoto_scrdpm.png",
    },
    alcohol: {
      type: String,
      required: true,
      enum: ["Vodka", "Martini", "Wine", "Absenta", "Tequila", "Ginebra"],
    },
    imgId: { type: String, trim: true },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredient",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Cocktail = mongoose.model("cocktail", cocktailSchema);
module.exports = Cocktail;
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
