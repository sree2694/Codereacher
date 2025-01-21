import React, { useState } from "react";
import "../css/HTTPServer.css";

const HTTPServer = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "http",
      q2: "GET, POST, PUT, DELETE",
      q3: "Routes requests to appropriate handlers",
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
    <div className="http-server-container">
      <h1>HTTP Server</h1>

      <section>
        <h2>Creating HTTP Servers</h2>
        <p>
          Node.js provides the <strong>http</strong> module to create HTTP servers. This module allows handling incoming requests and sending responses.
        </p>
        <p>Example:</p>
        <pre>
          <code>{`
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Handling HTTP Requests and Responses</h2>
        <p>
          HTTP methods like <strong>GET</strong>, <strong>POST</strong>, <strong>PUT</strong>, and <strong>DELETE</strong> are commonly used to handle CRUD operations. The server identifies the request type and processes it accordingly.
        </p>
        <p>Example:</p>
        <pre>
          <code>{`
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (req.method === 'POST' && req.url === '/data') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data received', data: body }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Routing Requests</h2>
        <p>
          Routing allows directing HTTP requests to different handlers based on the request URL and method.
        </p>
        <p>Example:</p>
        <pre>
          <code>{`
const routes = {
  '/': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  },
  '/about': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  },
};

const server = http.createServer((req, res) => {
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which Node.js module is used to create HTTP servers?</p>
            <label>
              <input type="radio" name="q1" value="http" /> http
            </label>
            <label>
              <input type="radio" name="q1" value="fs" /> fs
            </label>
            <label>
              <input type="radio" name="q1" value="os" /> os
            </label>
          </div>
          <div>
            <p>2. Which HTTP methods are commonly used for CRUD operations?</p>
            <label>
              <input type="radio" name="q2" value="GET, POST, PUT, DELETE" /> GET, POST, PUT, DELETE
            </label>
            <label>
              <input type="radio" name="q2" value="START, STOP, RESTART" /> START, STOP, RESTART
            </label>
          </div>
          <div>
            <p>3. What is the purpose of routing in HTTP servers?</p>
            <label>
              <input type="radio" name="q3" value="Routes requests to appropriate handlers" /> Routes requests to appropriate handlers
            </label>
            <label>
              <input type="radio" name="q3" value="Sends only static responses" /> Sends only static responses
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
            <a href="https://nodejs.org/api/http.html" target="_blank" rel="noopener noreferrer">Node.js HTTP Module Documentation</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank" rel="noopener noreferrer">MDN: HTTP Overview</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HTTPServer;
