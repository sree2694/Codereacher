import React from 'react';
import '../css/AdditionalTopics.css'; // Import the generated CSS file
import image1 from '../../../../assets/logo_CR.png';
import image2 from '../../../../assets/logo_CR.png';

const AdditionalTopics = () => {
    return (
        <div>
            <h2>Advanced CSS Concepts</h2>

            <h3>CSS Shapes</h3>
            <p>Create custom shapes for elements using `shape-outside` and `clip-path` properties.</p>
            <div className="shape-example">
                <div className="shape-circle"></div>
                <div className="shape-polygon"></div>
            </div>

            <h3>CSS Filters</h3>
            <p>Apply visual effects to elements like blur, grayscale, and sepia.</p>
            <div className="filter-example">
                <img src={image1} alt="Image1" className="filter-grayscale" />
                <img src={image2} alt="Image2" className="filter-blur" />
            </div>

            <h3>CSS Masking</h3>
            <p>Reveal or conceal parts of an element using masks.</p>
            <div className="mask-example">
                <div className="mask-circle"></div>
                <div className="mask-polygon"></div>
            </div>

            <h3>CSS Blend Modes</h3>
            <p>Combine colors of overlapping elements in various ways.</p>
            <div className="blend-mode-example">
                <div className="blend-mode-multiply"></div>
                <div className="blend-mode-screen"></div>
            </div>

            <h3>CSS Scroll Snap</h3>
            <p>Control the scrolling behavior of elements, making them snap to specific positions.</p>
            <div className="scroll-snap-example">
                <div className="scroll-snap-item">Item 1</div>
                <div className="scroll-snap-item">Item 2</div>
                <div className="scroll-snap-item">Item 3</div>
            </div>

            <h3>CSS Container Queries</h3>
            <p>Apply styles based on the size and dimensions of a container element.</p>
            <div className="container-query-example">
                <div className="container">
                    <div className="content">Content</div>
                </div>
            </div>

            {/* Quiz */}
            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of the `shape-outside` property?</li>
                <li>Name two common CSS filter functions.</li>
                <li>How can you create a circular mask using CSS?</li>
                <li>What is the difference between `multiply` and `screen` blend modes?</li>
                <li>How do you enable scroll snapping on an element?</li>
                <li>What is the benefit of using container queries?</li>
            </ol>

            {/* References */}
            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes">CSS Shapes</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter">CSS Filters</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask">CSS Masking</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode">CSS Blend Modes</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type">CSS Scroll Snap</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Container_Queries">CSS Container Queries</a></li>
            </ul>
        </div>
    );
};

export default AdditionalTopics;