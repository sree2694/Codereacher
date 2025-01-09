import React, { useState } from "react";
import "../css/Microservices.css";

const Microservices = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Eureka",
      q2: "Resilience4j",
      q3: "Spring Cloud Gateway",
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
    <div className="microservices-container">
      <h1>Microservices with Spring Boot</h1>

      <section>
        <h2>Introduction to Spring Cloud</h2>
        <p>
          Spring Cloud provides tools to build and manage microservices architectures. 
          It includes features like service discovery, centralized configuration, API gateways, and circuit breakers.
        </p>
      </section>

      <section>
        <h2>Service Discovery with Eureka</h2>
        <p>
          Eureka is a service registry that allows microservices to discover each other dynamically. 
          It eliminates the need for hardcoding service addresses.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
# application.properties for Eureka Server
server.port=8761
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false
          `}</code>
        </pre>
        <p>Enable the server with <code>@EnableEurekaServer</code>.</p>
      </section>

      <section>
        <h2>Circuit Breaker with Resilience4j</h2>
        <p>
          Resilience4j provides fault-tolerance patterns such as circuit breakers and rate limiters.
          It helps ensure the stability of microservices.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
@CircuitBreaker(name = "serviceA", fallbackMethod = "fallback")
public String callServiceA() {
    // logic
}

public String fallback(Exception e) {
    return "Fallback response";
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>API Gateway with Spring Cloud Gateway</h2>
        <p>
          Spring Cloud Gateway routes API requests to the appropriate microservices. 
          It provides cross-cutting concerns like authentication and rate limiting.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
spring:
  cloud:
    gateway:
      routes:
        - id: serviceA
          uri: http://localhost:8081
          predicates:
            - Path=/serviceA/**
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Config Server for Centralized Configuration</h2>
        <p>
          Spring Cloud Config Server provides centralized configuration management 
          for multiple microservices.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
# bootstrap.properties for Config Client
spring.cloud.config.uri=http://localhost:8888
spring.profiles.active=dev
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which component in Spring Cloud is used for service discovery?</p>
            <label>
              <input type="radio" name="q1" value="Eureka" /> Eureka
            </label>
            <label>
              <input type="radio" name="q1" value="Resilience4j" /> Resilience4j
            </label>
          </div>
          <div>
            <p>2. Which library provides circuit breaker functionality?</p>
            <label>
              <input type="radio" name="q2" value="Eureka" /> Eureka
            </label>
            <label>
              <input type="radio" name="q2" value="Resilience4j" /> Resilience4j
            </label>
          </div>
          <div>
            <p>3. Which tool is used for building API gateways in Spring Cloud?</p>
            <label>
              <input type="radio" name="q3" value="Spring Cloud Gateway" /> Spring Cloud Gateway
            </label>
            <label>
              <input type="radio" name="q3" value="Spring Cloud Config" /> Spring Cloud Config
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
            <a href="https://spring.io/projects/spring-cloud" target="_blank" rel="noopener noreferrer">
              Spring Cloud Official Documentation
            </a>
          </li>
          <li>
            <a href="https://resilience4j.readme.io/docs" target="_blank" rel="noopener noreferrer">
              Resilience4j Documentation
            </a>
          </li>
          <li>
            <a href="https://spring.io/projects/spring-cloud-gateway" target="_blank" rel="noopener noreferrer">
              Spring Cloud Gateway Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Microservices;
