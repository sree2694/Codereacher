import React from 'react';
import '../css/Lists.css';

const Lists = () => {
    return (
        <div className="html-lists">

            <h2>What are HTML Lists?</h2>
            <p>
                HTML lists allow you to group related items together. They help organize content into bullet points, numbers, or descriptions, making it more readable and structured.
            </p>

            <h2>Types of Lists in HTML</h2>
            <ul>
                <li><strong>Ordered List (&lt;ol&gt;):</strong> Used for items that require a specific sequence. Items are marked with numbers or letters.</li>
                <li><strong>Unordered List (&lt;ul&gt;):</strong> Used for items that do not need a specific order. Items are marked with bullets.</li>
                <li><strong>Description List (&lt;dl&gt;):</strong> Used for definitions or descriptions. It contains terms (&lt;dt&gt;) and their corresponding descriptions (&lt;dd&gt;).</li>
            </ul>

            <h2>Examples</h2>

            <h3>Unordered List</h3>
            <pre className="code-snippet">
{`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`}
            </pre>

            <h3>Ordered List</h3>
            <pre className="code-snippet">
{`<ol>
    <li>Step 1: Open the editor</li>
    <li>Step 2: Write the code</li>
    <li>Step 3: Run the application</li>
</ol>`}
            </pre>

            <h3>Description List</h3>
            <pre className="code-snippet">
{`<dl>
    <dt>HTML</dt>
    <dd>Hypertext Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`}
            </pre>

            <h2>Attributes of Lists</h2>
            <p>Lists can include attributes like:</p>
            <ul>
                <li><strong>type:</strong> Specifies the marker type for ordered or unordered lists.</li>
                <li><strong>start:</strong> Defines the starting value of the first item in an ordered list.</li>
                <li><strong>reversed:</strong> Reverses the numbering in an ordered list.</li>
            </ul>

            <h3>Example with Attributes</h3>
            <pre className="code-snippet">
{`<ol type="I" start="3">
    <li>Third Item</li>
    <li>Fourth Item</li>
</ol>`}
            </pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Use semantic HTML to improve accessibility.</li>
                <li>Choose the appropriate list type based on the content structure.</li>
                <li>Style lists with CSS for better visual representation.</li>
            </ul>

            <h2>Quiz</h2>
            <ol>
                <li>What is the difference between an ordered and an unordered list?</li>
                <li>Write an example of a description list with three terms and descriptions.</li>
                <li>How can you change the bullet style of an unordered list?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul" target="_blank" rel="noopener noreferrer">MDN Web Docs - Unordered List</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol" target="_blank" rel="noopener noreferrer">MDN Web Docs - Ordered List</a></li>
                <li><a href="https://www.w3schools.com/html/html_lists.asp" target="_blank" rel="noopener noreferrer">W3Schools - HTML Lists</a></li>
            </ul>
        </div>
    );
};

export default Lists;
