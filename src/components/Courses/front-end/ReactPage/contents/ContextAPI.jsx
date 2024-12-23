import React, { createContext, useContext, useState } from 'react';
import '../css/ContextAPI.css';

// Create a Context
const ThemeContext = createContext();

const ContextAPI = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`context-container ${theme}`}>
                <h2 className="context-title">Context API</h2>
                <p className="context-description">
                    The Context API provides a way to pass data through the component tree without having to manually pass props
                    at every level. It is particularly useful for managing global states like themes or user authentication.
                </p>
                <p className="context-subtitle">Steps to use Context API:</p>
                <ol className="context-steps">
                    <li>Create a context using <code>React.createContext()</code>.</li>
                    <li>Provide context values using a <code>Provider</code>.</li>
                    <li>Consume context values using <code>useContext</code> or <code>Consumer</code>.</li>
                </ol>

                <ThemeConsumer />

                <h3 className="context-references">Additional References</h3>
                <ul className="context-links">
                    <li>
                        <a href="https://reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer">
                            Official React Context Documentation
                        </a>
                    </li>
                    <li>
                        <a href="https://beta.reactjs.org/learn/passing-data-deeply-with-context" target="_blank" rel="noopener noreferrer">
                            React Beta Docs: Passing Data with Context
                        </a>
                    </li>
                    <li>
                        <a href="https://www.freecodecamp.org/news/react-context-for-beginners/" target="_blank" rel="noopener noreferrer">
                            React Context for Beginners (FreeCodeCamp)
                        </a>
                    </li>
                </ul>
            </div>
        </ThemeContext.Provider>
    );
};

const ThemeConsumer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-display">
            <p>The current theme is <strong>{theme}</strong>.</p>
            <button className="theme-button" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ContextAPI;