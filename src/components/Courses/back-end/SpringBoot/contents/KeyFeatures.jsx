import React from "react";
import "../css/KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <div className="spring-boot-key-features-container">
      <h1>Key Features of Spring Boot</h1>
      <div className="content">
        <h2>1. Auto-configuration</h2>
        <p>
          Spring Boot eliminates the need for manual configuration by automatically configuring beans and settings based on dependencies in the classpath.  
        </p>
        <p>Example:</p>
        <pre>
          <code>
            {`
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=root
            `}
          </code>
        </pre>

        <h2>2. Embedded Servers</h2>
        <p>
          Spring Boot comes with embedded servers such as Tomcat, Jetty, and Undertow, allowing applications to run as standalone jars.
        </p>
        <p>Example:</p>
        <pre>
          <code>
            {`
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
            `}
          </code>
        </pre>

        <h2>3. Opinionated Configuration</h2>
        <p>
          Spring Boot provides sensible defaults for configurations, reducing the need for boilerplate code. Developers can override these defaults as needed.
        </p>

        <h2>4. Production-ready Features</h2>
        <p>
          Includes tools for metrics, health checks, and monitoring, which make it easy to manage applications in production.
        </p>
        <p>Example:</p>
        <pre>
          <code>
            {`
# Actuator endpoint in application.properties
management.endpoints.web.exposure.include=*
            `}
          </code>
        </pre>
        <p>Access metrics at <code>http://localhost:8080/actuator/metrics</code>.</p>

        <h2>Quiz</h2>
        <p>Choose the correct options:</p>
        <form>
          <label>
            <input type="checkbox" name="q1" />
            Spring Boot requires manual server setup for deployment.
          </label>
          <label>
            <input type="checkbox" name="q2" />
            Auto-configuration simplifies the setup process.
          </label>
          <label>
            <input type="checkbox" name="q3" />
            Spring Boot includes production-ready features like monitoring.
          </label>
          <label>
            <input type="checkbox" name="q4" />
            Embedded servers in Spring Boot include Tomcat and Jetty.
          </label>
          <button type="submit">Submit</button>
        </form>

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
              Spring Boot Official Documentation
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot" target="_blank" rel="noopener noreferrer">
              Spring Boot Tutorials on Baeldung
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/spring-boot" target="_blank" rel="noopener noreferrer">
              JavaTPoint: Spring Boot
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyFeatures;
