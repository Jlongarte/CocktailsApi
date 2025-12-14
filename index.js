require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const cocktailsRouter = require("./src/routes/Cocktail.routes");
const ingredientsRouter = require("./src/routes/Ingredients.routes");
const userRoutes = require("./src/routes/User.routes");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
connectDB();

const PORT = process.env.PORT || 3000;

server.use("/", cocktailsRouter);
server.use("/ingredients", ingredientsRouter);
server.use("/user", userRoutes);

server.use((req, res) => {
  return res.status(404).json("Route not found");
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 💖💖💖`);
});

server.use((err, req, res, next) => {
  console.error("🔥GLOBAL ERROR :", err);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
    stack: err.stack,
  });
});
