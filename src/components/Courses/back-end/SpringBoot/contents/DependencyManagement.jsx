import React from 'react';
import '../css/DependencyManagement.css';

const DependencyManagement = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Spring Boot: Dependency Management</h1>
        <p>
          Dependency management is a crucial aspect of any Spring Boot project. It simplifies adding and managing
          libraries required for your application.
        </p>

        <h2>Understanding `pom.xml` (Maven)</h2>
        <p>
          Maven uses a `pom.xml` file (Project Object Model) to manage dependencies. Spring Boot provides
          pre-defined "starters" that bundle commonly used libraries, eliminating the need to specify each dependency individually.
        </p>
        <pre className="code-block">
          {`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>`}
        </pre>
        <p>
          In the above example, the `spring-boot-starter-web` dependency includes libraries for building RESTful APIs and web applications.
        </p>

        <h2>Understanding `build.gradle` (Gradle)</h2>
        <p>
          Gradle uses a `build.gradle` file to manage dependencies. Dependencies are added inside the `dependencies` block.
        </p>
        <pre className="code-block">
          {`dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-web'
}`}
        </pre>
        <p>
          The `implementation` keyword specifies that the dependency is for the implementation phase of your project.
        </p>

        <h2>Adding Dependencies Using Spring Boot Starters</h2>
        <p>
          Spring Boot starters are a set of dependency descriptors that aggregate commonly used dependencies into a single library.
          For example:
        </p>
        <ul>
          <li>
            <strong>spring-boot-starter-data-jpa:</strong> Includes Hibernate and Spring Data JPA for database access.
          </li>
          <li>
            <strong>spring-boot-starter-security:</strong> Includes Spring Security for authentication and authorization.
          </li>
          <li>
            <strong>spring-boot-starter-thymeleaf:</strong> Includes the Thymeleaf template engine.
          </li>
        </ul>

        <h2>Quiz: Test Your Knowledge</h2>
        <div className="quiz">
          <h3>1. What is the purpose of `spring-boot-starter-web`?</h3>
          <ul>
            <li>A. To build RESTful APIs and web applications</li>
            <li>B. To manage database connections</li>
            <li>C. To secure applications</li>
            <li>D. To generate random data</li>
          </ul>

          <h3>Correct Answer:</h3>
          <p><strong>A. To build RESTful APIs and web applications</strong></p>
        </div>

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
              Spring Boot Official Documentation
            </a>
          </li>
          <li>
            <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
              Maven Official Documentation
            </a>
          </li>
          <li>
            <a href="https://gradle.org/" target="_blank" rel="noopener noreferrer">
              Gradle Official Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DependencyManagement;
