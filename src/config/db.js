<<<<<<< HEAD
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB 🚀🚀🚀");
  } catch (error) {
    console.log("Failed to connect to MongoDB 💀💀");
  }
};

module.exports = connectDB;
=======
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB 🚀🚀🚀");
  } catch (error) {
    console.log("Failed to connect to MongoDB 💀💀");
  }
};

module.exports = connectDB;
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
