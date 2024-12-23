import React from 'react';
import '../css/GettingStarted.css';

const GettingStarted = () => {
    return (
        <div className="getting-started">
            <h1>Getting Started with HTML</h1>

            <h2>HTML Structure</h2>
            <p>
                HTML documents consist of nested elements arranged in a specific structure. The basic structure of an HTML document includes:
            </p>
            <pre className="code-snippet">
{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a basic HTML page structure.</p>
</body>
</html>`}
            </pre>

            <h2>HTML Elements</h2>
            <p>
                HTML elements are the building blocks of HTML pages. Each element consists of a start tag, content, and an end tag. For example:
            </p>
            <pre className="code-snippet">
{`<p>This is a paragraph.</p>`}
            </pre>

            <h2>Web Browsers</h2>
            <p>
                Web browsers, such as Google Chrome, Mozilla Firefox, and Microsoft Edge, interpret HTML documents and render them into visual or interactive web pages.
            </p>

            <h2>HTML History</h2>
            <p>
                HTML was first created by Tim Berners-Lee in 1991. It has since undergone numerous revisions, evolving into a powerful and versatile language for web development.
            </p>

            <h2>HTML Editors</h2>
            <p>
                HTML can be written using a simple text editor like Notepad (Windows) or TextEdit (Mac). However, modern code editors like Visual Studio Code, Sublime Text, and Atom provide features like syntax highlighting and auto-completion to enhance productivity.
            </p>

            <h2>Where to Use HTML</h2>
            <p>
                HTML is used to create web pages, email templates, and documents for web-based applications. It is essential for building the structure and layout of content displayed on the web.
            </p>

            <h2>Examples</h2>
            <pre className="code-snippet">
{`<!DOCTYPE html>
<html>
<body>
    <h1>HTML Example</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://www.example.com">Visit Example</a>
</body>
</html>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What does HTML stand for?</li>
                <li>Write the basic structure of an HTML document.</li>
                <li>What are some examples of HTML editors?</li>
                <li>Name three popular web browsers that render HTML.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML</a></li>
                <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">W3Schools - HTML Tutorial</a></li>
                <li><a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">HTML Living Standard</a></li>
            </ul>
        </div>
    );
};

export default GettingStarted;