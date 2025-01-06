import React from 'react';
import '../css/Accessibility.css';

const Accessibility = () => {
    return (
        <div className="accessibility-container">
            <h1>Accessibility in Bootstrap</h1>

            <section>
                <h2>Introduction to Accessibility</h2>
                <p>
                    Accessibility ensures that web applications are usable by people with disabilities. 
                    Bootstrap provides built-in ARIA roles and attributes to make components accessible.
                </p>
            </section>

            <section>
                <h2>ARIA Roles in Bootstrap Components</h2>
                <ul>
                    <li>
                        <strong>Modals:</strong> Includes <code>aria-labelledby</code> and <code>aria-hidden</code> attributes for screen readers.
                    </li>
                    <li>
                        <strong>Buttons:</strong> Properly labeled with <code>aria-pressed</code> where applicable.
                    </li>
                    <li>
                        <strong>Forms:</strong> Supports <code>aria-describedby</code> for error messages and hints.
                    </li>
                </ul>
                <pre>{`<div className="example">
                    <button className="btn btn-primary" aria-pressed="false">
                        Accessible Button
                    </button>
                </div>`}</pre>
                <div className="example">
                    <button className="btn btn-primary" aria-pressed="false">
                        Accessible Button
                    </button>
                </div>
            </section>

            <section>
                <h2>Ensuring Web Accessibility Compliance</h2>
                <p>
                    Use semantic HTML and ARIA attributes to enhance accessibility. Ensure sufficient color contrast and keyboard navigability.
                </p>
                <pre>{` <div className="example">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" aria-required="true" />
                </div>`}</pre>
                <div className="example">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" aria-required="true" />
                </div>
            </section>

            <section>
                <h2>Quiz: Test Your Knowledge</h2>
                <form className="quiz-form">
                    <div>
                        <p>1. Which attribute is used to describe an element for screen readers?</p>
                        <label>
                            <input type="checkbox" name="question1" value="aria-label" /> aria-label
                        </label>
                        <label>
                            <input type="checkbox" name="question1" value="aria-hidden" /> aria-hidden
                        </label>
                    </div>

                    <div>
                        <p>2. What does ARIA stand for?</p>
                        <label>
                            <input type="checkbox" name="question2" value="Accessible Rich Internet Applications" /> Accessible Rich Internet Applications
                        </label>
                        <label>
                            <input type="checkbox" name="question2" value="Application Role Internet Access" /> Application Role Internet Access
                        </label>
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </section>

            <section>
                <h2>References</h2>
                <ul>
                    <li><a href="https://getbootstrap.com/docs/5.0/getting-started/accessibility/">Bootstrap Accessibility Documentation</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA">MDN Web Docs: ARIA</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Accessibility;
