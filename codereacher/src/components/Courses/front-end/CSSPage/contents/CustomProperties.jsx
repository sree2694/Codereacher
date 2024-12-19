import React from 'react';
import '../css/CustomProperties.css';

const CustomProperties = () => {
    return (
        <div className="custom-properties-container">
            <h1>CSS Custom Properties</h1>
            <p>
                CSS Custom Properties, commonly known as CSS Variables, allow you to store reusable values in your stylesheets. They make it easier to maintain, theme, and dynamically update your website's styles.
            </p>

            <h2>What Are CSS Custom Properties?</h2>
            <p>
                CSS Custom Properties are user-defined properties prefixed with <code>--</code>. They enable developers to reuse values like colors, fonts, and spacing across stylesheets.
            </p>

            <h2>Why Use Custom Properties?</h2>
            <ul>
                <li>Centralize control over styles.</li>
                <li>Efficiently create and manage themes.</li>
                <li>Enable dynamic styles with media queries or JavaScript.</li>
            </ul>

            <h2>Defining and Using Custom Properties</h2>
            <div className="example-section">
                <h3>Example:</h3>
                <p>Define a custom property in the <code>:root</code> pseudo-class:</p>
                <pre>
                    <code>
                        {`:root {
    --main-bg-color: #3498db;
    --main-font-color: #ffffff;
    --padding: 10px;
}`}
                    </code>
                </pre>
                <p>Use it in your styles:</p>
                <pre>
                    <code>
                        {`body {
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    padding: var(--padding);
}`}
                    </code>
                </pre>
            </div>

            <h2>Dynamic Styling with JavaScript</h2>
            <p>
                You can update custom properties dynamically using JavaScript:
            </p>
            <div className="example-section">
                <pre>
                    <code>
                        {`document.documentElement.style.setProperty('--main-bg-color', '#e74c3c');`}
                    </code>
                </pre>
            </div>

            <h2>Custom Properties and Media Queries</h2>
            <p>
                Custom properties can adapt to different screen sizes using media queries:
            </p>
            <div className="example-section">
                <pre>
                    <code>
                        {`@media (max-width: 600px) {
    :root {
        --main-bg-color: #2ecc71;
    }
}`}
                    </code>
                </pre>
            </div>

            <h2>Quiz</h2>
            <p>Test your understanding:</p>
            <ul>
                <li>What is the syntax for defining a custom property?</li>
                <li>How do you access a custom property in CSS?</li>
                <li>Can custom properties be updated dynamically? If yes, how?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: Using CSS Custom Properties
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

export default CustomProperties;
