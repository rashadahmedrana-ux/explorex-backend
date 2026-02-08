const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

/* ✅ GET ALL DESTINATIONS */
router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ✅ GET SINGLE DESTINATION BY ID */
router.get("/:id", async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
