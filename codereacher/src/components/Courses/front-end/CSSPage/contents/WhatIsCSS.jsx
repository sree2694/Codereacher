import React from 'react';
import '../css/WhatIsCSS.css';

const WhatIsCSS = () => {
    return (
        <div className="what-is-css">
            <h1>Introduction to CSS</h1>

            <h2>What is CSS?</h2>
            <p>
                CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of a web page.
            </p>

            <h2>Why Use CSS?</h2>
            <ul>
                <li>Separation of content and design for cleaner code.</li>
                <li>Improves accessibility and user experience.</li>
                <li>Allows for responsive design and consistency across web pages.</li>
                <li>Reduces duplication and makes maintenance easier.</li>
            </ul>

            <h2>Basic Syntax</h2>
            <p>CSS consists of selectors and declarations. A selector targets an HTML element, and a declaration specifies the style properties.</p>
            <pre className="code-snippet">
{`h1 {
    color: blue;
    font-size: 24px;
}`}
            </pre>

            <h2>Types of CSS</h2>
            <ul>
                <li><strong>Inline CSS:</strong> Applied directly to an HTML element using the <code>style</code> attribute.</li>
                <li><strong>Internal CSS:</strong> Defined within a <code>&lt;style&gt;</code> tag in the HTML document's <code>&lt;head&gt;</code>.</li>
                <li><strong>External CSS:</strong> Stored in a separate file with a <code>.css</code> extension and linked to the HTML file.</li>
            </ul>

            <h2>Example</h2>
            <p>Here is an example of how CSS can style an HTML document:</p>
            <pre className="code-snippet">
{`/* styles.css */
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    text-align: center;
}`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What does CSS stand for?</li>
                <li>What are the three types of CSS?</li>
                <li>How can CSS improve a website's user experience?</li>
                <li>Write an example of an inline CSS declaration.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN Web Docs: CSS</a></li>
                <li><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">W3Schools: CSS</a></li>
                <li><a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer">CSS-Tricks</a></li>
            </ul>
        </div>
    );
};

export default WhatIsCSS;