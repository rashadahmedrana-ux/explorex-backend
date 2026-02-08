"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#0f172a",
        color: "white",
        gap: "20px",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}>
        🌍 ExploreX
      </span>

      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link href="/weather" style={{ color: "white", textDecoration: "none" }}>
        Weather
      </Link>
      <Link href="/chat" style={{ color: "white", textDecoration: "none" }}>
        Chat
      </Link>
      <Link href="/admin" style={{ color: "white", textDecoration: "none" }}>
        Admin
      </Link>

      <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
        <Link href="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
        <Link href="/signup" style={{ color: "white", textDecoration: "none" }}>
          Signup
        </Link>
      </div>
    </nav>
  );
}
