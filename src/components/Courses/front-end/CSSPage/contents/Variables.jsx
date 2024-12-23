import React from 'react';
import '../css/Variables.css';

const Variables = () => {
    return (
        <div className="variables-container">
            <h1>CSS Variables</h1>
            <p>
                CSS Variables, also known as custom properties, allow developers to define reusable values for styles. They bring flexibility, maintainability, and consistency to CSS.
            </p>

            <h2>What Are CSS Variables?</h2>
            <p>
                CSS Variables are user-defined properties that begin with <code>--</code>. They can store values like colors, sizes, and fonts, which can be reused throughout your stylesheet.
            </p>

            <h2>Why Use CSS Variables?</h2>
            <ul>
                <li>Centralized control over styles.</li>
                <li>Improved maintainability and readability.</li>
                <li>Easy theming and dynamic styling.</li>
            </ul>

            <h2>Defining and Using CSS Variables</h2>
            <div className="example-section">
                <h3>Example:</h3>
                <p>Define a CSS variable:</p>
                <pre>
                    <code>
                        {`:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size: 16px;
}`}
                    </code>
                </pre>
                <p>Use it in your styles:</p>
                <pre>
                    <code>
                        {`body {
    font-size: var(--font-size);
    color: var(--primary-color);
}`}
                    </code>
                </pre>
            </div>

            <h2>Advanced Use Cases</h2>
            <h3>Dynamic Theme Switching</h3>
            <p>
                CSS Variables can be updated dynamically using JavaScript to create themes.
            </p>
            <div className="example-section">
                <h3>Example:</h3>
                <pre>
                    <code>
                        {`document.documentElement.style.setProperty('--primary-color', '#e74c3c');`}
                    </code>
                </pre>
            </div>

            <h2>Quiz</h2>
            <p>Test your understanding:</p>
            <ul>
                <li>What is the syntax for defining a CSS Variable?</li>
                <li>How do you use a CSS Variable in a style rule?</li>
                <li>Can CSS Variables be dynamically updated? If yes, how?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: Using CSS Variables
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/a-complete-guide-to-custom-properties/" target="_blank" rel="noopener noreferrer">
                        CSS-Tricks: A Complete Guide to Custom Properties
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Variables;
