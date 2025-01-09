import React from "react";
import "../css/RESTfulAPIs.css";

const RESTfulAPIs = () => {
  return (
    <div className="restful-apis-container">
      <h1>Building RESTful APIs with Spring Boot</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          Spring Boot simplifies building RESTful APIs by providing annotations
          and features that minimize boilerplate code. This section covers CRUD
          operations, path variables, query parameters, and exception handling.
        </p>
      </section>

      <section>
        <h2>CRUD Operations</h2>
        <p>
          Spring Boot provides annotations to map HTTP methods to controller
          methods:
        </p>
        <ul>
          <li>
            <em>@GetMapping</em>: Retrieve data.
          </li>
          <li>
            <em>@PostMapping</em>: Create new data.
          </li>
          <li>
            <em>@PutMapping</em>: Update existing data.
          </li>
          <li>
            <em>@DeleteMapping</em>: Delete data.
          </li>
        </ul>

        <h3>Example</h3>
        <pre>
          <code>{`
@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "User deleted successfully!";
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Path Variables and Query Parameters</h2>
        <p>
          Use <em>@PathVariable</em> to extract variables from the URL path
          and <em>@RequestParam</em> for query parameters.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
@GetMapping("/users/{id}")
public User getUserById(@PathVariable Long id) {
    return userService.getUserById(id);
}

@GetMapping("/search")
public List<User> searchUsers(@RequestParam String name) {
    return userService.searchUsersByName(name);
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Exception Handling</h2>
        <p>
          Use <em>@ControllerAdvice</em> to handle exceptions globally and
          return meaningful responses to the client.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form>
          <div>
            <p>1. Which annotation is used to map GET requests?</p>
            <label>
              <input type="checkbox" name="q1" value="@PostMapping" />{" "}
              @PostMapping
            </label>
            <label>
              <input type="checkbox" name="q1" value="@GetMapping" />{" "}
              @GetMapping
            </label>
            <label>
              <input type="checkbox" name="q1" value="@PutMapping" />{" "}
              @PutMapping
            </label>
          </div>
          <div>
            <p>2. How do you extract a path variable?</p>
            <label>
              <input type="checkbox" name="q2" value="@PathVariable" />{" "}
              @PathVariable
            </label>
            <label>
              <input type="checkbox" name="q2" value="@RequestParam" />{" "}
              @RequestParam
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
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
            <a href="https://www.baeldung.com/spring-boot" target="_blank" rel="noopener noreferrer">
              Baeldung Spring Boot Tutorials
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RESTfulAPIs;
