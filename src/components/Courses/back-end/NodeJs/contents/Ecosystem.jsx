import React, { useState } from "react";
import "../css/Ecosystem.css";

const Ecosystem = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Dependency management, versioning, and private registries.",
      q2: "Express.js is lightweight; NestJS is opinionated and uses TypeScript.",
      q3: "Jest, Mocha.",
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
    <div className="ecosystem-container">
      <h1>Ecosystem</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Node.js boasts a rich and diverse ecosystem powered by its package manager, npm, and a wide range of libraries, frameworks, and tools. This ecosystem makes it a versatile choice for various applications, from web servers to testing and automation.
        </p>
      </section>

      <section>
        <h2>npm and Its Features</h2>
        <p>
          The Node Package Manager (<strong>npm</strong>) is at the core of the Node.js ecosystem. Key features include:
        </p>
        <ul>
          <li>
            <strong>Dependency Management:</strong> Installing and managing third-party libraries and packages.
          </li>
          <li>
            <strong>Versioning:</strong> Ensuring compatibility using semantic versioning.
          </li>
          <li>
            <strong>Private Registries:</strong> Hosting and sharing private packages within an organization.
          </li>
        </ul>
        <h3>Example</h3>
        <pre>
          <code>{`
# Install a package
npm install express

# Install a package globally
npm install -g nodemon

# Initialize a new project
npm init -y
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Popular Frameworks</h2>
        <p>Node.js provides several frameworks to streamline development:</p>
        <ul>
          <li>
            <strong>Express.js:</strong> A minimalist framework for building web applications and APIs.
          </li>
          <li>
            <strong>NestJS:</strong> A progressive framework built with TypeScript, offering features like dependency injection and modular architecture.
          </li>
        </ul>
        <h3>Comparison</h3>
        <p>
          Express.js is lightweight and unopinionated, whereas NestJS is feature-rich and enforces best practices.
        </p>
      </section>

      <section>
        <h2>Testing Frameworks</h2>
        <p>Testing is a crucial part of application development. Common testing frameworks include:</p>
        <ul>
          <li>
            <strong>Jest:</strong> A zero-config testing framework for JavaScript with built-in mocking and snapshot testing.
          </li>
          <li>
            <strong>Mocha:</strong> A flexible testing framework that supports asynchronous tests and integrates well with assertion libraries like Chai.
          </li>
        </ul>
        <h3>Example</h3>
        <p>Writing a simple test using Jest:</p>
        <pre>
          <code>{`
// test.js
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What are the main features of npm?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="Dependency management, versioning, and private registries."
              />
              Dependency management, versioning, and private registries.
            </label>
            <label>
              <input type="radio" name="q1" value="Only dependency management." />
              Only dependency management.
            </label>
          </div>
          <div>
            <p>2. How does Express.js differ from NestJS?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="Express.js is lightweight; NestJS is opinionated and uses TypeScript."
              />
              Express.js is lightweight; NestJS is opinionated and uses TypeScript.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="They are identical in features."
              />
              They are identical in features.
            </label>
          </div>
          <div>
            <p>3. Which of the following are testing frameworks in Node.js?</p>
            <label>
              <input type="radio" name="q3" value="Jest, Mocha." />
              Jest, Mocha.
            </label>
            <label>
              <input type="radio" name="q3" value="Angular, React." />
              Angular, React.
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
              href="https://docs.npmjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm Documentation
            </a>
          </li>
          <li>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express.js Documentation
            </a>
          </li>
          <li>
            <a
              href="https://nestjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NestJS Documentation
            </a>
          </li>
          <li>
            <a
              href="https://jestjs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jest Documentation
            </a>
          </li>
          <li>
            <a
              href="https://mochajs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mocha Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Ecosystem;
