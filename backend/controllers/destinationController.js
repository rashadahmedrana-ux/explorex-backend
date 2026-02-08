const Destination = require("../models/Destination");

// GET all destinations
const getAll = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch destinations" });
  }
};

// GET single destination by ID
const getOne = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: "Destination not found" });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch destination" });
  }
};

// CREATE destination
const create = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: "Failed to create destination" });
  }
};

module.exports = { getAll, getOne, create };
