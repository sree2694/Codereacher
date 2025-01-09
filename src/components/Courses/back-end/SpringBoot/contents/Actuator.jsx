import React, { useState } from "react";
import "../css/Actuator.css";

const Actuator = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "/health",
      q2: "Custom endpoints",
      q3: "Securing Actuator endpoints",
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
    <div className="actuator-container">
      <h1>Spring Boot Actuator</h1>

      <section>
        <h2>Understanding Actuator Endpoints</h2>
        <p>
          Spring Boot Actuator provides production-ready features for monitoring and managing applications. Commonly used endpoints include:
        </p>
        <ul>
          <li>
            <code>/health</code>: Displays application health information.
          </li>
          <li>
            <code>/metrics</code>: Displays application metrics.
          </li>
        </ul>
        <h3>Example</h3>
        <pre>
          <code>{`
# Enable all actuator endpoints
management.endpoints.web.exposure.include=*
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Customizing Actuator Endpoints</h2>
        <p>
          Spring Boot allows customization of Actuator endpoints by enabling or disabling specific ones. Developers can also create custom endpoints.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
// Custom Endpoint Example
@RestController
public class CustomEndpoint {

    @GetMapping("/custom-health")
    public String customHealth() {
        return "Custom Health Check Passed!";
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Securing Actuator Endpoints</h2>
        <p>
          Actuator endpoints can be secured by integrating Spring Security. This ensures only authorized users can access sensitive information.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
# Secure endpoints with Spring Security
management.endpoints.web.exposure.include=*
spring.security.user.name=admin
spring.security.user.password=admin
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which endpoint provides application health information?</p>
            <label>
              <input type="radio" name="q1" value="/health" /> /health
            </label>
            <label>
              <input type="radio" name="q1" value="/metrics" /> /metrics
            </label>
            <label>
              <input type="radio" name="q1" value="/info" /> /info
            </label>
          </div>
          <div>
            <p>2. What is possible with Spring Boot Actuator customization?</p>
            <label>
              <input type="radio" name="q2" value="Disable endpoints" /> Disable endpoints
            </label>
            <label>
              <input type="radio" name="q2" value="Custom endpoints" /> Custom endpoints
            </label>
            <label>
              <input type="radio" name="q2" value="Both" /> Both
            </label>
          </div>
          <div>
            <p>3. Why secure Actuator endpoints?</p>
            <label>
              <input type="radio" name="q3" value="Avoid unauthorized access" /> Avoid unauthorized access
            </label>
            <label>
              <input type="radio" name="q3" value="Securing Actuator endpoints" /> Securing Actuator endpoints
            </label>
            <label>
              <input type="radio" name="q3" value="It's optional" /> It's optional
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
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
              Spring Boot Documentation
            </a>
          </li>
          <li>
            <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html" target="_blank" rel="noopener noreferrer">
              Spring Boot Actuator Guide
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot-actuators" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Boot Actuators
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Actuator;
