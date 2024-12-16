import React from 'react';
import '../css/Elements.css';

const Elements = () => {
    return (
        <div className="elements">
            <h2>HTML Elements</h2>
            <p>
                HTML elements are the building blocks of HTML documents. They define the structure and content of a web page. An element consists of:
            </p>
            <ul>
                <li>A start tag</li>
                <li>Content</li>
                <li>An end tag (for most elements)</li>
            </ul>
            <p>Example:</p>
            <pre className="code-snippet">
{`<h1>This is a heading</h1>`}
            </pre>

            <h2>HTML Attributes</h2>
            <p>
                Attributes provide additional information about an element. They are always specified in the start tag and usually come in name-value pairs like <code>name="value"</code>.
            </p>
            <p>Example:</p>
            <pre className="code-snippet">
{`<a href="https://www.example.com">Visit Example</a>`}
            </pre>

            <h2>HTML Tags</h2>
            <p>
                HTML tags are used to create elements. Tags are enclosed in angle brackets (e.g., <code>&lt;h1&gt;</code>). Most elements have a pair of tags: an opening tag (<code>&lt;h1&gt;</code>) and a closing tag (<code>&lt;/h1&gt;</code>).
            </p>
            <p>Example:</p>
            <pre className="code-snippet">
{`<p>This is a paragraph.</p>`}
            </pre>

            <h2>Where to Use</h2>
            <p>
                HTML elements, attributes, and tags are used in every web page. They define the structure, presentation, and functionality of web content. For instance:
            </p>
            <ul>
                <li>Headings (<code>&lt;h1&gt; to &lt;h6&gt;</code>) to define titles and subtitles</li>
                <li>Paragraphs (<code>&lt;p&gt;</code>) for blocks of text</li>
                <li>Links (<code>&lt;a&gt;</code>) to navigate between web pages</li>
            </ul>

            <h2>Examples</h2>
            <p>Below is an example of a simple HTML document:</p>
            <pre className="code-snippet">
{`<!DOCTYPE html>
<html>
<head>
    <title>HTML Example</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://www.example.com">Learn More</a>
</body>
</html>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of an HTML element?</li>
                <li>How are attributes added to an HTML tag?</li>
                <li>What is the difference between an element and a tag?</li>
                <li>Write an example of an HTML element with attributes.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML Elements</a></li>
                <li><a href="https://www.w3schools.com/html/html_elements.asp" target="_blank" rel="noopener noreferrer">W3Schools - HTML Elements</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">HTML Living Standard</a></li>
            </ul>
        </div>
    );
};

export default Elements;
