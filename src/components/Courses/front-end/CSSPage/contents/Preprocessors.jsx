import React from 'react';
import '../css/Preprocessors.css';

const Preprocessors = () => {
    return (
        <div className="preprocessors-container">
            <h1>CSS Preprocessors</h1>
            <p>
                CSS Preprocessors like Sass and Less allow developers to write more efficient and maintainable CSS code. They provide advanced features such as variables, mixins, and functions, enabling you to streamline your workflow and create modular, reusable styles.
            </p>

            <h2>What Are CSS Preprocessors?</h2>
            <p>
                CSS Preprocessors are tools that extend the functionality of standard CSS by introducing programming-like features. The preprocessed code is compiled into standard CSS, which browsers can interpret.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Variables:</strong> Store reusable values like colors, font sizes, and spacing.</li>
                <li><strong>Mixins:</strong> Create reusable blocks of styles.</li>
                <li><strong>Nesting:</strong> Write nested rules for better readability.</li>
                <li><strong>Functions:</strong> Perform operations and return values for dynamic styling.</li>
                <li><strong>Partials:</strong> Divide your CSS into smaller, modular files.</li>
            </ul>

            <h2>Examples</h2>

            <h3>Sass Example</h3>
            <div className="example-section">
                <h4>SCSS Syntax:</h4>
                <pre>
                    <code>
                        {`$primary-color: #3498db;
$padding: 10px;

.button {
    background-color: $primary-color;
    padding: $padding;
    border-radius: 5px;

    &:hover {
        background-color: darken($primary-color, 10%);
    }
}`}
                    </code>
                </pre>
                <h4>Compiled CSS:</h4>
                <pre>
                    <code>
                        {`.button {
    background-color: #3498db;
    padding: 10px;
    border-radius: 5px;
}

.button:hover {
    background-color: #2980b9;
}`}
                    </code>
                </pre>
            </div>

            <h3>Less Example</h3>
            <div className="example-section">
                <h4>Less Syntax:</h4>
                <pre>
                    <code>
                        {`@primary-color: #2ecc71;
@padding: 15px;

.card {
    background-color: @primary-color;
    padding: @padding;

    &:hover {
        background-color: lighten(@primary-color, 10%);
    }
}`}
                    </code>
                </pre>
                <h4>Compiled CSS:</h4>
                <pre>
                    <code>
                        {`.card {
    background-color: #2ecc71;
    padding: 15px;
}

.card:hover {
    background-color: #58d68d;
}`}
                    </code>
                </pre>
            </div>

            <h2>When to Use CSS Preprocessors</h2>
            <ul>
                <li>When working on large projects where code maintainability is crucial.</li>
                <li>To use advanced features like variables and mixins for dynamic and reusable styling.</li>
                <li>For modularizing CSS into smaller, manageable pieces.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What are the advantages of using CSS Preprocessors?</li>
                <li>How do variables in Sass or Less improve code efficiency?</li>
                <li>Write a mixin in Sass for creating buttons with dynamic padding and colors.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://sass-lang.com/guide" target="_blank" rel="noopener noreferrer">Sass Official Guide</a>
                </li>
                <li>
                    <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">Less Official Documentation</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/sass-vs-less/" target="_blank" rel="noopener noreferrer">CSS-Tricks: Sass vs. Less</a>
                </li>
            </ul>
        </div>
    );
};

export default Preprocessors;
