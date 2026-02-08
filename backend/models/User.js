const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: String,
  date: String,
  price: Number
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  trips: [
    {
      destination: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
      },
      date: String,
    },
  ],
});


module.exports = mongoose.model("User", userSchema);
