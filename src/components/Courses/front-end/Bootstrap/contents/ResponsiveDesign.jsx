// ResponsiveDesign.jsx
import React, { useState } from 'react';
import '../css/ResponsiveDesign.css';

const ResponsiveDesign = () => {
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleQuizChange = (question, option) => {
        setQuizAnswers({ ...quizAnswers, [question]: option });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const correctAnswers = {
        question1: 'b',
        question2: 'c',
    };

    return (
        <div className="responsive-design">
            <h1>Responsive Design in Bootstrap</h1>
            <h2>Overview</h2>
            <p>
                Responsive design ensures that web pages look good on all devices, regardless of screen size. Bootstrap makes responsive design easy with its built-in utilities and grid system.
            </p>

            <h2>Media Queries in Bootstrap</h2>
            <p>
                Media queries are used to apply CSS rules based on the device's characteristics, such as width or height. Bootstrap provides predefined breakpoints to simplify the use of media queries.
            </p>

            <h3>Breakpoints in Bootstrap</h3>
            <ul>
                <li><strong>xs:</strong> Extra small devices (less than 576px)</li>
                <li><strong>sm:</strong> Small devices (≥576px)</li>
                <li><strong>md:</strong> Medium devices (≥768px)</li>
                <li><strong>lg:</strong> Large devices (≥992px)</li>
                <li><strong>xl:</strong> Extra large devices (≥1200px)</li>
                <li><strong>xxl:</strong> Extra extra large devices (≥1400px)</li>
            </ul>

            <h2>Examples</h2>
            <h3>Using Media Queries</h3>
            <pre>
                <code>
{`@media (min-width: 576px) {
    .example-class {
        font-size: 1.2rem;
    }
}

@media (min-width: 768px) {
    .example-class {
        font-size: 1.5rem;
    }
}`}
                </code>
            </pre>

            <h3>Using Bootstrap Classes</h3>
            <pre>
                <code>
{`<div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">Responsive Column</div>
        <div className="col-sm-6 col-md-8 col-lg-9">Responsive Column</div>
    </div>
</div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div>
                    <h4>1. What is the smallest breakpoint in Bootstrap?</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="question1"
                            value="a"
                            onChange={() => handleQuizChange('question1', 'a')}
                        />
                        sm
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="question1"
                            value="b"
                            onChange={() => handleQuizChange('question1', 'b')}
                        />
                        xs
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="question1"
                            value="c"
                            onChange={() => handleQuizChange('question1', 'c')}
                        />
                        md
                    </label>
                </div>

                <div>
                    <h4>2. At what screen width does the 'lg' breakpoint start?</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="question2"
                            value="a"
                            onChange={() => handleQuizChange('question2', 'a')}
                        />
                        1200px
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="question2"
                            value="b"
                            onChange={() => handleQuizChange('question2', 'b')}
                        />
                        768px
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="question2"
                            value="c"
                            onChange={() => handleQuizChange('question2', 'c')}
                        />
                        992px
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>

            {showResults && (
                <div className="quiz-results">
                    <h3>Results:</h3>
                    <p>
                        Question 1: {quizAnswers.question1 === correctAnswers.question1 ? 'Correct' : 'Incorrect'}
                    </p>
                    <p>
                        Question 2: {quizAnswers.question2 === correctAnswers.question2 ? 'Correct' : 'Incorrect'}
                    </p>
                </div>
            )}

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.0/layout/breakpoints/" target="_blank" rel="noreferrer">Bootstrap Breakpoints</a></li>
                <li><a href="https://getbootstrap.com/docs/5.0/layout/grid/" target="_blank" rel="noreferrer">Bootstrap Grid System</a></li>
            </ul>
        </div>
    );
};

export default ResponsiveDesign;
