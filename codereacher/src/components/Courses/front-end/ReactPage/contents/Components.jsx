import React from 'react';
import '../css/Components.css';

const Components = () => {
    return (
        <div className="components">
            <h2>React Components</h2>
            <p>
                In React, components are the building blocks of the user interface. A component is a JavaScript function or class that optionally accepts inputs, known as "props," and returns a React element that describes how a section of the UI should appear.
            </p>

            <h3>1. Types of Components</h3>

            <h4>Functional Components</h4>
            <p>
                Functional components are simple JavaScript functions that return React elements. They are easier to write and are commonly used with React Hooks to manage state and lifecycle events.
            </p>
            <pre>
{`function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}`}
            </pre>

            <h4>Class Components</h4>
            <p>
                Class components are ES6 classes that extend the <code>React.Component</code> base class. They can hold and manage state using the <code>this.state</code> property.
            </p>
            <pre>
{`class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}`}
            </pre>

            <h3>2. Props</h3>
            <p>
                Props (short for "properties") are read-only inputs passed to components. They allow data to be passed from a parent component to a child component.
            </p>
            <pre>
{`function Welcome(props) {
    return <h1>Welcome, {props.user}!</h1>;
}`}
            </pre>

            <h3>3. State</h3>
            <p>
                State is a special object in React that allows components to hold and manage their internal data. Functional components use the <code>useState</code> hook, while class components use the <code>this.state</code> property.
            </p>
            <pre>
{`// Using useState in a Functional Component
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
            </pre>

            <h3>4. Lifecycle Methods</h3>
            <p>
                Lifecycle methods are special methods in class components that allow developers to hook into different phases of a component's lifecycle. Common lifecycle methods include:
            </p>
            <ul>
                <li><code>componentDidMount</code>: Invoked immediately after the component is added to the DOM.</li>
                <li><code>componentDidUpdate</code>: Called after a component updates.</li>
                <li><code>componentWillUnmount</code>: Invoked before the component is removed from the DOM.</li>
            </ul>

            <h3>5. Composition and Reusability</h3>
            <p>
                React encourages composing small, reusable components to build complex UIs. Components can be nested, and data can flow between them using props.
            </p>
            <pre>
{`function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}`}
            </pre>

            <h3>6. Controlled and Uncontrolled Components</h3>
            <p>
                Controlled components have their input values controlled by React state, while uncontrolled components manage their state internally using refs.
            </p>
            <h4>Controlled Component</h4>
            <pre>
{`function Form() {
    const [value, setValue] = React.useState('');

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}`}
            </pre>
            <h4>Uncontrolled Component</h4>
            <pre>
{`function Form() {
    const inputRef = React.useRef();

    return (
        <input type="text" ref={inputRef} />
    );
}`}
            </pre>

            <h3>7. Example Quiz</h3>
            <p>
                Test your knowledge of React components with this simple quiz:
            </p>
            <ol>
                <li>What is the difference between functional and class components?</li>
                <li>How do props differ from state in React?</li>
                <li>When should you use <code>componentDidMount</code>?</li>
            </ol>
        </div>
    );
};

export default Components;
