import React from "react";
import "../css/BasicComponents.css";

const BasicComponents = () => {
  return (
    <div className="spring-boot-basic-components-container">
      <h1>Basic Components of Spring Boot</h1>
      <div className="content">
        <h2>1. @SpringBootApplication Annotation</h2>
        <p>
          The <code>@SpringBootApplication</code> annotation is a convenience annotation that combines:
        </p>
        <ul>
          <li><code>@Configuration</code>: Indicates that the class has Spring configuration.</li>
          <li><code>@EnableAutoConfiguration</code>: Enables Spring Boot’s auto-configuration mechanism.</li>
          <li><code>@ComponentScan</code>: Scans for components and beans in the package.</li>
        </ul>
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

        <h2>2. Application Properties/YAML Configuration</h2>
        <p>
          Spring Boot uses a <code>application.properties</code> or <code>application.yml</code> file to configure application-specific settings like database connection, server port, and logging.
        </p>
        <p>Example (application.properties):</p>
        <pre>
          <code>
            {`
# Server configuration
server.port=8081

# Data source configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
            `}
          </code>
        </pre>
        <p>Example (application.yml):</p>
        <pre>
          <code>
            {`
server:
  port: 8081
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
            `}
          </code>
        </pre>

        <h2>3. Writing the First REST Controller</h2>
        <p>
          A REST controller in Spring Boot is created using the <code>@RestController</code> annotation, which combines <code>@Controller</code> and <code>@ResponseBody</code>.
        </p>
        <p>Example:</p>
        <pre>
          <code>
            {`
@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/greet")
    public String greet() {
        return "Hello, Spring Boot!";
    }
}
            `}
          </code>
        </pre>

        <h2>Quiz</h2>
        <p>Choose the correct options:</p>
        <form>
          <label>
            <input type="checkbox" name="q1" />
            <code>@SpringBootApplication</code> combines <code>@Configuration</code>, <code>@EnableAutoConfiguration</code>, and <code>@ComponentScan</code>.
          </label>
          <label>
            <input type="checkbox" name="q2" />
            YAML configuration is not supported in Spring Boot.
          </label>
          <label>
            <input type="checkbox" name="q3" />
            <code>@RestController</code> is used to create RESTful endpoints.
          </label>
          <label>
            <input type="checkbox" name="q4" />
            Application properties are configured in <code>application.properties</code> or <code>application.yml</code>.
          </label>
          <button type="submit">Submit</button>
        </form>

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/guides/gs/spring-boot/" target="_blank" rel="noopener noreferrer">
              Spring Boot Getting Started Guide
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Boot Tutorials
            </a>
          </li>
          <li>
            <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/" target="_blank" rel="noopener noreferrer">
              Spring Boot Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicComponents;
