import React from 'react';
import '../css/Specificity.css';

const Specificity = () => {
    return (
        <div className="specificity-container">
            <h1>Understanding CSS Specificity</h1>
            <p>
                CSS specificity determines which rule is applied when multiple rules match the same element. Rules with higher specificity take precedence over those with lower specificity.
            </p>
            <h2>What is Specificity?</h2>
            <p>
                Specificity is calculated based on the types of selectors used in a rule. The more specific the selector, the higher its specificity value.
            </p>

            <h3>How Specificity is Calculated</h3>
            <ul>
                <li>Inline styles (e.g., style="...") have the highest specificity.</li>
                <li>ID selectors (e.g., #id) are more specific than class selectors.</li>
                <li>Class selectors (e.g., .class) are more specific than element selectors (e.g., div).</li>
                <li>Universal selectors (*), combinators (>, +, ~), and pseudo-elements have the lowest specificity.</li>
            </ul>

            <h2>Specificity Hierarchy</h2>
            <ul>
                <li>Inline styles: specificity = 1,0,0,0</li>
                <li>ID selectors: specificity = 0,1,0,0</li>
                <li>Class, attributes, and pseudo-class selectors: specificity = 0,0,1,0</li>
                <li>Element and pseudo-elements: specificity = 0,0,0,1</li>
            </ul>

            <h3>Examples</h3>
            <div className="example-section">
                <pre>
{`/* Example of specificity */
/* Specificity: 0,0,0,1 */
body {
    background-color: lightblue;
}

/* Specificity: 0,0,1,0 */
.class {
    background-color: lightgreen;
}

/* Specificity: 0,1,0,0 */
#id {
    background-color: lightcoral;
}

/* Specificity: 1,0,0,0 */
<div style="background-color: yellow;"></div>`}
                </pre>
            </div>

            <h2>Quiz</h2>
            <ol>
                <li>Which selector has higher specificity: <code>.class</code> or <code>#id</code>?</li>
                <li>What is the specificity value of <code>div.class#id</code>?</li>
                <li>True or False: Inline styles have the highest specificity.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: Specificity
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/specifics-on-css-specificity/" target="_blank" rel="noopener noreferrer">
                        CSS Tricks: Specificity
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Specificity;