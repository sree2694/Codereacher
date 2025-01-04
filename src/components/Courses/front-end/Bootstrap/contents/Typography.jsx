// Typography.jsx
import React, { useState } from "react";
import "../css/Typography.css";

const Typography = () => {
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleCheckboxChange = (question, option) => {
        setQuizAnswers({
            ...quizAnswers,
            [question]: option,
        });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    return (
        <div className="typography">
            <h1>Bootstrap Typography</h1>
            <h2>Default Font Settings</h2>
            <p>
                Bootstrap uses a default font family of "Helvetica Neue", Arial, sans-serif. The
                base font size is 16px, and the line height is 1.5.
            </p>

            <h2>Headings, Paragraphs, and Display Headings</h2>
            <p>
                Bootstrap provides classes for different heading levels and display headings to create
                typographic hierarchy.
            </p>
            <ul>
                <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Standard heading tags.</li>
                <li><code>.display-1</code> to <code>.display-6</code>: Larger display headings.</li>
            </ul>

            <h3>Example:</h3>
            <pre>
                <code>
                    {`<div className="example">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>This is a paragraph with Bootstrap's default styling.</p>
                <p className="text-muted">This is a muted paragraph.</p>
                <h1 className="display-1">Display Heading 1</h1>
            </div>`}
                </code>
            </pre>
            <div className="example">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>This is a paragraph with Bootstrap's default styling.</p>
                <p className="text-muted">This is a muted paragraph.</p>
                <h1 className="display-1">Display Heading 1</h1>
            </div>

            <h2>Text Alignment and Transformations</h2>
            <p>
                Use utility classes for text alignment, like <code>.text-left</code>, <code>.text-center</code>,
                and <code>.text-right</code>. Text transformations like uppercase and lowercase are achieved
                using <code>.text-uppercase</code>, <code>.text-lowercase</code>, and <code>.text-capitalize</code>.
            </p>

            <h3>Example:</h3>
            <pre>
                <code>
                    {` <div className="example">
                <p className="text-left">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-right">Right aligned text.</p>
                <p className="text-uppercase">Uppercase text.</p>
                <p className="text-lowercase">Lowercase text.</p>
                <p className="text-capitalize">Capitalized text.</p>
            </div>`}
                </code>
            </pre>
            <div className="example">
                <p className="text-left">Left aligned text.</p>
                <p className="text-center">Center aligned text.</p>
                <p className="text-right">Right aligned text.</p>
                <p className="text-uppercase">Uppercase text.</p>
                <p className="text-lowercase">Lowercase text.</p>
                <p className="text-capitalize">Capitalized text.</p>
            </div>

            <h2>Quiz</h2>
            <form>
                <div>
                    <h4>1. What is the default font family used by Bootstrap?</h4>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(1, "Arial")}
                        />
                        Arial
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(1, "Helvetica Neue")}
                        />
                        Helvetica Neue
                    </label>
                </div>

                <div>
                    <h4>2. Which class is used for uppercase text?</h4>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(2, ".text-uppercase")}
                        />
                        .text-uppercase
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(2, ".text-lowercase")}
                        />
                        .text-lowercase
                    </label>
                </div>

                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

            {showResults && (
                <div className="quiz-results">
                    <h3>Results</h3>
                    <p>1. Correct Answer: Helvetica Neue</p>
                    <p>Your Answer: {quizAnswers[1]}</p>
                    <p>2. Correct Answer: .text-uppercase</p>
                    <p>Your Answer: {quizAnswers[2]}</p>
                </div>
            )}

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.0/content/typography/" target="_blank" rel="noreferrer">Bootstrap Typography Documentation</a></li>
            </ul>
        </div>
    );
};

export default Typography;
