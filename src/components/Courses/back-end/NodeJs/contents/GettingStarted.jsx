import React, { useState } from "react";
import "../css/GettingStarted.css";

const GettingStarted = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Node.js and npm",
      q2: "package.json",
      q3: "localhost:3000",
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
    <div className="getting-started-container">
      <h1>Getting Started with Node.js</h1>

      <section>
        <h2>Installing Node.js and npm</h2>
        <p>
          To start using Node.js, you need to install both Node.js and its package manager, npm. 
          Follow these steps:
        </p>
        <ol>
          <li>Go to the <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js official website</a>.</li>
          <li>Download and install the recommended version for your operating system.</li>
          <li>Verify the installation by running the following commands in the terminal:
            <pre>
              <code>node -v</code>
            </pre>
            <pre>
              <code>npm -v</code>
            </pre>
          </li>
        </ol>
      </section>

      <section>
        <h2>Creating a Simple "Hello, World!" Server</h2>
        <p>
          Let’s create a basic HTTP server in Node.js. Follow these steps:
        </p>
        <pre>
          <code>{`
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
          `}</code>
        </pre>
        <p>
          Save the file as <code>server.js</code> and run it using the command:
        </p>
        <pre>
          <code>node server.js</code>
        </pre>
        <p>Visit <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> to see the server response.</p>
      </section>

      <section>
        <h2>Understanding the Basic Structure of a Node.js Project</h2>
        <p>
          A typical Node.js project contains:
        </p>
        <ul>
          <li>
            <strong>package.json:</strong> A metadata file that lists dependencies, scripts, and project information.
          </li>
          <li>
            <strong>node_modules:</strong> A directory for installed dependencies.
          </li>
          <li>
            <strong>Main server file:</strong> A file (e.g., <code>server.js</code>) to define the application logic.
          </li>
        </ul>
        <p>Initialize a new project with:</p>
        <pre>
          <code>npm init -y</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What tools do you need to start using Node.js?</p>
            <label>
              <input type="radio" name="q1" value="Node.js and npm" /> Node.js and npm
            </label>
            <label>
              <input type="radio" name="q1" value="React and npm" /> React and npm
            </label>
          </div>
          <div>
            <p>2. What file defines dependencies in a Node.js project?</p>
            <label>
              <input type="radio" name="q2" value="package.json" /> package.json
            </label>
            <label>
              <input type="radio" name="q2" value="index.js" /> index.js
            </label>
          </div>
          <div>
            <p>3. What URL does the example server respond on?</p>
            <label>
              <input type="radio" name="q3" value="localhost:3000" /> localhost:3000
            </label>
            <label>
              <input type="radio" name="q3" value="localhost:8080" /> localhost:8080
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
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js Official Website</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" target="_blank" rel="noopener noreferrer">
              MDN: Node.js Server
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default GettingStarted;
