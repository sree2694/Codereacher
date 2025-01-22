import React, { useState } from "react";
import "../css/ClusterModule.css";

const ClusterModule = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Utilizing multiple CPU cores.",
      q2: "Cluster module enables the creation of worker processes.",
      q3: "Load balancing requests across worker processes.",
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
    <div className="cluster-module-container">
      <h1>Cluster Module</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          The <strong>Cluster Module</strong> in Node.js allows you to take advantage of multi-core systems by spawning multiple worker processes that share the same server port.
        </p>
      </section>

      <section>
        <h2>Key Concepts</h2>
        <h3>Utilizing Multiple CPU Cores</h3>
        <p>
          JavaScript, being single-threaded, doesn't fully utilize multi-core CPUs by default. The Cluster Module allows Node.js to handle this limitation by spawning worker processes.
        </p>

        <h3>Creating a Cluster</h3>
        <p>
          The cluster module enables you to create worker processes that share a single master process. These workers run on separate threads and enhance application performance.
        </p>
        <pre>
          <code>{`
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello from Worker!');
    })
    .listen(8000);
}
          `}</code>
        </pre>

        <h3>Load Balancing</h3>
        <p>
          The master process automatically distributes incoming requests to the worker processes, ensuring efficient load balancing and resource utilization.
        </p>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is the main benefit of the Cluster Module?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="Utilizing multiple CPU cores."
              />
              Utilizing multiple CPU cores.
            </label>
            <label>
              <input type="radio" name="q1" value="Handling file operations." />
              Handling file operations.
            </label>
          </div>
          <div>
            <p>2. What does the Cluster Module enable?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="Cluster module enables the creation of worker processes."
              />
              Cluster module enables the creation of worker processes.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="Cluster module handles database connections."
              />
              Cluster module handles database connections.
            </label>
          </div>
          <div>
            <p>3. How does the Cluster Module improve performance?</p>
            <label>
              <input
                type="radio"
                name="q3"
                value="Load balancing requests across worker processes."
              />
              Load balancing requests across worker processes.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="Caching requests in memory."
              />
              Caching requests in memory.
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
              href="https://nodejs.org/api/cluster.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js Cluster Module Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Event Loop
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ClusterModule;
