import React from 'react';
import '../css/WhatIsHTML.css';

const WhatIsHTML = () => {
    return (
        <div className="what-is-html">
            <h1>What is HTML?</h1>
            <p>
                HTML (HyperText Markup Language) is the standard language for creating web pages. It is used to structure content on the web by defining elements like headings, paragraphs, links, images, and more. HTML serves as the backbone of every website, working in conjunction with CSS and JavaScript to create visually appealing and interactive experiences.
            </p>

            <h2>Where is HTML Used?</h2>
            <ul>
                <li>Creating the structure of web pages.</li>
                <li>Embedding images, videos, and other media.</li>
                <li>Adding hyperlinks to navigate between pages.</li>
                <li>Building forms for user input.</li>
                <li>Defining metadata for SEO optimization.</li>
            </ul>

            <h2>Basic Example of HTML</h2>
            <pre className="code-snippet">
{`<!DOCTYPE html>
<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple example of an HTML page.</p>
    <a href="https://www.example.com">Visit Example</a>
</body>
</html>`}
            </pre>

            <h2>Quiz</h2>
            <p>Test your knowledge of HTML with the following questions:</p>
            <ol>
                <li>What does HTML stand for?</li>
                <li>Name two common uses of HTML.</li>
                <li>What is the purpose of the <code>&lt;head&gt;</code> section in an HTML document?</li>
                <li>Write a basic structure of an HTML document.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs - HTML
                    </a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
                        W3Schools - HTML Tutorial
                    </a>
                </li>
                <li>
                    <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
                        HTML.com
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WhatIsHTML;