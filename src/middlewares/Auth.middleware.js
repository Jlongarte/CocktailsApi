const User = require("../models/User.model");
const { verifyToken } = require("../utils/token");

const isAuth = (allowedRoles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) {
        return res.status(401).json("Token has not been provided");
      }

      const decoded = verifyToken(token);

      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json("Ivalid Token or user not found");
      }

      req.user = user;

      if (allowedRoles.length > 0 && !allowedRoles.includes(user.rol)) {
        return res.status(403).json("Access denied");
      }

      next();
    } catch (error) {
      return res.status(401).json(error, "Ivalid Token / Session expired");
    }
  };
};

module.exports = isAuth;
