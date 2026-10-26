// Mini Project - Pertemuan 13-14: Model User (sudah lengkap)

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);
