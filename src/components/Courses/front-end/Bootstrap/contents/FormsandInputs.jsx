// FormsandInputs.jsx
import React from 'react';
import '../css/FormsandInputs.css';

const FormsandInputs = () => {
    return (
        <div className="forms-and-inputs">
            <h1>Forms and Inputs in Bootstrap</h1>

            {/* Introduction */}
            <p>
                Forms are essential for collecting user input in web applications. Bootstrap simplifies the process of styling forms and inputs
                with built-in classes, validation styles, input groups, and custom forms.
            </p>

            {/* Form Controls and Layout */}
            <h2>Form Controls and Layout</h2>
            <p>
                Bootstrap provides a variety of classes to style input fields, text areas, checkboxes, radio buttons, and other form controls. These
                classes ensure consistency and responsiveness.
            </p>
            <h3>Example</h3>
            <pre>
                <code>
                    {`<form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>`}
                </code>
                </pre>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* Validation Styles */}
            <h2>Validation Styles</h2>
            <p>
                Bootstrap includes validation classes to indicate the state of the input fields. These classes include <code>is-valid</code>
                and <code>is-invalid</code>.
            </p>
            <h3>Example</h3>
            <pre>
                <code>
                    {`<form>
                <div className="mb-3">
                    <input type="text" className="form-control is-valid" placeholder="Valid input" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control is-invalid" placeholder="Invalid input" />
                </div>
            </form>
`}
                </code>
            </pre>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control is-valid" placeholder="Valid input" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control is-invalid" placeholder="Invalid input" />
                </div>
            </form>

            {/* Input Groups */}
            <h2>Input Groups</h2>
            <p>
                Input groups allow you to add text or buttons before, after, or both sides of an input field.
            </p>
            <h3>Example</h3>
            <pre>
                <code>
                    {`<div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Username" />
            </div>`}
                </code>
            </pre>
            <div className="input-group mb-3">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            {/* Custom Forms */}
            <h2>Custom Forms</h2>
            <p>
                Custom forms allow for additional styling and flexibility. Bootstrap provides classes for custom checkboxes, radio buttons,
                file inputs, and more.
            </p>
            <h3>Example</h3>
            <pre>
                <code>
                    {`<form>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="customCheck1" />
                    <label className="form-check-label" htmlFor="customCheck1">
                        Custom Checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="customRadio" id="customRadio1" />
                    <label className="form-check-label" htmlFor="customRadio1">
                        Custom Radio
                    </label>
                </div>
            </form>`}
                </code>
            </pre>
            <form>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="customCheck1" />
                    <label className="form-check-label" htmlFor="customCheck1">
                        Custom Checkbox
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="customRadio" id="customRadio1" />
                    <label className="form-check-label" htmlFor="customRadio1">
                        Custom Radio
                    </label>
                </div>
            </form>

            {/* Quiz */}
            <h2>Quiz</h2>
            <form className="quiz">
                <div className="quiz-question">
                    <p>Which class is used for valid input validation?</p>
                    <div>
                        <input type="checkbox" id="valid" name="valid" value="is-valid" />
                        <label htmlFor="valid">is-valid</label>
                    </div>
                    <div>
                        <input type="checkbox" id="invalid" name="invalid" value="is-invalid" />
                        <label htmlFor="invalid">is-invalid</label>
                    </div>
                    <div>
                        <input type="checkbox" id="default" name="default" value="default" />
                        <label htmlFor="default">default</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* References */}
            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.0/forms/overview/" target="_blank" rel="noreferrer">Bootstrap Forms Overview</a></li>
                <li><a href="https://getbootstrap.com/docs/5.0/forms/validation/" target="_blank" rel="noreferrer">Bootstrap Form Validation</a></li>
                <li><a href="https://getbootstrap.com/docs/5.0/forms/input-group/" target="_blank" rel="noreferrer">Bootstrap Input Groups</a></li>
            </ul>
        </div>
    );
};

export default FormsandInputs;
