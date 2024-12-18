import React from 'react';
import '../css/Selectors.css';

const Selectors = () => {
    return (
        <div className="selectors-css">
            <h1>CSS Selectors</h1>

            <h2>1. Simple Selectors</h2>
            <p>Simple selectors are used to select elements based on their name, id, or class.</p>
            <ul>
                <li><strong>Type Selector:</strong> Selects all elements of a given type.</li>
                <pre className="code-snippet">{`p {
    color: blue;
}`}</pre>

                <li><strong>Class Selector:</strong> Selects all elements with a specific class.</li>
                <pre className="code-snippet">{`.example {
    background-color: yellow;
}`}</pre>

                <li><strong>ID Selector:</strong> Selects a single element with a specific id.</li>
                <pre className="code-snippet">{`#unique {
    font-size: 20px;
}`}</pre>
            </ul>

            <h2>2. Combinator Selectors</h2>
            <p>Combinator selectors are used to define the relationship between two selectors.</p>
            <ul>
                <li><strong>Descendant Selector:</strong> Selects elements nested within another element.</li>
                <pre className="code-snippet">{`div p {
    color: green;
}`}</pre>

                <li><strong>Child Selector:</strong> Selects direct children of an element.</li>
                <pre className="code-snippet">{`div > p {
    font-weight: bold;
}`}</pre>

                <li><strong>Adjacent Sibling Selector:</strong> Selects the next sibling element.</li>
                <pre className="code-snippet">{`h1 + p {
    font-style: italic;
}`}</pre>

                <li><strong>General Sibling Selector:</strong> Selects all siblings of an element.</li>
                <pre className="code-snippet">{`h1 ~ p {
    text-decoration: underline;
}`}</pre>
            </ul>

            <h2>3. Pseudo-classes</h2>
            <p>Pseudo-classes are used to define the special state of an element.</p>
            <pre className="code-snippet">{`a:hover {
    color: red;
}`}</pre>

            <h2>4. Pseudo-elements</h2>
            <p>Pseudo-elements allow you to style specific parts of an element.</p>
            <pre className="code-snippet">{`p::first-line {
    font-weight: bold;
}`}</pre>

            <h2>5. Attribute Selectors</h2>
            <p>Attribute selectors allow you to select elements based on their attributes or attribute values.</p>
            <pre className="code-snippet">{`input[type="text"] {
    border: 1px solid black;
}`}</pre>

            <h2>Examples</h2>
            <p>Try combining these selectors in your projects to better target specific elements.</p>

            <h2>Quiz</h2>
            <ol>
                <li>What is the difference between a class and an ID selector?</li>
                <li>Write an example of a child selector.</li>
                <li>What is a pseudo-class? Give an example.</li>
                <li>How would you style an input element of type "checkbox"?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank" rel="noopener noreferrer">MDN: CSS Selectors</a></li>
                <li><a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank" rel="noopener noreferrer">W3Schools: CSS Selectors</a></li>
                <li><a href="https://css-tricks.com/how-css-selectors-work/" target="_blank" rel="noopener noreferrer">CSS-Tricks: How Selectors Work</a></li>
            </ul>
        </div>
    );
};

export default Selectors;
