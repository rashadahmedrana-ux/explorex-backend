//const Package = require("../models/Package");
const { getPackages } = require("../controllers/packageController");


exports.getAll = async (req, res) => {
  res.json(await Package.find());
};

exports.create = async (req, res) => {
  res.json(await Package.create(req.body));
};
