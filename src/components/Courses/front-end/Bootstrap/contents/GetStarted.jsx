// GetStarted.jsx
import React from 'react';
import '../css/GetStarted.css';

const GetStarted = () => {
    return (
        <div className="get-started">
            <h1>Getting Started with Bootstrap</h1>

            <h2>1. Adding Bootstrap via CDN</h2>
            <p>
                The easiest way to include Bootstrap in your project is by using a Content Delivery Network (CDN). 
                Add the following <code>&lt;link&gt;</code> tag for the CSS file and <code>&lt;script&gt;</code> tags for the JavaScript files in your HTML:
            </p>
            <pre>
                <code>
                    &lt;!-- Bootstrap CSS --&gt;
                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-1CmrxMRARb6aLqgBO7uuIbMRRSSV10/1sUqzSRt5cF3U7nsMwpAlZBi8JKUbzFUj" crossorigin="anonymous"&gt;

                    &lt;!-- Bootstrap JS --&gt;
                    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2JDzLgXxCcA7C4cFZ1VgqqY5PxtHTebT7ELi2wlKN7lMlq2DkMQt3F1zCTJ" crossorigin="anonymous"&gt;&lt;/script&gt;
                </code>
            </pre>

            <h2>2. Downloading Bootstrap Files</h2>
            <p>
                To use Bootstrap offline or customize it, download the files from the official Bootstrap website. 
                Visit <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">getbootstrap.com</a> and download the latest stable version.
            </p>

            <h2>3. File Structure of Bootstrap</h2>
            <p>
                After downloading, the extracted Bootstrap folder contains the following structure:
            </p>
            <ul>
                <li>
                    <strong>CSS:</strong> Contains the precompiled CSS files (<code>bootstrap.css</code>, <code>bootstrap.min.css</code>).
                </li>
                <li>
                    <strong>JS:</strong> Contains JavaScript files for interactive components (<code>bootstrap.bundle.js</code>, <code>bootstrap.bundle.min.js</code>).
                </li>
                <li>
                    <strong>SCSS:</strong> Optional Sass files for advanced customization.
                </li>
            </ul>

            <h2>Example</h2>
            <p>Here is a simple example using Bootstrap classes:</p>
            <pre>
                <code>
                    &lt;div class="container text-center mt-5"&gt;
                        &lt;h1 class="text-primary"&gt;Welcome to Bootstrap!&lt;/h1&gt;
                        &lt;button class="btn btn-success"&gt;Click Me&lt;/button&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of using a CDN for Bootstrap?</li>
                <li>What are the three main folders in the downloaded Bootstrap files?</li>
                <li>How can you include Bootstrap's CSS in your project?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noreferrer">Bootstrap Official Documentation</a></li>
                <li><a href="https://cdnjs.com/libraries/bootstrap" target="_blank" rel="noreferrer">Bootstrap CDN</a></li>
            </ul>
        </div>
    );
};

export default GetStarted;
