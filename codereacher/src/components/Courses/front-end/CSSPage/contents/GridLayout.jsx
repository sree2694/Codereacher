import React from 'react';
import '../css/GridLayout.css';

const GridLayout = () => {
    return (
        <div className="grid-layout-container">
            <h1>CSS Grid Layout</h1>
            <p>
                CSS Grid Layout is a powerful two-dimensional layout system for the web. It enables designers and developers
                to create complex web designs with rows and columns.
            </p>

            <h2>Key Concepts of Grid Layout</h2>
            <ul>
                <li><strong>Grid Container:</strong> The element that uses <code>display: grid;</code> to define a grid context.</li>
                <li><strong>Grid Items:</strong> The direct children of the grid container.</li>
                <li><strong>Grid Lines:</strong> The dividing lines between rows and columns.</li>
                <li><strong>Grid Tracks:</strong> The rows or columns in the grid.</li>
                <li><strong>Grid Area:</strong> A rectangular space in the grid, defined by four grid lines.</li>
            </ul>

            <h2>Example: Basic Grid Layout</h2>
            <div className="example-section">
                <pre>
{`<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
</div>`}
                </pre>
            </div>

            <h2>CSS Code</h2>
            <div className="example-section">
                <pre>
{`.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.grid-item {
    background-color: #b3d9ff;
    text-align: center;
    padding: 20px;
    font-size: 18px;
}`}
                </pre>
            </div>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of <code>grid-template-columns</code>?</li>
                <li>How do you create gaps between grid items?</li>
                <li>What property defines a grid container?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noreferrer">MDN: CSS Grid Layout</a></li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noreferrer">CSS Tricks: Complete Guide to Grid</a></li>
            </ul>
        </div>
    );
};

export default GridLayout;