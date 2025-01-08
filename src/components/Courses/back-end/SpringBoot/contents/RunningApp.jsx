import React from "react";
import "../css/RunningApp.css";

const RunningApp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Correct Answers: 1, 3, 4");
  };

  return (
    <div className="spring-boot-running-app-container">
      <h1>Running a Spring Boot Application</h1>
      <div className="content">
        <h2>1. Running Directly from the IDE</h2>
        <p>
          Spring Boot applications can be run directly from an IDE like IntelliJ IDEA or Spring Tool Suite (STS).
          <ol>
            <li>Open the project in the IDE.</li>
            <li>Locate the main application class annotated with <code>@SpringBootApplication</code>.</li>
            <li>Right-click and select <strong>Run</strong>.</li>
          </ol>
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

        <h2>2. Running via <code>java -jar</code></h2>
        <p>
          Spring Boot applications can be packaged into a JAR file and run from the command line:
        </p>
        <ol>
          <li>Package the application using Maven or Gradle (e.g., <code>mvn package</code>).</li>
          <li>Navigate to the target folder and run: <code>java -jar myapp.jar</code>.</li>
        </ol>
        <p>Example:</p>
        <pre>
          <code>
            {`
# Package the application
mvn package

# Run the application
java -jar target/myapp.jar
            `}
          </code>
        </pre>

        <h2>3. Using Embedded Servers</h2>
        <p>
          Spring Boot comes with embedded servers like Tomcat, Jetty, or Undertow, eliminating the need for external server setup. The server starts automatically when the application runs.
        </p>
        <p>Example (application.properties):</p>
        <pre>
          <code>
            {`
# Setting server port
server.port=8081

# Default server is Tomcat, but you can switch
spring.web.server=jetty
            `}
          </code>
        </pre>

        <h2>Quiz</h2>
        <p>Select the correct statements:</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="checkbox" name="q1" />
            Spring Boot applications can be run directly from the IDE.
          </label>
          <label>
            <input type="checkbox" name="q2" />
            Embedded servers are not supported in Spring Boot.
          </label>
          <label>
            <input type="checkbox" name="q3" />
            The command <code>java -jar</code> can be used to run a packaged Spring Boot application.
          </label>
          <label>
            <input type="checkbox" name="q4" />
            Spring Boot uses embedded servers like Tomcat, Jetty, or Undertow.
          </label>
          <button type="submit">Submit</button>
        </form>

        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer">
              Spring Guides
            </a>
          </li>
          <li>
            <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/" target="_blank" rel="noopener noreferrer">
              Spring Boot Documentation
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-boot" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Boot Tutorials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RunningApp;
