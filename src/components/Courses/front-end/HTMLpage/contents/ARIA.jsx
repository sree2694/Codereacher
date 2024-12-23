import React from 'react';
import '../css/ARIA.css';

const ARIA = () => {
    return (
        <div className="aria-accessibility">
            <h2>What is ARIA?</h2>
            <p>
                ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and applications more accessible to people with disabilities. It enhances accessibility for users who rely on assistive technologies such as screen readers.
            </p>

            <h2>Why Use ARIA?</h2>
            <p>
                Standard HTML may not cover all accessibility needs for dynamic content or custom widgets. ARIA provides additional capabilities, allowing developers to:
            </p>
            <ul>
                <li>Label interactive elements.</li>
                <li>Provide roles to non-semantic elements.</li>
                <li>Describe dynamic updates to assistive technologies.</li>
            </ul>

            <h2>Key ARIA Roles, States, and Properties</h2>

            <h3>Roles</h3>
            <p>Roles define the purpose of an element. Examples:</p>
            <pre className="code-snippet">
{`<div role="button">Click Me</div>`}
            </pre>

            <h3>States</h3>
            <p>States represent dynamic properties of an element. Examples:</p>
            <pre className="code-snippet">
{`<button aria-pressed="true">Toggle</button>`}
            </pre>

            <h3>Properties</h3>
            <p>Properties describe the relationship or identity of elements. Examples:</p>
            <pre className="code-snippet">
{`<input aria-labelledby="search-label" type="text" />`}
            </pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Use ARIA sparingly and complement it with semantic HTML whenever possible.</li>
                <li>Ensure ARIA attributes are correctly implemented and tested with assistive technologies.</li>
                <li>Document ARIA usage to aid future maintenance and accessibility audits.</li>
            </ul>

            <h2>Examples</h2>
            <h3>Accessible Navigation</h3>
            <pre className="code-snippet">
{`<nav aria-label="Main Navigation">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>`}
            </pre>

            <h3>Custom Widgets</h3>
            <pre className="code-snippet">
{`<div role="tablist">
    <div role="tab" aria-selected="true">Tab 1</div>
    <div role="tab">Tab 2</div>
</div>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What is the primary purpose of ARIA attributes?</li>
                <li>How does the <code>role</code> attribute enhance accessibility?</li>
                <li>Give an example of when to use the <code>aria-labelledby</code> property.</li>
                <li>What are some best practices when using ARIA?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener noreferrer">MDN Web Docs - ARIA</a></li>
                <li><a href="https://www.w3.org/WAI/ARIA/" target="_blank" rel="noopener noreferrer">W3C ARIA Overview</a></li>
                <li><a href="https://webaim.org/techniques/aria/" target="_blank" rel="noopener noreferrer">WebAIM - ARIA Techniques</a></li>
            </ul>
        </div>
    );
};

export default ARIA;
