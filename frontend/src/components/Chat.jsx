import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

// Socket connection
const socket = io("http://localhost:5000");

function Chat() {
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  // Load chat history + socket listener
  useEffect(() => {
    // Load old messages from DB
    axios
      .get("http://localhost:5000/api/chat")
      .then((res) => setMessages(res.data))
      .catch((err) => console.error(err));

    // Listen for new messages
    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receive_message");
  }, []);

  // Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const sendMessage = () => {
    if (!input.trim() || !username.trim()) return;

    socket.emit("send_message", {
      username,
      message: input,
    });

    setInput("");
  };

  return (
    <>
      {/* Username input */}
      {!username && (
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}

      {/* Chat Box */}
      <div
        className="border rounded p-3 mb-3 bg-white"
        style={{ height: "300px", overflowY: "auto" }}
      >
        {messages.length === 0 && (
          <p className="text-muted text-center">
            Start chatting about your travel plans ✈️
          </p>
        )}

        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}

        {/* Auto scroll anchor */}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ask about trips, weather, places..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={!username}
        />
        <button
          className="btn btn-primary"
          onClick={sendMessage}
          disabled={!username}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default Chat;
