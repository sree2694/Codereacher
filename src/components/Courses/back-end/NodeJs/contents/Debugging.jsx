import React, { useState } from "react";
import "../css/Debugging.css";

const Debugging = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Node.js debugger allows you to pause execution and inspect code.",
      q2: "console.log() is useful for logging variable states.",
      q3: "Setting breakpoints helps in debugging.",
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
    <div className="debugging-container">
      <h1>Debugging</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Debugging is a crucial aspect of software development that helps developers identify and fix issues in their code. In Node.js, debugging can be performed using built-in tools and techniques for inspecting, analyzing, and resolving problems effectively.
        </p>
      </section>

      <section>
        <h2>Key Concepts</h2>

        <h3>Using the Node.js Debugger</h3>
        <p>
          The Node.js debugger is a built-in tool that allows you to pause execution, inspect the current state of variables, and step through code.
        </p>
        <pre>
          <code>{`
node inspect app.js
          `}</code>
        </pre>
        <p>Use commands like:</p>
        <ul>
          <li><strong>cont:</strong> Continue execution.</li>
          <li><strong>next:</strong> Move to the next line of code.</li>
          <li><strong>repl:</strong> Evaluate expressions in real-time.</li>
        </ul>

        <h3>Setting Breakpoints and Inspecting Variables</h3>
        <p>
          Use the `debugger` statement in your code to set a breakpoint. When the Node.js debugger encounters this statement, it will pause execution.
        </p>
        <pre>
          <code>{`
function calculate(a, b) {
  debugger;
  return a + b;
}
calculate(5, 3);
          `}</code>
        </pre>

        <h3>Logging and Error Handling Strategies</h3>
        <p>
          Logging is a simple yet effective way to debug. Use <code>console.log()</code> to print variable states and execution flow.
        </p>
        <pre>
          <code>{`
try {
  // Code that might throw an error
} catch (error) {
  console.error("An error occurred:", error);
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What does the Node.js debugger allow you to do?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="Node.js debugger allows you to pause execution and inspect code."
              />
              Node.js debugger allows you to pause execution and inspect code.
            </label>
            <label>
              <input type="radio" name="q1" value="Node.js debugger is for performance testing." />
              Node.js debugger is for performance testing.
            </label>
          </div>

          <div>
            <p>2. What is <code>console.log()</code> commonly used for?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="console.log() is useful for logging variable states."
              />
              console.log() is useful for logging variable states.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="console.log() is used for database operations."
              />
              console.log() is used for database operations.
            </label>
          </div>

          <div>
            <p>3. How can you pause code execution in Node.js?</p>
            <label>
              <input
                type="radio"
                name="q3"
                value="Setting breakpoints helps in debugging."
              />
              Setting breakpoints helps in debugging.
            </label>
            <label>
              <input type="radio" name="q3" value="Using for loops." />
              Using for loops.
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
              href="https://nodejs.org/api/debugger.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js Debugger Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN: Debugger Statement
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Debugging;
