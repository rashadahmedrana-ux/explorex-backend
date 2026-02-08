"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Destination = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

export default function HomePage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Discover Amazing Places 🌍
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          marginTop: "20px",
        }}
      >
        {destinations.map((d) => (
          <div
            key={d._id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src={d.image}
              alt={d.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3>{d.title}</h3>
              <p style={{ color: "#555" }}>{d.description}</p>

              <Link href={`/destinations/${d._id}`}>
                <button
                  style={{
                    marginTop: "12px",
                    padding: "10px",
                    width: "100%",
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Explore Destination
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
