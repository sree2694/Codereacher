import React from 'react';

const StateAndProps = () => (
    <div>
        <h2>State & Props</h2>
        <p>
            <strong>State:</strong> State is a built-in object in React components that is used to hold data that may change
            over time. It is managed within the component.
        </p>
        <p>Example:</p>
        <pre>
{`const [count, setCount] = useState(0);`}
        </pre>
        <p>
            <strong>Props:</strong> Props (short for properties) are used to pass data from one component to another. They
            are read-only and immutable.
        </p>
        <p>Example:</p>
        <pre>
{`<ChildComponent message="Hello!" />`}
        </pre>
    </div>
);

export default StateAndProps;
