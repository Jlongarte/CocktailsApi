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
