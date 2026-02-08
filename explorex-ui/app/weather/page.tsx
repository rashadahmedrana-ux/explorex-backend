"use client";

import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState<any>(null);

  const getWeather = async () => {
    const res = await fetch(
      `http://localhost:5000/api/weather?city=${city}`
    );
    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "30px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🌦 Weather Checker
      </h1>

      <input
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <button
        onClick={getWeather}
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Get Weather
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>{result.city}</h3>
          <p>🌡 Temp: {result.temperature}°C</p>
          <p>☁ Condition: {result.description}</p>
        </div>
      )}
    </div>
  );
}
