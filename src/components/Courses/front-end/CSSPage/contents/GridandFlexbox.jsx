import React from 'react';
import '../css/GridandFlexbox.css';

const GridandFlexbox = () => {
    return (
        <div className="grid-and-flexbox-container">
            <h1>CSS Grid and Flexbox Together</h1>
            <p>
                CSS Grid and Flexbox are two powerful layout systems in CSS. While Grid is excellent for creating the overall structure of a layout, Flexbox is ideal for handling finer alignment and spacing within grid items.
            </p>

            <h2>When to Use Grid vs. Flexbox</h2>
            <ul>
                <li><strong>Grid:</strong> Best for 2-dimensional layouts (rows and columns).</li>
                <li><strong>Flexbox:</strong> Best for 1-dimensional layouts (row or column).</li>
            </ul>

            <h2>Combining Grid and Flexbox</h2>
            <p>
                By combining Grid and Flexbox, you can create complex and responsive designs. Use Grid for the high-level layout and Flexbox for detailed alignment within the grid items.
            </p>

            <h2>Example: Using Grid and Flexbox Together</h2>
            <div className="example-section">
                <h3>HTML:</h3>
                <pre>
                    <code>
                        {`<div class="grid-container">
    <div class="grid-item">
        <div class="flex-container">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
        </div>
    </div>
    <div class="grid-item">B</div>
    <div class="grid-item">C</div>
</div>`}
                    </code>
                </pre>
                <h3>CSS:</h3>
                <pre>
                    <code>
                        {`.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.grid-item {
    border: 1px solid #333;
    padding: 10px;
}

.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.flex-item {
    background-color: #3498db;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
}`}
                    </code>
                </pre>
            </div>

            <h2>Practical Use Cases</h2>
            <ul>
                <li>Use Grid to define the main sections of a webpage, like header, sidebar, and content.</li>
                <li>Use Flexbox within a Grid item to align navigation links, buttons, or other elements.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What are the main differences between Grid and Flexbox?</li>
                <li>How can you use Flexbox inside a Grid item?</li>
                <li>Which layout system is better for aligning items in a single row?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: CSS Grid Layout
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noopener noreferrer">
                        MDN Web Docs: CSS Flexible Box Layout
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">
                        CSS-Tricks: A Complete Guide to Grid
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">
                        CSS-Tricks: A Guide to Flexbox
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default GridandFlexbox;
