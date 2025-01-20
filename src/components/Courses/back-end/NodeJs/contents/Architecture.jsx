import React, { useState } from "react";
import "../css/Architecture.css";

const Architecture = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "V8 Engine",
      q2: "Event Loop",
      q3: "Libuv",
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
    <div className="architecture-container">
      <h1>Node.js Architecture</h1>

      <section>
        <h2>Overview</h2>
        <p>
          Node.js operates on a non-blocking, event-driven architecture. It is designed for
          scalability and high performance, suitable for building fast, lightweight server-side
          applications.
        </p>
      </section>

      <section>
        <h2>Key Components of Node.js Architecture</h2>
        <ul>
          <li>
            <strong>V8 Engine:</strong> The JavaScript engine developed by Google for Chrome, responsible
            for executing JavaScript code. It compiles JavaScript into native machine code for
            faster execution.
          </li>
          <li>
            <strong>Event Loop:</strong> A core part of Node.js that manages asynchronous operations,
            handling I/O tasks, and ensuring the single-threaded nature of Node.js doesn’t block
            execution.
          </li>
          <li>
            <strong>Libuv:</strong> A library that provides cross-platform support for asynchronous
            operations like file systems, DNS, and network requests. It enables the event loop to
            function efficiently.
          </li>
        </ul>
      </section>

      <section>
        <h2>Example: Event Loop in Action</h2>
        <p>
          Below is an example demonstrating the event loop handling asynchronous operations:
        </p>
        <pre>
          <code>{`
console.log("Start");

setTimeout(() => {
  console.log("Async Operation Complete");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Async Operation Complete
          `}</code>
        </pre>
        <p>
          In this example, the event loop ensures that the asynchronous operation (setTimeout) doesn’t
          block the execution of subsequent code.
        </p>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which engine does Node.js use to execute JavaScript code?</p>
            <label>
              <input type="radio" name="q1" value="V8 Engine" /> V8 Engine
            </label>
            <label>
              <input type="radio" name="q1" value="SpiderMonkey" /> SpiderMonkey
            </label>
          </div>
          <div>
            <p>2. What component manages asynchronous operations in Node.js?</p>
            <label>
              <input type="radio" name="q2" value="Event Loop" /> Event Loop
            </label>
            <label>
              <input type="radio" name="q2" value="Callback Queue" /> Callback Queue
            </label>
          </div>
          <div>
            <p>3. What library provides cross-platform support for asynchronous I/O in Node.js?</p>
            <label>
              <input type="radio" name="q3" value="Libuv" /> Libuv
            </label>
            <label>
              <input type="radio" name="q3" value="Async.js" /> Async.js
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer">
              MDN: Event Loop
            </a>
          </li>
          <li>
            <a href="https://v8.dev/" target="_blank" rel="noopener noreferrer">
              V8 JavaScript Engine
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Architecture;
