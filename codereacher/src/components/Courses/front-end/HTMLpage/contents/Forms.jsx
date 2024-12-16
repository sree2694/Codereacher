import React from 'react';
import '../css/Forms.css';

const Forms = () => {
    return (
        <div className="html-forms">
            <h2>What are HTML Forms?</h2>
            <p>
                HTML forms are used to collect user input and send it to a server for processing. They are essential for creating interactive web applications, enabling functionalities like login pages, search bars, and feedback forms.
            </p>

            <h2>Key Components of a Form</h2>
            <ul>
                <li><strong>&lt;form&gt;:</strong> Defines the form structure and attributes.</li>
                <li><strong>&lt;input&gt;:</strong> Collects user data.</li>
                <li><strong>&lt;textarea&gt;:</strong> Allows multi-line text input.</li>
                <li><strong>&lt;select&gt; and &lt;option&gt;:</strong> Creates drop-down menus.</li>
                <li><strong>&lt;button&gt;:</strong> Triggers form submission or other actions.</li>
            </ul>

            <h2>Form Attributes</h2>
            <p>
                Forms support various attributes to define their behavior:
            </p>
            <ul>
                <li><strong>action:</strong> Specifies the server endpoint where data will be sent.</li>
                <li><strong>method:</strong> Defines the HTTP method (GET or POST).</li>
                <li><strong>target:</strong> Determines where to display the response (e.g., _blank, _self).</li>
            </ul>

            <h2>Examples</h2>

            <h3>Basic Form Example</h3>
            <pre className="code-snippet">
{`<form action="/submit" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <button type="submit">Submit</button>
</form>`}
            </pre>

            <h3>Form with Dropdown and Text Area</h3>
            <pre className="code-snippet">
{`<form action="/submit" method="post">
    <label for="feedback">Feedback:</label>
    <textarea id="feedback" name="feedback"></textarea>

    <label for="rating">Rate Us:</label>
    <select id="rating" name="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <button type="submit">Submit</button>
</form>`}
            </pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Use descriptive <code>name</code> attributes for better server-side processing.</li>
                <li>Validate input fields using HTML attributes like <code>required</code> and <code>pattern</code>.</li>
                <li>Ensure forms are accessible by associating labels with inputs using the <code>for</code> attribute.</li>
            </ul>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of the <code>action</code> attribute in a form?</li>
                <li>Write an example of a form with a file upload input.</li>
                <li>What HTML elements can be used to create a dropdown menu?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML Forms</a></li>
                <li><a href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer">W3Schools - HTML Forms</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/forms.html" target="_blank" rel="noopener noreferrer">HTML Living Standard - Forms</a></li>
            </ul>
        </div>
    );
};

export default Forms;