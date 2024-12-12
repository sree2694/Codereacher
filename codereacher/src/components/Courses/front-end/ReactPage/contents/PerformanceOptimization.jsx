import React from 'react';
import '../css/PerformanceOptimization.css';

const PerformanceOptimization = () => {
    return (
        <div className="performance-optimization">
            <h2>React Performance Optimization Techniques</h2>
            <p>
                As React applications grow in size and complexity, ensuring optimal performance becomes critical. Below are some of the most effective strategies to optimize the performance of React apps.
            </p>

            <h3>1. Use React.memo</h3>
            <p>
                React.memo is a higher-order component that prevents unnecessary re-renders of functional components by memoizing their output.
            </p>
            <h4>Example:</h4>
            <pre>
{`const ChildComponent = React.memo(({ data }) => {
    console.log("Rendering ChildComponent");
    return <div>{data}</div>;
});`}
            </pre>

            <h3>2. Optimize State Management</h3>
            <p>
                Manage state efficiently by:
                <ul>
                    <li>Keeping state local where possible.</li>
                    <li>Using libraries like Redux or Zustand for complex state management.</li>
                </ul>
            </p>

            <h3>3. Avoid Inline Functions in JSX</h3>
            <p>
                Inline functions in JSX can lead to re-creation of new function instances on every render. Instead, define functions outside JSX or use <code>useCallback</code>.
            </p>
            <h4>Example:</h4>
            <pre>
{`const handleClick = useCallback(() => {
    console.log("Button clicked");
}, []);

return <button onClick={handleClick}>Click Me</button>;`}
            </pre>

            <h3>4. Use Code-Splitting</h3>
            <p>
                Code-splitting helps reduce the initial load time by splitting the application into smaller bundles and loading them on demand using React.lazy and Suspense.
            </p>
            <h4>Example:</h4>
            <pre>
{`const LazyComponent = React.lazy(() => import("./LazyComponent"));

return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
    </React.Suspense>
);`}
            </pre>

            <h3>5. Avoid Over-Rendering</h3>
            <p>
                Prevent components from rendering unnecessarily by:
                <ul>
                    <li>Using React.PureComponent or React.memo.</li>
                    <li>Implementing <code>shouldComponentUpdate</code> in class components.</li>
                </ul>
            </p>

            <h3>6. Virtualize Long Lists</h3>
            <p>
                For rendering long lists, use libraries like <code>react-window</code> or <code>react-virtualized</code> to load only the visible items in the viewport.
            </p>

            <h4>Example:</h4>
            <pre>
{`import { FixedSizeList as List } from "react-window";

const MyList = () => (
    <List
        height={500}
        itemCount={1000}
        itemSize={35}
        width={300}
    >
        {({ index, style }) => (
            <div style={style}>Item {index}</div>
        )}
    </List>
);`}
            </pre>

            <h3>7. Optimize Images</h3>
            <p>
                Optimize image performance by:
                <ul>
                    <li>Using modern image formats like WebP.</li>
                    <li>Lazy-loading images with libraries like <code>react-lazyload</code>.</li>
                    <li>Serving responsive images with the <code>&lt;picture&gt;</code> element.</li>
                </ul>
            </p>

            <h3>8. Profiling and Measuring Performance</h3>
            <p>
                Use React's built-in Profiler to identify performance bottlenecks and improve render times.
            </p>
            <h4>Example:</h4>
            <pre>
{`import { Profiler } from 'react';

<Profiler id="App" onRender={(id, phase, actualDuration) => {
    console.log({ id, phase, actualDuration });
}}>
    <App />
</Profiler>;`}
            </pre>

            <h3>Quiz</h3>
            <p>Test your knowledge of performance optimization:</p>
            <ol>
                <li>What is the purpose of React.memo?</li>
                <li>How does code-splitting improve performance?</li>
                <li>Why should you avoid inline functions in JSX?</li>
                <li>When would you use virtualization for lists?</li>
            </ol>
        </div>
    );
};

export default PerformanceOptimization;