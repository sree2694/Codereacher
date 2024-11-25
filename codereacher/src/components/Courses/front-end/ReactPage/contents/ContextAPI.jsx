import React from 'react';

const ContextAPI = () => (
    <div>
        <h2>Context API</h2>
        <p>
            The Context API provides a way to pass data through the component tree without having to manually pass props
            at every level. It is particularly useful for managing global states like themes or user authentication.
        </p>
        <p>Steps to use Context API:</p>
        <ol>
            <li>Create a context using <code>React.createContext()</code>.</li>
            <li>Provide context values using a <code>Provider</code>.</li>
            <li>Consume context values using <code>useContext</code> or <code>Consumer</code>.</li>
        </ol>
    </div>
);

export default ContextAPI;
