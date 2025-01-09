import React, { useState } from "react";
import "../css/Annotations.css";

const Annotations = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setShowAnswer(true);
  };

  return (
    <div className="spring-boot-annotations-container">
      <h1>Spring Boot Annotations</h1>
      <div className="content">
        <h2>Core Annotations</h2>
        <ul>
          <li>
            <strong>@Component</strong>: Marks a class as a Spring-managed component, allowing it to be discovered during component scanning.
          </li>
          <li>
            <strong>@Service</strong>: A specialization of <em>@Component</em> used for business logic classes.
          </li>
          <li>
            <strong>@Repository</strong>: A specialization of <em>@Component</em> for DAO (Data Access Object) classes. It also provides exception translation for database access errors.
          </li>
          <li>
            <strong>@Controller</strong>: A specialization of <em>@Component</em> for web controllers.
          </li>
          <li>
            <strong>@RestController</strong>: Combines <em>@Controller</em> and <em>@ResponseBody</em>, simplifying RESTful web services development.
          </li>
        </ul>

        <h2>Dependency Injection with @Autowired</h2>
        <p>
          The <em>@Autowired</em> annotation is used to inject dependencies automatically. It can be applied to constructors, fields, or setter methods.
        </p>
        <pre>
          <code>
            {`@Service
public class MyService {
    @Autowired
    private MyRepository myRepository;

    public String getData() {
        return myRepository.fetchData();
    }
}`}
          </code>
        </pre>

        <h2>Stereotype Annotations and Their Roles</h2>
        <ul>
          <li>
            <strong>@Component</strong>: General-purpose annotation for all Spring components.
          </li>
          <li>
            <strong>@Controller</strong>: Handles HTTP requests.
          </li>
          <li>
            <strong>@Service</strong>: Handles service logic.
          </li>
          <li>
            <strong>@Repository</strong>: Deals with database-related operations.
          </li>
        </ul>

        <h2>Examples</h2>
        <pre>
          <code>
            {`@RestController
@RequestMapping("/api")
public class MyController {

    @Autowired
    private MyService myService;

    @GetMapping("/data")
    public ResponseEntity<String> fetchData() {
        return ResponseEntity.ok(myService.getData());
    }
}`}
          </code>
        </pre>

        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <label>
            <input type="checkbox" name="q1" />
            @Service is a specialization of @Component.
          </label>
          <label>
            <input type="checkbox" name="q2" />
            @RestController combines @Controller and @ResponseBody.
          </label>
          <label>
            <input type="checkbox" name="q3" />
            @Repository is used for web controllers.
          </label>
          <label>
            <input type="checkbox" name="q4" />
            @Autowired is used for dependency injection.
          </label>
          <button type="submit">Submit</button>
        </form>

        {showAnswer && (
          <div className="quiz-answers">
            <h3>Correct Answers:</h3>
            <p>1, 2, 4</p>
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
            <a href="https://www.baeldung.com/spring-annotations" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Annotations
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

export default Annotations;
