import React, { useState } from "react";
import "../css/Testing.css";

const Testing = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "JUnit",
      q2: "@SpringBootTest",
      q3: "Mockito",
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
    <div className="testing-container">
      <h1>Testing in Spring Boot</h1>

      <section>
        <h2>Unit Testing with JUnit</h2>
        <p>
          Spring Boot uses JUnit as the default framework for unit testing. Unit tests validate individual components like services, controllers, and repositories.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {
    @Test
    public void testAddition() {
        Calculator calculator = new Calculator();
        assertEquals(5, calculator.add(2, 3));
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Integration Testing using @SpringBootTest</h2>
        <p>
          Integration tests ensure that multiple layers of the application work together. Use <em>@SpringBootTest</em> to bootstrap the application context.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
@SpringBootTest
public class ApplicationTests {

    @Test
    void contextLoads() {
        // Verify that the application context loads successfully
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Mocking with Mockito</h2>
        <p>
          Mockito is used to mock dependencies for unit testing. This allows testing components in isolation without relying on real implementations.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void testFindUserById() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(new User("John")));
        User user = userService.findUserById(1L);
        assertEquals("John", user.getName());
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which framework is used for unit testing in Spring Boot?</p>
            <label>
              <input type="radio" name="q1" value="JUnit" /> JUnit
            </label>
            <label>
              <input type="radio" name="q1" value="Mockito" /> Mockito
            </label>
            <label>
              <input type="radio" name="q1" value="SpringBootTest" /> SpringBootTest
            </label>
          </div>
          <div>
            <p>2. Which annotation is used for integration testing in Spring Boot?</p>
            <label>
              <input type="radio" name="q2" value="@SpringBootTest" /> @SpringBootTest
            </label>
            <label>
              <input type="radio" name="q2" value="@Mock" /> @Mock
            </label>
            <label>
              <input type="radio" name="q2" value="@Test" /> @Test
            </label>
          </div>
          <div>
            <p>3. What library is commonly used for mocking in Spring Boot?</p>
            <label>
              <input type="radio" name="q3" value="Mockito" /> Mockito
            </label>
            <label>
              <input type="radio" name="q3" value="JUnit" /> JUnit
            </label>
            <label>
              <input type="radio" name="q3" value="Spring Data JPA" /> Spring Data JPA
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
            <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
              JUnit 5 Documentation
            </a>
          </li>
          <li>
            <a href="https://site.mockito.org/" target="_blank" rel="noopener noreferrer">
              Mockito Official Site
            </a>
          </li>
          <li>
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
              Spring Boot Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Testing;
