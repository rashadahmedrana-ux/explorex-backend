const axios = require("axios");

exports.planTrip = async (req, res) => {
  const { city, days, preferences } = req.body;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [
        { role: "user", content: `Plan a ${days}-day trip to ${city} for ${preferences}` }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_KEY}`
      }
    }
  );

  res.json({ plan: response.data.choices[0].message.content });
};
