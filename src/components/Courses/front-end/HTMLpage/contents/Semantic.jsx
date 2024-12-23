import React from 'react';
import '../css/Semantic.css';

const Semantic = () => {
    return (
        <div className="semantic-html">

            <h2>What is Semantic HTML?</h2>
            <p>
                Semantic HTML refers to the use of HTML tags that have meaningful names which clearly describe their purpose and content. These elements help both developers and browsers understand the structure and meaning of web content.
            </p>

            <h2>Importance of Semantic HTML</h2>
            <ul>
                <li>Improves accessibility for screen readers and assistive technologies.</li>
                <li>Makes the code more readable and maintainable.</li>
                <li>Enhances SEO by providing meaningful structure for search engines to parse.</li>
                <li>Facilitates better collaboration among developers.</li>
            </ul>

            <h2>Common Semantic HTML Elements</h2>
            <ul>
                <li><code>&lt;header&gt;</code>: Represents the introductory content or navigational links for a document or section.</li>
                <li><code>&lt;nav&gt;</code>: Defines a block of navigation links.</li>
                <li><code>&lt;main&gt;</code>: Specifies the main content of a document.</li>
                <li><code>&lt;article&gt;</code>: Represents independent, self-contained content.</li>
                <li><code>&lt;section&gt;</code>: Defines a thematic grouping of content.</li>
                <li><code>&lt;footer&gt;</code>: Specifies the footer of a document or section.</li>
                <li><code>&lt;aside&gt;</code>: Represents content tangentially related to the main content.</li>
                <li><code>&lt;figure&gt;</code>: Used for self-contained content, like images with captions.</li>
                <li><code>&lt;time&gt;</code>: Represents dates or times.</li>
            </ul>

            <h2>Examples of Semantic HTML</h2>
            <p>Here is an example of a simple webpage using semantic HTML:</p>
            <pre className="code-snippet">
{`<!DOCTYPE html>
<html>
<head>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Blog</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Understanding Semantic HTML</h2>
            <p>Semantic HTML provides meaning to web content.</p>
        </article>
    </main>

    <footer>
        <p>Copyright &copy; 2024 My Blog</p>
    </footer>
</body>
</html>`}
            </pre>

            <h2>Where to Use Semantic HTML</h2>
            <p>
                Semantic HTML should be used to create accessible and structured web content. For example:
            </p>
            <ul>
                <li>Use <code>&lt;nav&gt;</code> for navigation menus instead of a generic <code>&lt;div&gt;</code>.</li>
                <li>Use <code>&lt;article&gt;</code> for blog posts or news articles.</li>
                <li>Use <code>&lt;section&gt;</code> to group related content within a page.</li>
            </ul>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of semantic HTML?</li>
                <li>List three semantic HTML elements and their use cases.</li>
                <li>Why is semantic HTML important for accessibility?</li>
                <li>Rewrite the following code to use semantic HTML:
                    <pre className="code-snippet">
{`<div>
    <div>Header Section</div>
    <div>Main Content</div>
    <div>Footer Section</div>
</div>`}
                    </pre>
                </li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noopener noreferrer">MDN Web Docs - HTML Elements</a></li>
                <li><a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer">W3Schools - Semantic HTML</a></li>
                <li><a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">HTML Living Standard</a></li>
            </ul>
        </div>
    );
};

export default Semantic;
