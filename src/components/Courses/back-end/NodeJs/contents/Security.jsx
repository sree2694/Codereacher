import React, { useState } from "react";
import "../css/Security.css";

const Security = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "SQL injection involves injecting malicious SQL into queries.",
      q2: "Cross-site scripting (XSS) allows attackers to inject malicious scripts into web pages.",
      q3: "JWT is commonly used for secure user authentication.",
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
    <div className="security-container">
      <h1>Security</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Security is a critical concern in web applications. Node.js applications are particularly vulnerable to threats like SQL injection, cross-site scripting (XSS), and other exploits if not properly secured. This guide covers preventive measures, input sanitization, and robust authentication and authorization strategies.
        </p>
      </section>

      <section>
        <h2>Key Concepts</h2>

        <h3>Preventing Common Vulnerabilities</h3>
        <ul>
          <li><strong>SQL Injection:</strong> Use parameterized queries to avoid malicious SQL code injection.</li>
          <pre>
            <code>{`
const userId = req.body.userId;
const query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId], (err, results) => {
  if (err) throw err;
  res.json(results);
});
            `}</code>
          </pre>
          <li>
            <strong>Cross-Site Scripting (XSS):</strong> Sanitize user input and encode output to prevent malicious scripts.
          </li>
          <pre>
            <code>{`
const sanitizeHtml = require("sanitize-html");
const safeInput = sanitizeHtml(req.body.input);
res.send(safeInput);
            `}</code>
          </pre>
        </ul>

        <h3>Sanitizing User Input</h3>
        <p>
          Always sanitize and validate user input to ensure it meets expected formats. Libraries like <code>validator</code> and <code>sanitize-html</code> can help.
        </p>

        <h3>Authentication and Authorization</h3>
        <ul>
          <li>
            <strong>Authentication:</strong> Verify the identity of users using techniques like JSON Web Tokens (JWT).
          </li>
          <pre>
            <code>{`
// Generating a JWT
const jwt = require("jsonwebtoken");
const token = jwt.sign({ userId: user.id }, "secretKey", { expiresIn: "1h" });
res.json({ token });
            `}</code>
          </pre>
          <li>
            <strong>Authorization:</strong> Enforce role-based access control (RBAC) to manage user permissions.
          </li>
          <pre>
            <code>{`
function authorize(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}
app.get("/admin", authorize("admin"), (req, res) => {
  res.send("Welcome, Admin!");
});
            `}</code>
          </pre>
        </ul>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. What is SQL injection?</p>
            <label>
              <input
                type="radio"
                name="q1"
                value="SQL injection involves injecting malicious SQL into queries."
              />
              SQL injection involves injecting malicious SQL into queries.
            </label>
            <label>
              <input
                type="radio"
                name="q1"
                value="SQL injection is a type of DoS attack."
              />
              SQL injection is a type of DoS attack.
            </label>
          </div>

          <div>
            <p>2. What is cross-site scripting (XSS)?</p>
            <label>
              <input
                type="radio"
                name="q2"
                value="Cross-site scripting (XSS) allows attackers to inject malicious scripts into web pages."
              />
              Cross-site scripting (XSS) allows attackers to inject malicious scripts into web pages.
            </label>
            <label>
              <input
                type="radio"
                name="q2"
                value="XSS is a method to encrypt user data."
              />
              XSS is a method to encrypt user data.
            </label>
          </div>

          <div>
            <p>3. Which method is commonly used for secure authentication in Node.js?</p>
            <label>
              <input
                type="radio"
                name="q3"
                value="JWT is commonly used for secure user authentication."
              />
              JWT is commonly used for secure user authentication.
            </label>
            <label>
              <input
                type="radio"
                name="q3"
                value="Cookies are used exclusively for API security."
              />
              Cookies are used exclusively for API security.
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
              href="https://owasp.org/www-project-top-ten/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP Top Ten Security Risks
            </a>
          </li>
          <li>
            <a
              href="https://jwt.io/introduction"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSON Web Token Introduction
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/sanitize-html"
              target="_blank"
              rel="noopener noreferrer"
            >
              sanitize-html NPM Package
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Security;
