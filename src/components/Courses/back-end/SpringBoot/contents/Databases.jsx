import React, { useState } from "react";
import "../css/Databases.css";

const Databases = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Criteria API",
      q2: "Flyway",
      q3: "MongoDB",
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
    <div className="databases-container">
      <h1>Spring Boot with Databases</h1>

      <section>
        <h2>Advanced JPA Techniques</h2>
        <p>
          Spring Data JPA provides advanced features for database interaction, such as:
        </p>
        <ul>
          <li>
            <strong>Criteria API:</strong> A programmatic way to build dynamic queries.
          </li>
          <li>
            <strong>Named Queries:</strong> Predefined JPQL queries annotated in entities.
          </li>
        </ul>
        <h3>Example: Criteria API</h3>
        <pre>
          <code>{`
CriteriaBuilder cb = entityManager.getCriteriaBuilder();
CriteriaQuery<Employee> query = cb.createQuery(Employee.class);
Root<Employee> root = query.from(Employee.class);
query.select(root).where(cb.equal(root.get("department"), "HR"));
List<Employee> results = entityManager.createQuery(query).getResultList();
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Database Migrations</h2>
        <p>
          Database migrations help manage schema changes over time. Spring Boot integrates seamlessly with tools like Flyway and Liquibase.
        </p>
        <h3>Flyway Example</h3>
        <p>
          Flyway uses SQL scripts for migrations. Place migration scripts in the <code>db/migration</code> directory.
        </p>
        <pre>
          <code>{`
-- V1__init.sql
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    department VARCHAR(255)
);
          `}</code>
        </pre>
        <h3>Liquibase Example</h3>
        <p>
          Liquibase uses XML, YAML, or JSON for migrations.
        </p>
        <pre>
          <code>{`
<databaseChangeLog>
    <changeSet id="1" author="admin">
        <createTable tableName="employee">
            <column name="id" type="BIGINT" autoIncrement="true" primaryKey="true"/>
            <column name="name" type="VARCHAR(255)"/>
            <column name="department" type="VARCHAR(255)"/>
        </createTable>
    </changeSet>
</databaseChangeLog>
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Working with NoSQL Databases</h2>
        <p>
          Spring Boot supports NoSQL databases such as MongoDB, Redis, and Cassandra.
        </p>
        <h3>Example: MongoDB</h3>
        <p>
          MongoDB can be configured using <code>spring-boot-starter-data-mongodb</code>. Define a repository to interact with the database.
        </p>
        <pre>
          <code>{`
@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which API is used for building dynamic JPA queries?</p>
            <label>
              <input type="radio" name="q1" value="Criteria API" /> Criteria API
            </label>
            <label>
              <input type="radio" name="q1" value="JdbcTemplate" /> JdbcTemplate
            </label>
          </div>
          <div>
            <p>2. Which tool uses SQL scripts for database migrations?</p>
            <label>
              <input type="radio" name="q2" value="Flyway" /> Flyway
            </label>
            <label>
              <input type="radio" name="q2" value="Liquibase" /> Liquibase
            </label>
          </div>
          <div>
            <p>3. Which of these is a NoSQL database?</p>
            <label>
              <input type="radio" name="q3" value="MongoDB" /> MongoDB
            </label>
            <label>
              <input type="radio" name="q3" value="MySQL" /> MySQL
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
            <a href="https://spring.io/projects/spring-data-jpa" target="_blank" rel="noopener noreferrer">
              Spring Data JPA Official Documentation
            </a>
          </li>
          <li>
            <a href="https://flywaydb.org/documentation/" target="_blank" rel="noopener noreferrer">
              Flyway Documentation
            </a>
          </li>
          <li>
            <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
              MongoDB Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Databases;
