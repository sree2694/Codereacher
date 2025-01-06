// Customise.jsx
import React from 'react';
import '../css/Customise.css';

const Customise = () => {
    return (
        <div className="customise">
            <h1>Customizing Bootstrap</h1>

            <h2>1. Overriding Bootstrap CSS with Custom Styles</h2>
            <p>
                You can override Bootstrap's default styles by creating a custom stylesheet and including it after the Bootstrap CSS file. This ensures that your custom styles take precedence.
            </p>
            <pre>
                <code>
                    {`/* Example: Custom button style */
                    .btn-custom {
                        background-color: #007bff;
                        color: white;
                        border-radius: 50px;
                    }`}
                </code>
            </pre>

            <h2>2. Using SCSS to Customize Variables</h2>
            <p>
                Bootstrap allows customization using SCSS. By overriding variables, you can define custom colors, breakpoints, and other styles without modifying the core Bootstrap files.
            </p>
            <pre>
                <code>
                    {`/* Example: SCSS customization */
                    $primary-color: #007bff;
                    $secondary-color: #6c757d;
                    
                    @import "~bootstrap/scss/bootstrap";`}
                </code>
            </pre>

            <h2>3. Creating a Custom Bootstrap Build</h2>
            <p>
                To create a custom build of Bootstrap, you can use tools like npm or yarn to install Bootstrap's source files and include only the components you need.
            </p>
            <ol>
                <li>Install Bootstrap source files:</li>
                <pre>
                    <code>npm install bootstrap</code>
                </pre>
                <li>Import required components in your SCSS file:</li>
                <pre>
                    <code>
                        {`@import "~bootstrap/scss/functions";
                        @import "~bootstrap/scss/variables";
                        @import "~bootstrap/scss/mixins";
                        @import "~bootstrap/scss/buttons";
                        @import "~bootstrap/scss/grid";`}
                    </code>
                </pre>
            </ol>

            <h2>Quiz</h2>
            <p>Test your knowledge:</p>
            <form>
                <label>
                    <input type="checkbox" name="question1" value="option1" />
                    What is the correct order for including custom styles and Bootstrap CSS?
                </label>
                <label>
                    <input type="checkbox" name="question2" value="option2" />
                    How can you customize Bootstrap variables?
                </label>
                <button type="submit">Submit</button>
            </form>

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.0/customize/overview/" target="_blank" rel="noreferrer">Bootstrap Customization Documentation</a></li>
                <li><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">SASS Official Site</a></li>
            </ul>
        </div>
    );
};

export default Customise;