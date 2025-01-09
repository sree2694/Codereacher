import React from "react";
import "../css/DataAccess.css";

const DataAccess = () => {
  return (
    <div className="data-access-container">
      <h1>Data Access with Spring Boot</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          Spring Boot simplifies data access by providing integration with Spring Data JPA and Hibernate. It offers robust features for database configuration, repository management, and custom query writing.
        </p>
      </section>

      <section>
        <h2>Spring Data JPA and Hibernate</h2>
        <p>
          Spring Data JPA is a library that makes it easy to interact with relational databases using JPA (Java Persistence API). Hibernate is the default JPA provider in Spring Boot.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    // Getters and Setters
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Configuring DataSource</h2>
        <p>
          Spring Boot automatically configures the <em>DataSource</em> based on the properties specified in <em>application.properties</em> or <em>application.yml</em>.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Writing Repositories</h2>
        <p>
          Use Spring Data's <em>JpaRepository</em> or <em>CrudRepository</em> to handle basic CRUD operations without writing boilerplate code.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Query Methods and Custom Queries</h2>
        <p>
          Query methods follow a naming convention to derive SQL queries automatically. Custom queries can be defined using the <em>@Query</em> annotation.
        </p>

        <h3>Example</h3>
        <pre>
          <code>{`
@Query("SELECT u FROM User u WHERE u.email = :email")
User findByEmail(@Param("email") String email);
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form>
          <div>
            <p>1. Which annotation is used to define a JPA entity?</p>
            <label>
              <input type="checkbox" name="q1" value="@Entity" /> @Entity
            </label>
            <label>
              <input type="checkbox" name="q1" value="@Table" /> @Table
            </label>
            <label>
              <input type="checkbox" name="q1" value="@Repository" /> @Repository
            </label>
          </div>
          <div>
            <p>2. Which interface provides CRUD operations in Spring Data JPA?</p>
            <label>
              <input type="checkbox" name="q2" value="JpaRepository" /> JpaRepository
            </label>
            <label>
              <input type="checkbox" name="q2" value="CrudRepository" /> CrudRepository
            </label>
            <label>
              <input type="checkbox" name="q2" value="QueryRepository" /> QueryRepository
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://spring.io/projects/spring-data-jpa" target="_blank" rel="noopener noreferrer">
              Spring Data JPA Documentation
            </a>
          </li>
          <li>
            <a href="https://hibernate.org/" target="_blank" rel="noopener noreferrer">
              Hibernate Official Site
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DataAccess;
