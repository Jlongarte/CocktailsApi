<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET;

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, JWT, { expiresIn: "5d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT);
};

module.exports = { generateToken, verifyToken };
=======
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET;

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, JWT, { expiresIn: "5d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT);
};

module.exports = { generateToken, verifyToken };
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
