import React from 'react';
import { css } from '@emotion/react';
import '../css/CSSInJS.css';

const CSSInJS = () => {
    const buttonStyle = css`
        background-color: #3498db;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #2980b9;
        }
    `;

    const dynamicStyle = (primary) => css`
        background-color: ${primary ? '#1abc9c' : '#e74c3c'};
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: ${primary ? '#16a085' : '#c0392b'};
        }
    `;

    return (
        <div className="css-in-js-container">
            <h1>CSS-in-JS</h1>
            <p>
                CSS-in-JS is a modern approach to styling in web development where styles are written directly within JavaScript. This technique enables dynamic styling based on component state, props, or other JavaScript logic. Popular libraries like Emotion, Styled-Components, and JSS facilitate this approach.
            </p>

            <h2>Benefits of CSS-in-JS</h2>
            <ul>
                <li><strong>Dynamic Styles:</strong> Style components based on props or state.</li>
                <li><strong>Scoped Styles:</strong> Prevent global CSS conflicts by scoping styles to components.</li>
                <li><strong>Maintainable:</strong> Keep styles close to the components they affect.</li>
                <li><strong>JavaScript Power:</strong> Leverage variables, loops, and conditional logic in styles.</li>
            </ul>

            <h2>Examples</h2>

            <h3>Basic Example</h3>
            <button css={buttonStyle}>Click Me</button>

            <h3>Dynamic Example</h3>
            <button css={dynamicStyle(true)}>Primary Button</button>
            <button css={dynamicStyle(false)}>Secondary Button</button>

            <h2>When to Use CSS-in-JS</h2>
            <ul>
                <li>When building React or other JavaScript framework applications.</li>
                <li>For dynamic styling based on state or props.</li>
                <li>When creating highly modular and reusable components.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What are the advantages of CSS-in-JS compared to traditional CSS?</li>
                <li>Write a CSS-in-JS example that changes the style of a button based on a prop.</li>
                <li>Name three popular libraries used for CSS-in-JS.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://emotion.sh/docs/introduction" target="_blank" rel="noopener noreferrer">Emotion Documentation</a>
                </li>
                <li>
                    <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">Styled-Components</a>
                </li>
                <li>
                    <a href="https://cssinjs.org/" target="_blank" rel="noopener noreferrer">JSS: A library for CSS-in-JS</a>
                </li>
            </ul>
        </div>
    );
};

export default CSSInJS;
