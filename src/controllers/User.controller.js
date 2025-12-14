const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json({ error: "Failed to register the user" });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Ivalid password" });
    }
    const token = generateToken(user._id, user.email);
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(400).json({ error: "Failed to log in" });
  }
};

module.exports = { register, login };
