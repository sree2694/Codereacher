import React from 'react';
import '../css/Webworkers.css';

const WebWorkers = () => {
    return (
        <div className="web-workers">
            <h1>React Web Workers</h1>

            <h2>What are Web Workers?</h2>
            <p>
                Web Workers are a feature of the Web API that allow you to run JavaScript code in the background, separate from the main execution thread of your application. This is particularly useful for performing heavy computations or tasks without blocking the user interface.
            </p>

            <h2>When to Use Web Workers?</h2>
            <ul>
                <li>To perform computationally intensive tasks, such as data processing or encryption.</li>
                <li>To handle large datasets or perform complex calculations without affecting UI responsiveness.</li>
                <li>For tasks like image or video processing, sorting, and AI model execution.</li>
            </ul>

            <h2>Example: Using a Web Worker in React</h2>
            <p>Below is an example of how to use a Web Worker in a React application:</p>
            <pre>
{`// worker.js
// This file contains the code executed by the Web Worker.
self.onmessage = (e) => {
    const { number } = e.data;
    const result = fibonacci(number);
    postMessage(result);
};

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// React Component
import React, { useState } from 'react';

const WebWorkerExample = () => {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        worker.postMessage({ number: input });
        worker.onmessage = (e) => {
            setResult(e.data);
            worker.terminate();
        };
    };

    return (
        <div>
            <h2>Fibonacci Calculator</h2>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
};

export default WebWorkerExample;
`}
            </pre>

            <h2>Advantages of Using Web Workers</h2>
            <ul>
                <li>Improves application performance by offloading heavy tasks to a separate thread.</li>
                <li>Enhances user experience by keeping the UI responsive.</li>
                <li>Allows efficient use of system resources for multi-threaded tasks.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" target="_blank" rel="noopener noreferrer">MDN Web Workers API</a></li>
                <li><a href="https://react.dev/docs/concurrent-mode-intro.html" target="_blank" rel="noopener noreferrer">React Concurrent Mode</a></li>
            </ul>
        </div>
    );
};

export default WebWorkers;
