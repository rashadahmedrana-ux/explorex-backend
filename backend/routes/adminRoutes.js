const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking"); // make sure you have Booking model
const Destination = require("../models/Destination");

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all destinations
router.get("/destinations", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
