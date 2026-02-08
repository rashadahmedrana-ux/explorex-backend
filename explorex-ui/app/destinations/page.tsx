"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Destination = {
  _id: string;
  title: string;
  image: string;
};

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Popular Destinations
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {destinations.map((d) => (
          <div
            key={d._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
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
              onError={(e) => {
                e.currentTarget.src = "/lahore.jpg";
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px" }}>{d.title}</h3>

              <Link href={`/destinations/${d._id}`}>
                <button
                  style={{
                    padding: "10px 15px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
