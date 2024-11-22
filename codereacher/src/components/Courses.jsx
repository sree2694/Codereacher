import React, { useState } from 'react';
import '../App.css';

const Courses = () => {
    // State to track which category is selected and expanded
    const [expandedCategory, setExpandedCategory] = useState(null);

    // Data for categories and technologies
    const categories = [
        {
            name: "Front-end",
            technologies: ["React", "Angular", "Vue.js", "Bootstrap", "HTML/CSS"],
        },
        {
            name: "Backend",
            technologies: ["Node.js", "Spring Boot", "Django", "Express.js", "Ruby on Rails"],
        },
        {
            name: "Databases",
            technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
        },
    ];

    // Toggle the selected category for expand/collapse
    const toggleCategory = (categoryName) => {
        if (expandedCategory === categoryName) {
            setExpandedCategory(null); // Collapse if the same category is clicked
        } else {
            setExpandedCategory(categoryName); // Expand the clicked category
        }
    };

    return (
        <section className="courses">
            {/* Navigation Bar */}
            <nav className="categories-nav">
                <ul>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={expandedCategory === category.name ? "active" : ""}
                            onClick={() => toggleCategory(category.name)}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Display Technologies */}
            {expandedCategory && (
                <div className="technologies">
                    <h3>{expandedCategory} Technologies</h3>
                    <ul>
                        {categories
                            .find((category) => category.name === expandedCategory)
                            .technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Courses;
