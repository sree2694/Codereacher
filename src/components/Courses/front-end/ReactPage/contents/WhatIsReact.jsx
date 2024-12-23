import React, { useState } from 'react';
import '../css/WhatIsReact.css';

const WhatIsReact = () => {
    const [quizAnswer, setQuizAnswer] = useState('');
    const [quizFeedback, setQuizFeedback] = useState('');

    const handleQuizSubmit = () => {
        if (quizAnswer.toLowerCase() === 'a') {
            setQuizFeedback('Correct! React uses a Virtual DOM to improve performance.');
        } else {
            setQuizFeedback('Incorrect. The correct answer is A: Virtual DOM.');
        }
    };

    return (
        <div className="what-is-react">
            <h2>What is React?</h2>
            <p>
                React is a JavaScript library for building user interfaces. It was developed by Facebook and has gained
                immense popularity due to its simplicity, scalability, and performance.
            </p>

            <h3>Key Benefits of React</h3>
            <ul>
                <li>Reusable components that simplify development.</li>
                <li>Virtual DOM for efficient UI updates.</li>
                <li>Unidirectional data flow for predictable state management.</li>
            </ul>

            <h3>Example: Hello World in React</h3>
            <p>
                Here's a simple example of creating a React component that renders "Hello, World!" to the browser:
            </p>
            <pre>
{`import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <h1>Hello, World!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));`}
            </pre>
            <p>Save this code in your project and run it to see the output!</p>

            <h3>Interactive Quiz</h3>
            <p>Test your understanding of React with this quick quiz:</p>
            <p><strong>Question:</strong> What mechanism does React use to update the UI efficiently?</p>
            <ol>
                <li>A: Virtual DOM</li>
                <li>B: Real DOM</li>
                <li>C: Shadow DOM</li>
                <li>D: Custom DOM</li>
            </ol>
            <div className="quiz-section">
                <input
                    type="text"
                    placeholder="Enter your answer (e.g., A)"
                    value={quizAnswer}
                    onChange={(e) => setQuizAnswer(e.target.value)}
                />
                <button onClick={handleQuizSubmit}>Submit</button>
            </div>
            {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}

            <h3>Additional Resources</h3>
            <ul>
                <li>
                    <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                        Official React Documentation
                    </a>
                </li>
                <li>
                    <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">
                        React Tutorial: Intro to React
                    </a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react" target="_blank" rel="noopener noreferrer">
                        FreeCodeCamp: React Course
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WhatIsReact;
