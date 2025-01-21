import React, { useState } from "react";
import "../css/Modules.css";

const Modules = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "fs, http, path, os",
      q2: "npm",
      q3: "require() and module.exports",
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
    <div className="modules-container">
      <h1>Understanding Modules</h1>

      <section>
        <h2>Core Modules</h2>
        <p>
          Node.js comes with a set of built-in modules that provide basic functionalities, such as working with files, handling HTTP requests, and managing the operating system. Examples include:
        </p>
        <ul>
          <li><strong>fs:</strong> File system operations.</li>
          <li><strong>http:</strong> Creating HTTP servers and making requests.</li>
          <li><strong>path:</strong> Working with file and directory paths.</li>
          <li><strong>os:</strong> Accessing operating system-related utilities.</li>
        </ul>
        <p>Example:</p>
        <pre>
          <code>{`
const fs = require('fs');

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Third-Party Modules</h2>
        <p>
          Node.js's capabilities can be extended with third-party modules available in the npm registry. Some popular modules are:
        </p>
        <ul>
          <li><strong>Express.js:</strong> Web application framework.</li>
          <li><strong>Mongoose:</strong> MongoDB object modeling tool.</li>
          <li><strong>React:</strong> Frontend JavaScript library.</li>
        </ul>
        <p>Install modules using npm:</p>
        <pre>
          <code>npm install express</code>
        </pre>
        <p>Example of using Express:</p>
        <pre>
          <code>{`
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Module System (CommonJS)</h2>
        <p>
          Node.js uses the CommonJS module system for importing and exporting functionalities. 
          <strong>require()</strong> is used to import modules, and <strong>module.exports</strong> is used to export modules.
        </p>
        <p>Example of creating and using a custom module:</p>
        <p><strong>math.js:</strong></p>
        <pre>
          <code>{`
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
          `}</code>
        </pre>
        <p><strong>app.js:</strong></p>
        <pre>
          <code>{`
const math = require('./math');

console.log(math.add(5, 3)); // Outputs: 8
console.log(math.subtract(5, 3)); // Outputs: 2
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which of the following are Node.js core modules?</p>
            <label>
              <input type="radio" name="q1" value="fs, http, path, os" /> fs, http, path, os
            </label>
            <label>
              <input type="radio" name="q1" value="React, Express, Mongoose" /> React, Express, Mongoose
            </label>
          </div>
          <div>
            <p>2. What is the package manager for Node.js called?</p>
            <label>
              <input type="radio" name="q2" value="npm" /> npm
            </label>
            <label>
              <input type="radio" name="q2" value="pip" /> pip
            </label>
          </div>
          <div>
            <p>3. Which functions are used for importing and exporting modules in CommonJS?</p>
            <label>
              <input type="radio" name="q3" value="require() and module.exports" /> require() and module.exports
            </label>
            <label>
              <input type="radio" name="q3" value="import and export" /> import and export
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
            <a href="https://nodejs.org/api/" target="_blank" rel="noopener noreferrer">Node.js Documentation</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm Registry</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Modules;
