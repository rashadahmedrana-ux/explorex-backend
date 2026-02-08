const mongoose = require("mongoose");
const Destination = require("../models/Destination");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const destinations = [
  {
    title: "Japan",
    description: "Explore Tokyo, Kyoto, Mount Fuji and Japanese culture.",
    image:
      "https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New York City",
    description: "Skyscrapers, Times Square, Central Park and Broadway.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Edinburgh",
    description: "Historic castles and Scottish heritage.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lahore",
    description: "Cultural heart of Pakistan with Mughal history.",
    image:
      "https://images.unsplash.com/photo-1605251037361-ec1bfe6c5b43?auto=format&fit=crop&w=800&q=80",
  },
];

async function seedData() {
  try {
    await Destination.deleteMany();
    await Destination.insertMany(destinations);
    console.log("✅ Destinations seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();
