"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, `You: ${input}`]);
    setInput("");

    // fake admin reply (for now)
    setTimeout(() => {
      setMessages((prev) => [...prev, "Admin: Thanks for your message!"]);
    }, 800);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>💬 Chat with Admin</h2>

      {/* CHAT BOX */}
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
          background: "#f9fafb",
        }}
      >
        {messages.length === 0 && (
          <p style={{ color: "#6b7280" }}>Start the conversation…</p>
        )}

        {messages.map((msg, index) => (
          <p key={index} style={{ marginBottom: "6px" }}>
            {msg}
          </p>
        ))}
      </div>

      {/* INPUT */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message…"
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
