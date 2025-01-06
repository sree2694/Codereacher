import React from "react";
import "../css/WhatIsSpringBoot.css";

const WhatIsSpringBoot = () => {
  return (
    <div className="spring-boot-container">
      <h1>What is Spring Boot?</h1>
      <div className="content">
        <h2>Overview of Spring Framework and Spring Boot</h2>
        <p>
          Spring Framework is a powerful and widely-used framework for building Java-based enterprise applications. It offers features like dependency injection, aspect-oriented programming, and transaction management.
        </p>
        <p>
          <strong>Spring Boot</strong> builds on top of the Spring Framework and provides a simplified way to create Spring-based applications. It focuses on reducing boilerplate code and configuration.
        </p>

        <h2>Purpose of Spring Boot</h2>
        <p>
          The primary goal of Spring Boot is to simplify the development of Spring applications by offering:  
          <ul>
            <li>Auto-configuration</li>
            <li>Embedded servers (e.g., Tomcat, Jetty)</li>
            <li>Pre-defined defaults</li>
            <li>Ready-to-use production-grade features</li>
          </ul>
        </p>

        <h2>Advantages of Spring Boot</h2>
        <ul>
          <li>
            <strong>Auto-configuration:</strong> Automatically configures Spring components based on the dependencies in the classpath.
          </li>
          <li>
            <strong>Embedded Server:</strong> Allows running applications without deploying to an external server.
          </li>
          <li>
            <strong>Opinionated Defaults:</strong> Provides sensible defaults to get started quickly.
          </li>
          <li>
            <strong>Microservices-ready:</strong> Simplifies creating RESTful APIs for microservices architectures.
          </li>
        </ul>

        <h2>Example: Hello World with Spring Boot</h2>
        <pre>
          <code>
            {`
@SpringBootApplication
public class HelloWorldApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }
}
            `}
          </code>
        </pre>

        <h2>Quiz</h2>
        <p>Choose the correct options:</p>
        <form>
          <label>
            <input type="checkbox" name="q1" value="1" />
            Spring Boot eliminates the need for XML configurations.
          </label>
          <label>
            <input type="checkbox" name="q2" value="2" />
            Spring Boot does not support embedded servers.
          </label>
          <label>
            <input type="checkbox" name="q3" value="3" />
            Auto-configuration is a feature of Spring Boot.
          </label>
          <label>
            <input type="checkbox" name="q4" value="4" />
            Spring Boot is only used for microservices.
          </label>
          <button type="submit">Submit</button>
        </form>

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer">
              Official Spring Boot Documentation
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot" target="_blank" rel="noreferrer">
              Spring Boot Tutorials on Baeldung
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/spring-boot" target="_blank" rel="noreferrer">
              JavaTPoint: Spring Boot
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhatIsSpringBoot;
