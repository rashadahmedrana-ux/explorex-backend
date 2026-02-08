const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json`,
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: city,
          aqi: "yes"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Weather API error" });
  }
};

module.exports = { getWeather };
