import React from 'react';
import '../css/HOC.css';

const HOC = () => {
    return (
        <div className="hoc">
            <h2>Understanding Higher-Order Components (HOC) in React</h2>
            <p>
                A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API but are a pattern that emerges from React's compositional nature.
            </p>

            <h3>1. What is a Higher-Order Component?</h3>
            <p>
                A Higher-Order Component is a function that takes a component and returns a new component. HOCs are commonly used to:
            </p>
            <ul>
                <li>Inject additional functionality into components.</li>
                <li>Share logic across multiple components.</li>
                <li>Enhance or modify component behavior.</li>
            </ul>

            <h4>Syntax:</h4>
            <pre>
{`const EnhancedComponent = higherOrderComponent(WrappedComponent);`}
            </pre>

            <h3>2. Example: Adding Logging</h3>
            <p>
                Below is an example of an HOC that logs props passed to a wrapped component:
            </p>
            <pre>
{`function withLogging(WrappedComponent) {
    return function EnhancedComponent(props) {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
}

function Display(props) {
    return <div>{props.message}</div>;
}

const EnhancedDisplay = withLogging(Display);

// Usage:
<EnhancedDisplay message="Hello, World!" />;`}
            </pre>

            <h3>3. Use Cases</h3>
            <ul>
                <li>Authentication and Authorization Wrapping</li>
                <li>Theme and Style Injection</li>
                <li>Analytics and Event Tracking</li>
                <li>Code Splitting</li>
            </ul>

            <h3>4. Composing Multiple HOCs</h3>
            <p>
                HOCs can be composed to apply multiple layers of functionality. For example:
            </p>
            <pre>
{`const withTheme = (WrappedComponent) => (props) => (
    <div style={{ backgroundColor: 'lightgray' }}>
        <WrappedComponent {...props} />
    </div>
);

const withBorder = (WrappedComponent) => (props) => (
    <div style={{ border: '1px solid black' }}>
        <WrappedComponent {...props} />
    </div>
);
withTheme(withBorder(Component));
`}
            </pre>

            <h3>5. Considerations</h3>
            <p>
                While HOCs are powerful, they come with trade-offs:
            </p>
            <ul>
                <li>Can lead to "wrapper hell" if overused.</li>
                <li>May obscure the component tree, making debugging harder.</li>
                <li>Alternatives like Render Props or Hooks can achieve similar results in a more declarative way.</li>
            </ul>

            <h3>6. Reference</h3>
            <p>
                For further reading:
                <ul>
                    <li><a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">React Official Documentation</a></li>
                    <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium Articles on HOCs</a></li>
                </ul>
            </p>

            <h3>Quiz</h3>
            <p>Test your understanding:</p>
            <ol>
                <li>What is the primary purpose of an HOC?</li>
                <li>How do HOCs differ from Render Props?</li>
                <li>What are potential downsides of using HOCs?</li>
            </ol>
        </div>
    );
};

export default HOC;