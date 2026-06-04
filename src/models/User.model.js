<<<<<<< HEAD
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [8, "The password must be at least 8 characters long"],
    },
    rol: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
const User = mongoose.model("user", userSchema);
module.exports = User;
=======
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [8, "The password must be at least 8 characters long"],
    },
    rol: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
const User = mongoose.model("user", userSchema);
module.exports = User;
>>>>>>> 7f747d20de1779175b98afc5a9c3e386c9a042be
