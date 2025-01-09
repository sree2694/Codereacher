import React, { useState } from "react";
import "../css/Configuration.css";

const Configuration = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setShowAnswer(true);
  };

  return (
    <div className="spring-boot-configuration-container">
      <h1>Spring Boot Configuration</h1>
      <div className="content">
        <h2>Using application.properties and application.yml</h2>
        <p>
          Spring Boot uses <em>application.properties</em> or <em>application.yml</em> files for configuration. These files allow you to set application-level properties in a structured manner.
        </p>
        <pre>
          <code>
            {`# application.properties example
server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root`}
          </code>
        </pre>
        <pre>
          <code>
            {`# application.yml example
server:
  port: 8081
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root`}
          </code>
        </pre>

        <h2>Profiles</h2>
        <p>
          Spring Boot allows profile-specific configurations using the <em>@Profile</em> annotation and <em>spring.profiles.active</em> property.
        </p>
        <pre>
          <code>
            {`# application-dev.properties
server.port=8082

# application-prod.properties
server.port=8083

# Activating a profile in application.properties
spring.profiles.active=dev`}
          </code>
        </pre>
        <p>
          Example of <em>@Profile</em> annotation:
        </p>
        <pre>
          <code>
            {`@Component
@Profile("dev")
public class DevConfiguration {
    public DevConfiguration() {
        System.out.println("Dev profile active");
    }
}`}
          </code>
        </pre>

        <h2>Externalized Configuration and Property Binding</h2>
        <p>
          Use the <em>@Value</em> annotation to inject property values:
        </p>
        <pre>
          <code>
            {`@RestController
public class ConfigController {

    @Value("\${server.port}")
    private String serverPort;

    @GetMapping("/port")
    public String getServerPort() {
        return "Server is running on port: " + serverPort;
    }
}`}
          </code>
        </pre>
        <p>
          Use the <em>@ConfigurationProperties</em> annotation for binding a group of properties into a Java object:
        </p>
        <pre>
          <code>
            {`@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private String version;

    // Getters and Setters
}`}
          </code>
        </pre>

        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <label>
            <input type="checkbox" name="q1" />
            <em>@Profile</em> is used to enable profile-specific configurations.
          </label>
          <label>
            <input type="checkbox" name="q2" />
            <em>@ConfigurationProperties</em> is used for binding multiple properties.
          </label>
          <label>
            <input type="checkbox" name="q3" />
            Properties in <em>application.yml</em> must be indented properly.
          </label>
          <label>
            <input type="checkbox" name="q4" />
            Spring Boot requires a <em>spring.profiles.active</em> property to run.
          </label>
          <button type="submit">Submit</button>
        </form>

        {showAnswer && (
          <div className="quiz-answers">
            <h3>Correct Answers:</h3>
            <p>1, 2, 3</p>
          </div>
        )}

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/" target="_blank" rel="noopener noreferrer">
              Spring Boot Documentation
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot-configuration" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Boot Configuration
            </a>
          </li>
          <li>
            <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer">
              Spring Guides
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Configuration;
