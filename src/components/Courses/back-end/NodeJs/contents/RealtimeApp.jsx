import React, { useState, useEffect } from "react";
import "../css/RealtimeApp.css";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // Assuming the server is running locally on port 4000

const RealtimeApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      socket.emit("message", inputMessage);
      setInputMessage("");
    }
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "WebSocket is a protocol for full-duplex communication.",
      q2: "Socket.IO simplifies real-time communication in Node.js.",
    };

    const userAnswers = Array.from(e.target.elements)
      .filter((el) => el.checked)
      .reduce((acc, el) => ({ ...acc, [el.name]: el.value }), {});

    const score = Object.keys(correctAnswers).reduce(
      (sum, key) => sum + (userAnswers[key] === correctAnswers[key] ? 1 : 0),
      0
    );

    setQuizResult(`You got ${score} out of ${Object.keys(correctAnswers).length} correct.`);
  };

  return (
    <div className="realtime-app-container">
      <h1>Real-time Applications</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Real-time applications enable instant communication between clients and servers. Popular use cases include chat applications, online gaming, live notifications, and collaborative tools. Node.js, with libraries like Socket.IO, simplifies the creation of real-time applications using WebSockets.
        </p>
      </section>

      <section>
        <h2>Key Concepts</h2>

        <h3>Building Real-time Applications with WebSockets</h3>
        <p>
          WebSockets provide a protocol for full-duplex communication over a single TCP connection, enabling bidirectional data transfer between clients and servers.
        </p>

        <h3>Using Socket.IO</h3>
        <p>
          Socket.IO is a library that abstracts WebSocket implementation and provides additional features like auto-reconnection and room-based messaging.
        </p>

        <pre>
          <code>{`
// Server-side example
const io = require("socket.io")(4000);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", (message) => {
    io.emit("message", message); // Broadcast message to all clients
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
          `}</code>
        </pre>

        <pre>
          <code>{`
// Client-side example
const socket = io("http://localhost:4000");

socket.on("message", (message) => {
  console.log("New message received:", message);
});

socket.emit("message", "Hello, World!");
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Interactive Chat Example</h2>
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is WebSocket?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="WebSocket is a protocol for full-duplex communication."
              />
              WebSocket is a protocol for full-duplex communication.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="WebSocket is an HTTP-based data format."
              />
              WebSocket is an HTTP-based data format.
            </label>
          </div>

          <div>
            <p>2. What is Socket.IO?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="Socket.IO simplifies real-time communication in Node.js."
              />
              Socket.IO simplifies real-time communication in Node.js.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="Socket.IO is a database query language."
              />
              Socket.IO is a database query language.
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
        {quizResult && <p className="quiz-result">{quizResult}</p>}
      </section>

      <section>
        <h2>References</h2>
        <ul>
          <li>
            <a
              href="https://socket.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Socket.IO Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebSockets API - MDN
            </a>
          </li>
          <li>
            <a
              href="https://nodejs.org/en/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RealtimeApp;
