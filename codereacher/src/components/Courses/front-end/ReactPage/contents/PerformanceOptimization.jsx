import React from 'react';

const PerformanceOptimization = () => (
    <div>
        <h2>Performance Optimization</h2>
        <p>
            React provides several techniques to optimize the performance of applications, ensuring faster rendering and
            reduced resource consumption.
        </p>
        <p>Key strategies:</p>
        <ul>
            <li><strong>React.memo:</strong> Prevents unnecessary re-renders by memoizing components.</li>
            <li><strong>useCallback:</strong> Memoizes callback functions to avoid re-creation on every render.</li>
            <li><strong>Lazy Loading:</strong> Dynamically loads components or data only when needed.</li>
            <li><strong>Code Splitting:</strong> Splits the code into smaller bundles to improve loading times.</li>
        </ul>
        <p>
            These techniques, combined with profiling tools like React DevTools, help developers identify bottlenecks
            and optimize applications effectively.
        </p>
    </div>
);

export default PerformanceOptimization;
