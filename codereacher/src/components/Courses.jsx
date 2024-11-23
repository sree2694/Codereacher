import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Courses = () => {
    const [expandedDropdown, setExpandedDropdown] = useState(null);
    const navigate = useNavigate();

    const categories = [
        {
            name: "Front-end",
            technologies: [
                { name: "React", path: "/react" },
                { name: "Angular", path: "/angular" },
                { name: "Vue.js", path: "/vuejs" },
                { name: "Bootstrap", path: "/bootstrap" },
                { name: "HTML/CSS", path: "/htmlcss" },
            ],

        },
        {
            name: "Back-end",
            technologies: [
                { name: "Node.js", path: "/nodejs" },
                { name: "Spring Boot", path: "/springboot" },
                { name: "Django", path: "/django" },
                { name: "Express.js", path: "/expressjs" },
                { name: "Ruby on Rails", path: "/rubyrails" },
            ],
        },
        {
            name: "Databases",
            technologies: [
                { name: "MySQL", path: "/mysql" },
                { name: "PostgreSQL", path: "/postgresql" },
                { name: "MongoDB", path: "/mongodb" },
                { name: "SQLite", path: "/sqlite" },
                { name: "Redis", path: "/redis" },
            ],
        }
        // Other categories...
    ];

    const toggleDropdown = (categoryName) => {
        setExpandedDropdown(expandedDropdown === categoryName ? null : categoryName);
    };

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    {categories.map((category, index) => (
                        <li className="navbar-item" key={index}>
                            <button
                                className="dropdown-toggle"
                                onClick={() => toggleDropdown(category.name)}
                            >
                                {category.name}
                            </button>
                            {expandedDropdown === category.name && (
                                <ul className="dropdown-menu">
                                    {category.technologies.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => navigate(tech.path)}
                                        >
                                            {tech.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Courses;
