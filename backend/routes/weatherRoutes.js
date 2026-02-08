const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await axios.get(url);

    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    });
  } catch (error) {
    res.status(404).json({ message: "Weather not found" });
  }
});

module.exports = router;
