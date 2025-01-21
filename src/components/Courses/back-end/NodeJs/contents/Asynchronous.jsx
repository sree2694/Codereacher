import React, { useState } from "react";
import "../css/Asynchronous.css";

const Asynchronous = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "A function passed as an argument to another function",
      q2: "Object representing the eventual result of an asynchronous operation",
      q3: "Syntactic sugar for promises",
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
    <div className="asynchronous-container">
      <h1>Asynchronous Programming</h1>

      <section>
        <h2>Callbacks</h2>
        <p>
          A <strong>callback</strong> is a function passed as an argument to another function and is executed after the completion of an asynchronous operation.
        </p>
        <p>Example:</p>
        <pre>
          <code>{`
const fs = require('fs');

// Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Promises</h2>
        <p>
          A <strong>promise</strong> represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:
        </p>
        <ul>
          <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected.</li>
          <li><strong>Fulfilled:</strong> Operation completed successfully.</li>
          <li><strong>Rejected:</strong> Operation failed.</li>
        </ul>
        <p>Example:</p>
        <pre>
          <code>{`
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 1000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Async/Await</h2>
        <p>
          <strong>Async/Await</strong> is syntactic sugar for promises, allowing you to write asynchronous code in a synchronous manner. It makes code more readable and easier to debug.
        </p>
        <p>Example:</p>
        <pre>
          <code>{`
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 1000);
  });
};

const fetchAsync = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchAsync();
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is a callback?</p>
            <label>
              <input type="radio" name="q1" value="A function passed as an argument to another function" /> A function passed as an argument to another function
            </label>
            <label>
              <input type="radio" name="q1" value="A built-in Node.js module" /> A built-in Node.js module
            </label>
          </div>
          <div>
            <p>2. What is a promise?</p>
            <label>
              <input type="radio" name="q2" value="Object representing the eventual result of an asynchronous operation" /> Object representing the eventual result of an asynchronous operation
            </label>
            <label>
              <input type="radio" name="q2" value="An API for making HTTP requests" /> An API for making HTTP requests
            </label>
          </div>
          <div>
            <p>3. What does async/await do?</p>
            <label>
              <input type="radio" name="q3" value="Syntactic sugar for promises" /> Syntactic sugar for promises
            </label>
            <label>
              <input type="radio" name="q3" value="Replaces the need for promises entirely" /> Replaces the need for promises entirely
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
            <a href="https://nodejs.dev/en/learn/" target="_blank" rel="noopener noreferrer">Node.js Official Learning Path</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" target="_blank" rel="noopener noreferrer">MDN: Using Promises</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Asynchronous;
