"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Destination = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

export default function DestinationDetailPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setDestination(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!destination) {
    return <p style={{ padding: "40px" }}>Loading destination...</p>;
  }

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
        {destination.title}
      </h1>

      <img
        src={destination.image}
        alt={destination.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
        onError={(e) => {
          e.currentTarget.src = "/lahore.jpg";
        }}
      />

      <p style={{ fontSize: "18px", color: "#444" }}>
        {destination.description}
      </p>

      <button
  onClick={async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch("http://localhost:5000/api/trips/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        destination: destination._id,
        title: destination.title,
      }),
    });

    if (res.ok) {
      alert("Destination added to your trips ✅");
    } else {
      alert("Something went wrong ❌");
    }
  }}
  style={{
    marginTop: "25px",
    padding: "12px 20px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  Select This Destination
</button>

    </div>
  );
}
