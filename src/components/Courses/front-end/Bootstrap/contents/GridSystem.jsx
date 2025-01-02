// GridSystem.jsx
import React from 'react';
import '../css/GridSystem.css';

const GridSystem = () => {
    return (
        <div className="grid-system">
            <h1>Bootstrap Grid System</h1>
            <p>
                The Bootstrap Grid System is a powerful mobile-first flexbox system for building layouts of all shapes and sizes.
                It is based on a 12-column layout and offers a variety of classes to align and arrange your content.
            </p>

            <h2>1. Grid System Basics</h2>
            <p>
                The grid system in Bootstrap is built with flexbox, allowing you to create layouts for different screen sizes using a series of containers, rows, and columns.
            </p>

            <h3>Example:</h3>
            <pre>
                <code>
                    {`<div className="container">
    <div className="row">
        <div className="col">Column 1</div>
        <div className="col">Column 2</div>
        <div className="col">Column 3</div>
    </div>
</div>`}
                </code>
            </pre>

            <h2>2. Understanding the 12-Column Grid Layout</h2>
            <p>
                Bootstrap's grid divides the screen into 12 equal columns. You can specify how many columns an element should span using classes like <code>col-*</code>.
            </p>

            <h3>Example:</h3>
            <pre>
                <code>
                    {`<div className="container">
    <div className="row">
        <div className="col-4">Span 4 Columns</div>
        <div className="col-8">Span 8 Columns</div>
    </div>
</div>`}
                </code>
            </pre>

            <h2>3. Containers</h2>
            <p>
                Containers are the foundation of the grid system. They provide a means to center and horizontally pad your site’s contents.
            </p>
            <ul>
                <li><strong>container</strong>: A fixed-width container that adapts to screen sizes.</li>
                <li><strong>container-fluid</strong>: A full-width container spanning the entire viewport.</li>
            </ul>

            <h3>Example:</h3>
            <pre>
                <code>
                    {`<div className="container">Fixed-width Container</div>
<div className="container-fluid">Full-width Container</div>`}
                </code>
            </pre>

            <h2>4. Rows and Columns</h2>
            <p>
                Rows create horizontal groups of columns. Columns are the content containers inside rows.
            </p>

            <h3>Example:</h3>
            <pre>
                <code>
                    {`<div className="container">
    <div className="row">
        <div className="col">Column 1</div>
        <div className="col">Column 2</div>
    </div>
</div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <p>Test your knowledge of the Bootstrap Grid System:</p>
            <ol>
                <li>What is the maximum number of columns in a Bootstrap grid?
                    <ul>
                        <li>A. 10</li>
                        <li>B. 12</li>
                        <li>C. 16</li>
                        <li>D. 24</li>
                    </ul>
                </li>
                <li>Which class creates a full-width container?
                    <ul>
                        <li>A. container</li>
                        <li>B. container-fluid</li>
                        <li>C. row</li>
                        <li>D. col</li>
                    </ul>
                </li>
                <li>What does the class <code>col-6</code> mean?
                    <ul>
                        <li>A. Spans 6 rows</li>
                        <li>B. Spans 6 columns</li>
                        <li>C. Spans 6 containers</li>
                        <li>D. Spans 6 flex items</li>
                    </ul>
                </li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/5.3/layout/grid/" target="_blank" rel="noreferrer">Bootstrap Grid Documentation</a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Official Bootstrap Website</a></li>
            </ul>
        </div>
    );
};

export default GridSystem;
