const express = require("express");
const { planTrip } = require("../controllers/aiPlannerController");

const router = express.Router();

router.post("/plan", planTrip);

module.exports = router;
