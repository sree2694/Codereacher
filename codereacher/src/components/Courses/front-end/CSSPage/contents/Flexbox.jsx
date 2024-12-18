import React from 'react';
import '../css/Flexbox.css';

const Flexbox = () => {
    return (
        <div className="flexbox-container">
            <h1>Understanding CSS Flexbox</h1>
            <p>
                Flexbox, or the CSS Flexible Box Layout, is a layout model designed for distributing space and aligning items efficiently within a container. It provides powerful tools to arrange items in one dimension, either as a row or a column.
            </p>

            <h2>Core Concepts</h2>
            <ul>
                <li>
                    <strong>Flex Container:</strong> The parent element that contains flex items. Set by applying <code>display: flex;</code> or <code>display: inline-flex;</code>.
                </li>
                <li>
                    <strong>Flex Items:</strong> The children of a flex container that will align and distribute space based on the container's rules.
                </li>
            </ul>

            <h3>Key Properties for Flex Container</h3>
            <ul>
                <li><code>flex-direction</code>: Defines the main axis (row, column).</li>
                <li><code>justify-content</code>: Aligns items along the main axis.</li>
                <li><code>align-items</code>: Aligns items along the cross-axis.</li>
                <li><code>align-content</code>: Aligns rows of items along the cross-axis.</li>
                <li><code>flex-wrap</code>: Determines if items should wrap onto a new line.</li>
            </ul>

            <h3>Key Properties for Flex Items</h3>
            <ul>
                <li><code>flex-grow</code>: Defines how much a flex item will grow relative to others.</li>
                <li><code>flex-shrink</code>: Defines how much a flex item will shrink relative to others.</li>
                <li><code>flex-basis</code>: Defines the default size of an item before the remaining space is distributed.</li>
                <li><code>align-self</code>: Overrides the align-items property for individual items.</li>
            </ul>

            <h2>Examples</h2>
            <div className="example-section">
                <h3>Basic Example</h3>
                <pre>
{`<div class="flex-container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item {
    width: 50px;
    height: 50px;
    background-color: lightblue;
}`}
                </pre>
            </div>

            <h2>Quiz</h2>
            <ol>
                <li>What does the <code>justify-content</code> property control?</li>
                <li>How does the <code>align-items</code> property differ from <code>align-content</code>?</li>
                <li>True or False: <code>flex-direction</code> can be used to create vertical layouts.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: Flexbox
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">
                        CSS Tricks: A Guide to Flexbox
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Flexbox;
