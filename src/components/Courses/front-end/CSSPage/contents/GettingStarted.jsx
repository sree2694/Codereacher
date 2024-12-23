import React from 'react';
import '../css/GettingStarted.css';

const GettingStarted = () => {
    return (
        <div className="getting-started-css">
            <h1>Getting Started with CSS</h1>

            <h2>What is CSS?</h2>
            <p>
                CSS, or Cascading Style Sheets, is a language used to describe the visual presentation of a web page. It controls how elements appear on the screen, in print, or on other media.
            </p>

            <h2>Setting Up CSS</h2>
            <h3>1. Inline CSS</h3>
            <p>Apply styles directly within an HTML element using the <code>style</code> attribute.</p>
            <pre className="code-snippet">
{`<p style="color: blue; font-size: 20px;">This is inline CSS</p>`}
            </pre>

            <h3>2. Internal CSS</h3>
            <p>Define styles in a <code>&lt;style&gt;</code> tag within the <code>&lt;head&gt;</code> of the HTML document.</p>
            <pre className="code-snippet">
{`<style>
    p {
        color: red;
        font-size: 18px;
    }
</style>`}
            </pre>

            <h3>3. External CSS</h3>
            <p>Link an external stylesheet to your HTML file using the <code>&lt;link&gt;</code> tag.</p>
            <pre className="code-snippet">
{`<link rel="stylesheet" href="styles.css">`}
            </pre>

            <h2>CSS Syntax</h2>
            <p>A CSS rule consists of a selector and a declaration block.</p>
            <pre className="code-snippet">
{`selector {
    property: value;
}`}
            </pre>

            <h2>Examples</h2>
            <p>Here is an example of a simple CSS rule:</p>
            <pre className="code-snippet">
{`h1 {
    color: green;
    text-align: center;
}`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What does CSS stand for?</li>
                <li>What are the three ways to apply CSS to a web page?</li>
                <li>Write an example of an external CSS link in an HTML file.</li>
                <li>Explain the difference between a class selector and an ID selector.</li>
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

export default GettingStarted;