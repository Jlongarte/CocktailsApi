<<<<<<< HEAD
const { register, login } = require("../controllers/User.controller");
const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
=======
const { register, login } = require("../controllers/User.controller");
const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
