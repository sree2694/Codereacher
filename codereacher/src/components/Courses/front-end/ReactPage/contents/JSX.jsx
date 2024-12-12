import React from 'react';
import '../css/JSX.css';

const JSX = () => {
    return (
        <div className="jsx">
            <h2>Understanding JSX in React</h2>
            <p>
                JSX stands for JavaScript XML. It is a syntax extension for JavaScript and is used with React to describe what the UI should look like. JSX allows developers to write HTML-like syntax directly in JavaScript files, which makes it easier to visualize the structure of a component.
            </p>

            <h3>1. Why Use JSX?</h3>
            <ul>
                <li>JSX makes code more readable and maintainable by combining UI logic and structure.</li>
                <li>It provides better error messages and warnings.</li>
                <li>JSX allows embedding expressions and dynamic values using curly braces (<code>{'{}'}</code>).</li>
            </ul>

            <h3>2. Syntax Rules of JSX</h3>
            <ul>
                <li>
                    JSX elements must have a single parent element. For example, wrap multiple elements inside a <code>&lt;div&gt;</code> or React fragment <code>&lt;&gt;&lt;/&gt;</code>.
                </li>
                <li>
                    Use <code>className</code> instead of <code>class</code> for CSS classes, as <code>class</code> is a reserved keyword in JavaScript.
                </li>
                <li>
                    Close all elements, even self-closing tags like <code>&lt;img /&gt;</code> or <code>&lt;input /&gt;</code>.
                </li>
            </ul>

            <h3>3. Embedding JavaScript in JSX</h3>
            <p>
                You can embed JavaScript expressions in JSX using curly braces. For example:
            </p>
            <pre>
{`const name = 'React';
return <h1>Hello, {name}!</h1>;`}
            </pre>

            <h3>4. JSX as an Expression</h3>
            <p>
                JSX expressions can be assigned to variables, passed as arguments to functions, or returned from functions. For example:
            </p>
            <pre>
{`function greet(user) {
    return <h1>Welcome, {user}!</h1>;
}`}
            </pre>

            <h3>5. Conditional Rendering in JSX</h3>
            <p>
                You can use conditional statements inside JSX to render elements dynamically:
            </p>
            <pre>
{`const isLoggedIn = true;
return (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    </div>
);`}
            </pre>

            <h3>6. JSX with Arrays</h3>
            <p>
                Arrays can be used to render a list of elements in JSX:
            </p>
            <pre>
{`const items = ['Apple', 'Banana', 'Cherry'];
return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);`}
            </pre>

            <h3>7. Quiz</h3>
            <p>
                Test your understanding of JSX:
            </p>
            <ol>
                <li>What is the main purpose of JSX in React?</li>
                <li>Why do we use <code>className</code> instead of <code>class</code> in JSX?</li>
                <li>How can you render a dynamic list of items using JSX?</li>
            </ol>
        </div>
    );
};

export default JSX;
