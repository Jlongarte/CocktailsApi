const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String,
      enum: ["Licor", "Juice", "Herbs", "Fruits", "Syrup", "Other"],
      default: "Other",
    },
    alcoholPercent: {
      type: Number,
      min: 0,
      max: 100,
      default: 0, // 0 = alcohol free
    },
  },
  { timestamps: true, versionKey: false }
);

const Ingredients = mongoose.model("ingredient", ingredientSchema);
module.exports = Ingredients;
