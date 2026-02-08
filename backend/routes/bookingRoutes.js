const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const { username, destinationId } = req.body;

    const booking = await Booking.create({
      username,
      destination: destinationId,
    });

    res.json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
});

// GET BOOKINGS BY USERNAME
router.get("/:username", async (req, res) => {
  try {
    const bookings = await Booking.find({
      username: req.params.username,
    }).populate("destination");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to load trips" });
  }
});

module.exports = router;
