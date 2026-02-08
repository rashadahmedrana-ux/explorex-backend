const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/weather", require("./routes/weatherRoutes"));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
