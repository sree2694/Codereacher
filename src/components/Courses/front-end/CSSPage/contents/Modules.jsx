import React from 'react';
import '../css/Modules.css';

const Modules = () => {
    return (
        <div className="modules-container">
            <h1>CSS Modules</h1>
            <p>
                CSS Modules are a modern way to encapsulate styles within components, ensuring better organization, reusability, and maintainability of CSS. By default, CSS Modules generate unique class names to avoid naming conflicts, allowing developers to focus on building clean, modular components.
            </p>

            <h2>What Are CSS Modules?</h2>
            <p>
                CSS Modules are CSS files in which class and animation names are scoped locally by default. They work seamlessly with JavaScript frameworks like React to ensure that styles are specific to the components they are defined in.
            </p>

            <h2>Key Benefits of CSS Modules</h2>
            <ul>
                <li><strong>Encapsulation:</strong> Styles are scoped to the component, preventing unintended overrides.</li>
                <li><strong>Reusability:</strong> Share and reuse components without worrying about style conflicts.</li>
                <li><strong>Maintainability:</strong> Keep your CSS clean, modular, and easier to debug.</li>
            </ul>

            <h2>How CSS Modules Work</h2>
            <ol>
                <li>Create a `.module.css` file for your component's styles.</li>
                <li>Import the CSS Module into your component file.</li>
                <li>Apply styles using the imported module object.</li>
            </ol>

            <h2>Example</h2>
            <div className="example-section">
                <h3>CSS Module File: <code>Button.module.css</code></h3>
                <pre>
                    <code>
                        {`.button {
    background-color: #3498db;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #2980b9;
}`}
                    </code>
                </pre>

                <h3>React Component File: <code>Button.jsx</code></h3>
                <pre>
                    <code>
                        {`import React from 'react';
import styles from './Button.module.css';

const Button = () => {
    return (
        <button className={styles.button}>
            Click Me
        </button>
    );
};

export default Button;`}
                    </code>
                </pre>
            </div>

            <h2>When to Use CSS Modules</h2>
            <ul>
                <li>For medium to large projects where style encapsulation is crucial.</li>
                <li>When building reusable components or design systems.</li>
                <li>To eliminate the risk of CSS naming conflicts in your application.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What are the key advantages of using CSS Modules?</li>
                <li>How do CSS Modules prevent naming conflicts?</li>
                <li>Write an example of a CSS Module and its corresponding React component.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">CSS Modules GitHub</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/css-modules-part-1-need/" target="_blank" rel="noopener noreferrer">CSS-Tricks: CSS Modules</a>
                </li>
                <li>
                    <a href="https://reactjs.org/docs/faq-styling.html#what-are-css-modules" target="_blank" rel="noopener noreferrer">React Documentation on CSS Modules</a>
                </li>
            </ul>
        </div>
    );
};

export default Modules;
