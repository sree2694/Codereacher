// eslint-disable-next-line no-unused-vars
import React, { useState, useMemo } from 'react';
import '../css/Memoization.css';

const Memoization = () => {
    return (
        <div className="memoization">
            <h1>React Memoization</h1>

            <h2>What is Memoization?</h2>
            <p>
                Memoization is an optimization technique used in React to improve performance by caching the results of expensive function calls and preventing unnecessary re-computations. React provides built-in tools like <code>useMemo</code> and <code>React.memo</code> for implementing memoization effectively.
            </p>

            <h2>When to Use Memoization?</h2>
            <ul>
                <li>When a component has expensive calculations that do not need to be re-executed every render.</li>
                <li>When props passed to child components rarely change.</li>
                <li>When optimizing large lists or datasets that require rendering or processing.</li>
            </ul>

            <h2>Example: Using <code>useMemo</code></h2>
            <p>
                Below is an example where memoization is applied to prevent recalculating a costly computation unless its dependencies change:
            </p>
            <pre>
{`import React, { useState, useMemo } from 'react';

function ExpensiveComputation(num) {
    console.log("Calculating...");
    return num * 2; // Simulating an expensive calculation
}

const MemoizationExample = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(5);

    const computedValue = useMemo(() => ExpensiveComputation(value), [value]);

    return (
        <div>
            <h2>Memoization Example</h2>
            <p>Computed Value: {computedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setValue(value + 1)}>Increment Value</button>
        </div>
    );
};

export default MemoizationExample;
`}
            </pre>

            <h2>Example: Using <code>React.memo</code></h2>
            <p>
                <code>React.memo</code> is a higher-order component used to wrap functional components. It prevents re-rendering if the props remain unchanged:
            </p>
            <pre>
{`import React from 'react';

const ChildComponent = React.memo(({ name }) => {
    console.log("Rendering ChildComponent");
    return <div>Hello, {name}!</div>;
});

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ChildComponent name="React" />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default ParentComponent;
`}
            </pre>

            <h2>Key Takeaways</h2>
            <ul>
                <li>Use <code>useMemo</code> for memoizing computations within functional components.</li>
                <li>Use <code>React.memo</code> to prevent re-rendering of functional components.</li>
                <li>Avoid overusing memoization as it can increase memory usage and complexity.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://reactjs.org/docs/hooks-reference.html#usememo" target="_blank" rel="noopener noreferrer">React Official Documentation: useMemo</a></li>
                <li><a href="https://reactjs.org/docs/react-api.html#reactmemo" target="_blank" rel="noopener noreferrer">React Official Documentation: React.memo</a></li>
            </ul>
        </div>
    );
};

export default Memoization;