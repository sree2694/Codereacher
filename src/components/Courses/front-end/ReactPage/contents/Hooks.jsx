import React, { useState, useEffect } from 'react';
import '../css/Hooks.css';

const Hooks = () => {
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizFeedback, setQuizFeedback] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    const handleQuizSubmit = () => {
        if (quizAnswer.trim().toLowerCase() === 'usestate') {
            setQuizFeedback('Correct! useState is used to manage state in functional components.');
        } else {
            setQuizFeedback('Incorrect. Hint: It starts with "use" and manages state.');
        }
    };

    return (
        <div className="hooks-container">
            <h2 className="hooks-title">Hooks</h2>
            <p className="hooks-description">
                Hooks are functions introduced in React 16.8 that allow developers to use state and lifecycle features in
                functional components. This makes functional components more powerful and versatile.
            </p>
            <p className="hooks-subtitle">Commonly used hooks:</p>
            <ul className="hooks-list">
                <li>
                    <strong>useState:</strong> Manages state in functional components.{' '}
                    <a href="https://reactjs.org/docs/hooks-state.html" target="_blank" rel="noopener noreferrer">
                        Learn more
                    </a>
                </li>
                <li>
                    <strong>useEffect:</strong> Handles side effects like API calls or subscriptions.{' '}
                    <a href="https://reactjs.org/docs/hooks-effect.html" target="_blank" rel="noopener noreferrer">
                        Learn more
                    </a>
                </li>
                <li>
                    <strong>useContext:</strong> Accesses context values without prop drilling.{' '}
                    <a href="https://reactjs.org/docs/hooks-reference.html#usecontext" target="_blank" rel="noopener noreferrer">
                        Learn more
                    </a>
                </li>
            </ul>
            <p className="hooks-note">
                Hooks simplify state and lifecycle management, making code cleaner and more maintainable. They have become
                a standard way to build React applications.
            </p>

            <h3 className="example-title">Example: Counter with useState and useEffect</h3>
            <p className="example-description">You clicked {count} times.</p>
            <button className="example-button" onClick={() => setCount(count + 1)}>Click me</button>

            <h3 className="quiz-title">Quiz</h3>
            <p className="quiz-question">Which hook is used to manage state in functional components?</p>
            <input
                className="quiz-input"
                type="text"
                value={quizAnswer}
                onChange={(e) => setQuizAnswer(e.target.value)}
                placeholder="Enter your answer"
            />
            <button className="quiz-button" onClick={handleQuizSubmit}>Submit</button>
            {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}

            <h3 className="references-title">Additional References</h3>
            <ul className="references-list">
                <li>
                    <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">
                        Official React Hooks Documentation
                    </a>
                </li>
                <li>
                    <a href="https://beta.reactjs.org/learn" target="_blank" rel="noopener noreferrer">
                        React Beta Docs: Learn React with Hooks
                    </a>
                </li>
                <li>
                    <a href="https://blog.logrocket.com/a-guide-to-react-hooks/" target="_blank" rel="noopener noreferrer">
                        A Guide to React Hooks (LogRocket Blog)
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Hooks;
