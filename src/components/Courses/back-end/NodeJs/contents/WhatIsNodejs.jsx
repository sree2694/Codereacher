import React, { useState } from "react";
import "../css/WhatIsNodejs.css";

const WhatIsNodejs = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "V8 JavaScript Engine",
      q2: "Server-side",
      q3: "Open-source",
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
    <div className="nodejs-container">
      <h1>What is Node.js?</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Node.js is an open-source, back-end JavaScript runtime environment that executes 
          JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine, 
          known for its speed and efficiency.
        </p>
        <ul>
          <li>Primarily used for server-side applications such as APIs and web servers.</li>
          <li>Supports asynchronous, non-blocking I/O operations for handling multiple connections efficiently.</li>
          <li>Has a large ecosystem of packages available through npm (Node Package Manager).</li>
        </ul>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Fast Execution:</strong> Built on the V8 JavaScript engine for high performance.</li>
          <li><strong>Event-Driven:</strong> Uses an event-driven, non-blocking I/O model suitable for scalable applications.</li>
          <li><strong>Cross-Platform:</strong> Works on Windows, macOS, and Linux.</li>
          <li><strong>Package Ecosystem:</strong> Leverages npm for managing dependencies and tools.</li>
        </ul>
      </section>

      <section>
        <h2>Example: Simple Web Server</h2>
        <p>
          Below is an example of a simple HTTP server using Node.js:
        </p>
        <pre>
          <code>{`
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
          `}</code>
        </pre>
        <p>
          Run this script with <code>node server.js</code> and visit <code>http://localhost:3000</code>.
        </p>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which engine powers Node.js?</p>
            <label>
              <input type="radio" name="q1" value="V8 JavaScript Engine" /> V8 JavaScript Engine
            </label>
            <label>
              <input type="radio" name="q1" value="SpiderMonkey" /> SpiderMonkey
            </label>
          </div>
          <div>
            <p>2. Is Node.js primarily used for server-side or client-side applications?</p>
            <label>
              <input type="radio" name="q2" value="Server-side" /> Server-side
            </label>
            <label>
              <input type="radio" name="q2" value="Client-side" /> Client-side
            </label>
          </div>
          <div>
            <p>3. What type of license does Node.js have?</p>
            <label>
              <input type="radio" name="q3" value="Open-source" /> Open-source
            </label>
            <label>
              <input type="radio" name="q3" value="Proprietary" /> Proprietary
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
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
              Node.js Official Website
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              JavaScript Guide on MDN
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">
              npm Official Website
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WhatIsNodejs;
