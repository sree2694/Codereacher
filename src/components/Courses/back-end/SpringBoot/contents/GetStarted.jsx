import React from "react";
import "../css/GetStarted.css";

const GetStarted = () => {
  return (
    <div className="spring-boot-get-started-container">
      <h1>Getting Started with Spring Boot</h1>
      <div className="content">
        <h2>Setting Up Spring Boot</h2>
        <h3>Installing Java and Maven/Gradle</h3>
        <p>
          To get started with Spring Boot, ensure you have the following installed:
        </p>
        <ul>
          <li><strong>Java:</strong> Install JDK 8 or later. Verify the installation by running <code>java -version</code> in the terminal.</li>
          <li><strong>Maven or Gradle:</strong> Install a build tool. Verify installation with <code>mvn -version</code> or <code>gradle -version</code>.</li>
        </ul>

        <h3>Creating a Spring Boot Application</h3>
        <h4>Using Spring Initializr</h4>
        <p>
          Spring Initializr is a web-based tool for generating Spring Boot applications. Steps:
        </p>
        <ol>
          <li>Visit <a href="https://start.spring.io/" target="_blank" rel="noreferrer">Spring Initializr</a>.</li>
          <li>Choose your project settings (e.g., Maven/Gradle, Java version, dependencies).</li>
          <li>Download the project zip file and import it into your IDE.</li>
        </ol>
        <p>You can also access Spring Initializr from IDEs like IntelliJ IDEA or Spring Tool Suite (STS).</p>

        <h4>Using Command-Line Interface (CLI)</h4>
        <p>
          Install Spring Boot CLI by following the official documentation. Create a project with:
        </p>
        <pre>
          <code>spring init --dependencies=web,data-jpa mysql-project</code>
        </pre>

        <h3>Project Structure</h3>
        <p>A typical Spring Boot project structure:</p>
        <pre>
          <code>
            {`
src/
  main/
    java/
      com.example.demo/
        DemoApplication.java
    resources/
      application.properties
  test/
    java/
      com.example.demo/
        DemoApplicationTests.java
            `}
          </code>
        </pre>

        <h2>Example: Setting Up a RESTful API</h2>
        <pre>
          <code>
            {`
@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
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
            <input type="checkbox" name="q1" value="1" />
            Spring Initializr is used for generating Spring Boot projects.
          </label>
          <label>
            <input type="checkbox" name="q2" value="2" />
            Maven or Gradle is not required for Spring Boot projects.
          </label>
          <label>
            <input type="checkbox" name="q3" value="3" />
            Spring Boot CLI allows creating projects via the command line.
          </label>
          <label>
            <input type="checkbox" name="q4" value="4" />
            The <code>application.properties</code> file is used for configuration.
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

export default GetStarted;
