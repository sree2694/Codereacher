import React from 'react';
import '../css/KeyFeatures.css';

const KeyFeatures = () => (
    <div className="key-features">
        <h2>Key Features of React</h2>
        <p>
            React stands out as a powerful library for building modern web applications due to its unique features and
            concepts. Below, we explore the key features in depth.
        </p>

        <h3>1. Declarative Syntax</h3>
        <p>
            React uses a declarative programming model, meaning you describe *what* the UI should look like, and React
            takes care of rendering it efficiently. This simplifies code and makes it more predictable.
        </p>
        <p>Example:</p>
        <pre>
{`const App = () => <h1>Welcome to React!</h1>;`}
        </pre>
        <p>In the above example, React handles rendering <code>&lt;h1&gt;</code> to the DOM without imperative instructions.</p>

        <h3>2. Component-Based Architecture</h3>
        <p>
            React encourages a modular approach to development by breaking the UI into reusable, self-contained components.
            These components can be nested, reused, and managed independently.
        </p>
        <p>Example:</p>
        <pre>
{`const Header = () => <header>Welcome!</header>;
const Footer = () => <footer>Footer Content</footer>;

const App = () => (
    <div>
        <Header />
        <Footer />
    </div>
);`}
        </pre>
        <p>
            Think of components like LEGO blocks: you can assemble them to create larger, complex structures.
        </p>

        <h3>3. Virtual DOM</h3>
        <p>
            React uses a Virtual DOM to improve performance. The Virtual DOM is a lightweight copy of the real DOM, and
            React updates only the parts of the DOM that have changed, rather than re-rendering the entire page.
        </p>
        <p>Illustration (conceptual):</p>
        <ul>
            <li>Old DOM: Imagine repainting an entire house just to change the color of one room.</li>
            <li>Virtual DOM: With React, you only repaint the room that needs updating.</li>
        </ul>
        <p>This ensures optimal performance and reduces unnecessary DOM manipulation.</p>

        <h3>4. One-Way Data Binding</h3>
        <p>
            React follows a unidirectional data flow, where data flows from the parent component to the child component via
            props. This makes debugging and state management predictable and easy to trace.
        </p>
        <p>Example:</p>
        <pre>
{`const Parent = () => <Child message="Hello, Child!" />;
const Child = ({ message }) => <p>{message}</p>;`}
        </pre>
        <p>
            Here, the <code>message</code> flows from <code>Parent</code> to <code>Child</code>, ensuring clarity in data flow.
        </p>

        <h3>5. JSX (JavaScript XML)</h3>
        <p>
            JSX is a syntax extension that allows writing HTML-like syntax in JavaScript. This makes code more readable and
            intuitive for developers familiar with HTML.
        </p>
        <p>Example:</p>
        <pre>
{`const Greeting = () => <h1>Hello, World!</h1>;`}
        </pre>
        <p>
            JSX is transpiled to JavaScript behind the scenes, so you can write cleaner code without losing functionality.
        </p>

        <h3>6. Hooks</h3>
        <p>
            Introduced in React 16.8, Hooks allow developers to use state and other React features in functional components.
            Common hooks include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>.
        </p>
        <p>Example of <code>useState</code>:</p>
        <pre>
{`const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};`}
        </pre>

        <h3>7. React Ecosystem</h3>
        <p>
            React's flexibility is further enhanced by its ecosystem, including:
        </p>
        <ul>
            <li><strong>React Router:</strong> For managing navigation and routing.</li>
            <li><strong>Redux:</strong> For managing global state across components.</li>
            <li><strong>Next.js:</strong> For server-side rendering and static site generation.</li>
        </ul>

        <h3>8. Strong Community and Tooling</h3>
        <p>
            React boasts a large community, extensive documentation, and numerous third-party libraries, making it easy to
            find support and resources.
        </p>

        <h3>Quiz: Test Your Understanding</h3>
        <p><strong>Question:</strong> What is the main advantage of the Virtual DOM?</p>
        <ol>
            <li>A: It directly updates the real DOM.</li>
            <li>B: It ensures faster updates by comparing changes before updating the real DOM.</li>
            <li>C: It uses Shadow DOM for styling.</li>
            <li>D: It replaces the entire DOM on every update.</li>
        </ol>
        <p><em>Answer: B</em></p>

        <h3>Additional Resources</h3>
        <ul>
            <li>
                <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noopener noreferrer">
                    JSX Documentation
                </a>
            </li>
            <li>
                <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
                    Hooks Overview
                </a>
            </li>
            <li>
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                    Redux Official Site
                </a>
            </li>
        </ul>
    </div>
);

export default KeyFeatures;
