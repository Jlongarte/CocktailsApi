const jwt = require("jsonwebtoken");
const JWT = process.env.JWT_SECRET;

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, JWT, { expiresIn: "5d" });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT);
};

module.exports = { generateToken, verifyToken };
