const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* ADD TRIP */
router.post("/add", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token)
      return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.trips.push(req.body);
    await user.save();

    res.json({ message: "Trip added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* GET TRIP HISTORY */
router.get("/history", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token)
      return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id)
      .populate("trips.destination");

    res.json(user.trips);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
