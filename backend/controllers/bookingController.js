const Booking = require("../models/Booking");

exports.create = async (req, res) => {
  res.json(await Booking.create(req.body));
};

exports.getAll = async (req, res) => {
  res.json(await Booking.find());
};
