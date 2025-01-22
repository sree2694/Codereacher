import React, { useState } from "react";
import "../css/Optimization.css";

const Optimization = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Profiling identifies performance bottlenecks in applications.",
      q2: "Caching can reduce database load and improve response times.",
      q3: "Query optimization involves using indexes and efficient queries.",
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
    <div className="optimization-container">
      <h1>Performance Optimization</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Performance optimization in Node.js ensures efficient application behavior under heavy loads. By profiling, caching, and optimizing database interactions, we can enhance performance and scalability.
        </p>
      </section>

      <section>
        <h2>Key Concepts</h2>

        <h3>Profiling Node.js Applications</h3>
        <p>
          Profiling identifies bottlenecks in application performance. Tools like <code>node --inspect</code>, Chrome DevTools, and <code>clinic.js</code> help monitor and debug performance issues.
        </p>

        <pre>
          <code>{`
node --inspect index.js
// Open Chrome DevTools to inspect performance
          `}</code>
        </pre>

        <h3>Caching Strategies</h3>
        <p>
          Caching reduces response times by storing frequently accessed data in memory. Common tools include <code>Redis</code> and <code>Memcached</code>.
        </p>

        <pre>
          <code>{`
// Using Redis for caching
const redis = require("redis");
const client = redis.createClient();

client.set("key", "value", redis.print);
client.get("key", (err, result) => {
  console.log(result);
});
          `}</code>
        </pre>

        <h3>Optimizing Database Queries</h3>
        <p>
          Efficient database interactions improve performance. Techniques include using indexes, avoiding unnecessary data fetches, and batching queries.
        </p>

        <pre>
          <code>{`
// Example of using indexes in MongoDB
db.collection.createIndex({ field: 1 });
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is profiling in Node.js?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="Profiling identifies performance bottlenecks in applications."
              />
              Profiling identifies performance bottlenecks in applications.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="Profiling is used to log user activities."
              />
              Profiling is used to log user activities.
            </label>
          </div>

          <div>
            <p>2. What is the benefit of caching?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="Caching can reduce database load and improve response times."
              />
              Caching can reduce database load and improve response times.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="Caching increases memory usage unnecessarily."
              />
              Caching increases memory usage unnecessarily.
            </label>
          </div>

          <div>
            <p>3. How can database queries be optimized?</p>
            <label>
              <input
                type="radio"
                name="q3"
                value="Query optimization involves using indexes and efficient queries."
              />
              Query optimization involves using indexes and efficient queries.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="Query optimization involves fetching unnecessary data."
              />
              Query optimization involves fetching unnecessary data.
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
              href="https://nodejs.org/en/docs/guides/debugging-getting-started/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js Debugging Guide
            </a>
          </li>
          <li>
            <a
              href="https://redis.io/documentation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redis Documentation
            </a>
          </li>
          <li>
            <a
              href="https://docs.mongodb.com/manual/indexes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB Indexing
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Optimization;
