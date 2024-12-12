import React from 'react';
import '../css/StateAndProps.css';

const StateAndProps = () => {
    return (
        <div className="state-and-props">
            <h2>Understanding State and Props in React</h2>

            <h3>1. What are Props?</h3>
            <p>
                Props (short for "properties") are read-only inputs passed from a parent component to a child component. They allow data to flow unidirectionally in React, ensuring the parent controls the child components' behavior and data.
            </p>
            <h4>Key Features of Props:</h4>
            <ul>
                <li>Props are immutable: They cannot be changed by the receiving component.</li>
                <li>Used for passing data, event handlers, or other values from parent to child.</li>
            </ul>
            <h4>Example:</h4>
            <pre>
{`function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="React" />`}
            </pre>

            <h3>2. What is State?</h3>
            <p>
                State is a built-in object in React components that allows them to store and manage their own data. Unlike props, state is mutable and can be updated within the component.
            </p>
            <h4>Key Features of State:</h4>
            <ul>
                <li>State is local to a component and cannot be accessed or modified by other components.</li>
                <li>Changes in state trigger re-rendering of the component.</li>
            </ul>
            <h4>Example:</h4>
            <pre>
{`function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
            </pre>

            <h3>3. Differences Between Props and State</h3>
            <table>
                <thead>
                <tr>
                    <th>Props</th>
                    <th>State</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Immutable</td>
                    <td>Mutable</td>
                </tr>
                <tr>
                    <td>Passed from parent to child</td>
                    <td>Managed within the component</td>
                </tr>
                <tr>
                    <td>Used for communication between components</td>
                    <td>Used for rendering dynamic data</td>
                </tr>
                </tbody>
            </table>

            <h3>4. Using Props and State Together</h3>
            <p>
                Props and state can be used together to create dynamic and interactive components. For example:
            </p>
            <pre>
{`function UserGreeting({ user }) {
    const [greetCount, setGreetCount] = React.useState(0);

    return (
        <div>
            <h1>Hello, {user}!</h1>
            <p>You have been greeted {greetCount} times.</p>
            <button onClick={() => setGreetCount(greetCount + 1)}>Greet Again</button>
        </div>
    );
}

// Usage
<UserGreeting user="John" />`}
            </pre>

            <h3>5. Best Practices</h3>
            <ul>
                <li>Keep state as simple as possible.</li>
                <li>Use props for passing static data and event handlers.</li>
                <li>Avoid overusing state to prevent unnecessary re-renders.</li>
            </ul>

            <h3>6. Quiz</h3>
            <p>
                Test your understanding of state and props:
            </p>
            <ol>
                <li>What is the primary difference between props and state?</li>
                <li>Can a child component modify props? Why or why not?</li>
                <li>How does state influence re-rendering in React?</li>
            </ol>
        </div>
    );
};

export default StateAndProps;