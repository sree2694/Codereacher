// Core Concepts of Bootstrap: Utilities.jsx
import React, { useState } from 'react';
import '../css/Utilities.css';

const Utilities = () => {
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleQuizChange = (question, answer) => {
        setQuizAnswers({ ...quizAnswers, [question]: answer });
    };

    const submitQuiz = () => {
        setShowResults(true);
    };

    return (
        <div className="utilities">
            <h1>Bootstrap Utilities</h1>

            <h2>1. Spacing Utilities</h2>
            <p>Bootstrap provides utilities to control margin and padding with simple classes. These include:</p>
            <ul>
                <li><code>.m-*</code>: Margin for all sides</li>
                <li><code>.mt-*</code>: Margin-top</li>
                <li><code>.p-*</code>: Padding for all sides</li>
                <li><code>.pt-*</code>: Padding-top</li>
            </ul>
            <pre>
                <code>
{`<div class="p-3 m-2 bg-primary text-white">Spacing Example</div>`}
                </code>
            </pre>

            <h2>2. Display Utilities</h2>
            <p>Control the display property of elements using classes like:</p>
            <ul>
                <li><code>.d-block</code>: Displays as block</li>
                <li><code>.d-none</code>: Hides the element</li>
                <li><code>.d-flex</code>: Applies Flexbox display</li>
            </ul>
            <pre>
                <code>
{`<div class="d-flex justify-content-center">Flexbox Example</div>`}
                </code>
            </pre>

            <h2>3. Colors and Background Utilities</h2>
            <p>Change the text color or background using utilities like:</p>
            <ul>
                <li><code>.text-primary</code>, <code>.text-success</code>, etc.</li>
                <li><code>.bg-primary</code>, <code>.bg-warning</code>, etc.</li>
            </ul>
            <pre>
                <code>
{`<div class="bg-success text-white p-3">Background Example</div>`}
                </code>
            </pre>

            <h2>4. Borders and Shadows</h2>
            <p>Bootstrap allows easy control of borders and shadows with utilities like:</p>
            <ul>
                <li><code>.border</code>: Adds a border</li>
                <li><code>.border-0</code>: Removes a border</li>
                <li><code>.shadow</code>, <code>.shadow-sm</code>: Adds box shadows</li>
            </ul>
            <pre>
                <code>
{`<div class="border border-danger shadow p-3">Border and Shadow Example</div>`}
                </code>
            </pre>

            <h2>5. Flexbox and Alignment Utilities</h2>
            <p>Align and distribute items using Flexbox utilities:</p>
            <ul>
                <li><code>.justify-content-*</code>: Horizontal alignment</li>
                <li><code>.align-items-*</code>: Vertical alignment</li>
            </ul>
            <pre>
                <code>
{`<div class="d-flex align-items-center">Flex Alignment Example</div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <form onSubmit={(e) => { e.preventDefault(); submitQuiz(); }}>
                <div>
                    <p>1. Which class adds a top margin?</p>
                    <label>
                        <input type="checkbox" onChange={() => handleQuizChange('q1', 'mt-*')} /> mt-*
                    </label>
                    <label>
                        <input type="checkbox" onChange={() => handleQuizChange('q1', 'p-*')} /> p-*
                    </label>
                </div>
                <div>
                    <p>2. How do you apply Flexbox?</p>
                    <label>
                        <input type="checkbox" onChange={() => handleQuizChange('q2', 'd-flex')} /> d-flex
                    </label>
                    <label>
                        <input type="checkbox" onChange={() => handleQuizChange('q2', 'd-block')} /> d-block
                    </label>
                </div>
                <button type="submit">Submit Quiz</button>
            </form>

            {showResults && (
                <div className="quiz-results">
                    <h3>Quiz Results</h3>
                    <p>1. Correct Answer: mt-*</p>
                    <p>2. Correct Answer: d-flex</p>
                </div>
            )}

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.3/utilities/spacing/" target="_blank" rel="noopener noreferrer">Bootstrap Spacing Utilities</a></li>
                <li><a href="https://getbootstrap.com/docs/5.3/utilities/display/" target="_blank" rel="noopener noreferrer">Bootstrap Display Utilities</a></li>
                <li><a href="https://getbootstrap.com/docs/5.3/utilities/flex/" target="_blank" rel="noopener noreferrer">Bootstrap Flex Utilities</a></li>
            </ul>
        </div>
    );
};

export default Utilities;
