
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Package route is working" });
});

console.log("packageRoutes loaded");


module.exports = router;
