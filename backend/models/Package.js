const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  title: String,
  price: Number,
  duration: String,
  destination: String
});

module.exports = mongoose.model("Package", packageSchema);
