import React from 'react';
import '../css/ErrorBoundaries.css';

const ErrorBoundary = () => {
    return (
        <div className="error-boundary">
            <h1>Error Boundaries in React</h1>
            <p>
                Error Boundaries are special components in React designed to catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application.
            </p>

            <h2>When to Use Error Boundaries</h2>
            <p>Error Boundaries are useful for:</p>
            <ul>
                <li>Handling unexpected errors in production.</li>
                <li>Wrapping components that may throw errors, such as third-party libraries or dynamic content loaders.</li>
                <li>Providing a graceful fallback UI without disrupting the user experience.</li>
            </ul>

            <h2>How Error Boundaries Work</h2>
            <p>
                Error Boundaries rely on two lifecycle methods:
            </p>
            <ol>
                <li><strong>getDerivedStateFromError</strong>: Updates the state to display a fallback UI when an error is caught.</li>
                <li><strong>componentDidCatch</strong>: Logs the error details to an error reporting service or the console.</li>
            </ol>

            <h2>Example: Creating an Error Boundary</h2>
            <pre>
{`import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong. Please try again later.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;`}
            </pre>

            <h2>Usage</h2>
            <p>
                Wrap the components likely to throw errors with the <code>ErrorBoundary</code> component:
            </p>
            <pre>
{`import ErrorBoundary from './ErrorBoundary';
import SomeComponent from './SomeComponent';

function App() {
    return (
        <ErrorBoundary>
            <SomeComponent />
        </ErrorBoundary>
    );
}`}
            </pre>

            <h2>Limitations</h2>
            <p>
                Error Boundaries cannot catch errors:
            </p>
            <ul>
                <li>Inside event handlers.</li>
                <li>Asynchronous code (e.g., setTimeout or fetch).</li>
                <li>Server-side rendering (SSR).</li>
                <li>Errors thrown in Error Boundary itself.</li>
            </ul>

            <h2>Reference</h2>
            <ul>
                <li><a href="https://reactjs.org/docs/error-boundaries.html" target="_blank" rel="noopener noreferrer">React Official Documentation</a></li>
                <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Medium Articles on Error Boundaries</a></li>
            </ul>
        </div>
    );
};

export default ErrorBoundary;