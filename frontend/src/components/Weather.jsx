import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    try {
      // ⚠️ Replace YOUR_API_KEY with your real key
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ef9c1f4f50ca681d51795920a98ef50c`
      );
      setWeather(res.data);
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  return (
    <>
      {/* Search */}
      <form onSubmit={getWeather} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </form>

      {/* Error */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Result */}
      {weather && (
        <div className="text-center">
          <h4 className="fw-bold">{weather.name}</h4>
          <p className="display-6">{Math.round(weather.main.temp)}°C</p>
          <p className="text-muted text-capitalize">
            {weather.weather[0].description}
          </p>

          <div className="row mt-3">
            <div className="col">
              <div className="border rounded p-2">
                <strong>Humidity</strong>
                <div>{weather.main.humidity}%</div>
              </div>
            </div>
            <div className="col">
              <div className="border rounded p-2">
                <strong>Wind</strong>
                <div>{weather.wind.speed} m/s</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
