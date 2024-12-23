import React from 'react';
import '../css/Redux.css';

const Redux = () => {
    return (
        <div className="redux">
            <h1>React Redux</h1>

            <h2>What is Redux?</h2>
            <p>
                Redux is a predictable state management library commonly used with React applications. It centralizes application state and logic, making it easier to manage and debug complex states across an application.
            </p>

            <h2>When to Use Redux?</h2>
            <ul>
                <li>When your application has a large amount of state that needs to be shared across multiple components.</li>
                <li>When you want to make state changes predictable and easier to debug.</li>
                <li>When your application has complex state interactions or asynchronous operations.</li>
            </ul>

            <h2>Core Concepts of Redux</h2>
            <ul>
                <li><b>Store:</b> A centralized object that holds the entire state of the application.</li>
                <li><b>Actions:</b> Plain JavaScript objects that describe what needs to change in the state.</li>
                <li><b>Reducers:</b> Pure functions that take the current state and an action as arguments and return a new state.</li>
                <li><b>Dispatch:</b> A method used to send actions to the reducer.</li>
                <li><b>Selectors:</b> Functions that retrieve specific parts of the state from the store.</li>
            </ul>

            <h2>Example: Basic Redux Implementation</h2>
            <p>
                Below is an example of how Redux can be used to manage state in a simple counter application:
            </p>
            <pre>
{`import { createStore } from 'redux';
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Store
const store = createStore(counterReducer);

// Counter Component
const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

// App Component
const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;
`}
            </pre>

            <h2>Advantages of Using Redux</h2>
            <ul>
                <li>Centralized state management for predictable state changes.</li>
                <li>Improved debugging with tools like Redux DevTools.</li>
                <li>Consistent logic and structure across large applications.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux Official Documentation</a></li>
                <li><a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">React Redux Official Documentation</a></li>
            </ul>
        </div>
    );
};

export default Redux;
