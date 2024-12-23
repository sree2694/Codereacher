import React from 'react';
import '../App.css';

const Features = () => {
    const features = [
        { title: "Front-End Technologies", description: "Front-end technologies focus on creating the visual and interactive aspects of websites and web applications. A combination of HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js allows developers to create engaging, responsive, and efficient user interfaces." },
        { title: "Backend-Technologies", description: "Backend technologies are essential for the functionality of a web application. They manage data storage, handle business logic, and ensure secure and scalable communication between the server and the client. The choice of backend technology largely depends on the application requirements, developer expertise, and performance needs. Popular stacks include the MERN (MongoDB, Express, React, Node.js), LAMP (Linux, Apache, MySQL, PHP), and Java-based stacks (Spring Boot, MySQL, Java)." },
        { title: "Databases", description: "The choice of database depends on the needs of the application. Relational databases are ideal for applications that require complex queries, strong data integrity, and structured data, while NoSQL databases are more suited for flexible, high-performance applications that deal with large volumes of unstructured or semi-structured data. Cloud-based databases provide scalability, ease of management, and availability, making them a popular choice for modern applications." },
    ];

    return (
        <section className="features">
            {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Features;
