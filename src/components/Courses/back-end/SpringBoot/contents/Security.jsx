import React, { useState } from "react";
import "../css/Security.css";

const Security = () => {
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = {
      q1: "Spring Security",
      q2: "Authentication and Authorization",
      q3: "JWT",
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
    <div className="security-container">
      <h1>Security in Spring Boot</h1>

      <section>
        <h2>Securing APIs with Spring Security</h2>
        <p>
          Spring Boot provides built-in support for securing applications using Spring Security. It includes features for:
        </p>
        <ul>
          <li>Configuring authentication and authorization</li>
          <li>Securing RESTful APIs</li>
          <li>Integrating with third-party security providers</li>
        </ul>
        <h3>Example</h3>
        <pre>
          <code>{`
// Basic Security Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic();
    }
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Authentication and Authorization</h2>
        <p>
          Authentication ensures the user is who they claim to be, while authorization ensures the user has permission to access a resource. Spring Security supports both through role-based configurations.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
@Bean
public UserDetailsService userDetailsService() {
    UserDetails user = User.builder()
        .username("user")
        .password("{noop}password")
        .roles("USER")
        .build();
    return new InMemoryUserDetailsManager(user);
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Role-Based Access Control (RBAC)</h2>
        <p>
          RBAC in Spring Boot is implemented using roles and authorities. Each user is assigned a role, and permissions are granted based on those roles.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
http.authorizeRequests()
    .antMatchers("/admin/**").hasRole("ADMIN")
    .antMatchers("/user/**").hasAnyRole("USER", "ADMIN");
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Integrating JWT for API Security</h2>
        <p>
          JSON Web Tokens (JWT) are used for stateless authentication in Spring Boot applications. A JWT is issued to the user upon login and is used to validate their identity in subsequent requests.
        </p>
        <h3>Example</h3>
        <pre>
          <code>{`
// Generate JWT
public String generateToken(String username) {
    return Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS))
        .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
        .compact();
}

// Validate JWT
public String getUsernameFromToken(String token) {
    return Jwts.parser()
        .setSigningKey(JWT_SECRET)
        .parseClaimsJws(token)
        .getBody()
        .getSubject();
}
          `}</code>
        </pre>
      </section>

      <section>
        <h2>Quiz</h2>
        <form onSubmit={handleQuizSubmit}>
          <div>
            <p>1. Which framework is used for securing Spring Boot applications?</p>
            <label>
              <input type="radio" name="q1" value="Spring Security" /> Spring Security
            </label>
            <label>
              <input type="radio" name="q1" value="Spring Boot Starter" /> Spring Boot Starter
            </label>
          </div>
          <div>
            <p>2. What are the key components of securing APIs?</p>
            <label>
              <input type="radio" name="q2" value="Authentication and Authorization" /> Authentication and Authorization
            </label>
            <label>
              <input type="radio" name="q2" value="Session Management" /> Session Management
            </label>
          </div>
          <div>
            <p>3. Which token format is commonly used for API security?</p>
            <label>
              <input type="radio" name="q3" value="JWT" /> JWT
            </label>
            <label>
              <input type="radio" name="q3" value="OAuth" /> OAuth
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
            <a href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">
              Spring Security Official Documentation
            </a>
          </li>
          <li>
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
              JSON Web Tokens
            </a>
          </li>
          <li>
            <a href="https://www.baeldung.com/spring-security" target="_blank" rel="noopener noreferrer">
              Baeldung: Spring Security Guide
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Security;
