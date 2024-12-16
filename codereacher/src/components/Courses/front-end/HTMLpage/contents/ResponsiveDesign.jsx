import React from 'react';
import '../css/ResponsiveDesign.css';

const ResponsiveDesign = () => {
    return (
        <div className="responsive-design">
            <h2>What is Responsive Design?</h2>
            <p>
                Responsive Design is an approach to web design that ensures websites look and function well on devices of all sizes, from desktop monitors to mobile phones. It involves using flexible layouts, media queries, and adaptable elements to create a seamless user experience across devices.
            </p>

            <h2>Key Techniques in Responsive Design</h2>

            <h3>1. Flexible Layouts</h3>
            <p>
                Flexible layouts use relative units like percentages instead of fixed units like pixels to define the width and height of elements.
            </p>
            <pre className="code-snippet">
{`<div style="width: 50%;">This is a flexible layout example.</div>`}
            </pre>

            <h3>2. Media Queries</h3>
            <p>
                Media queries allow developers to apply specific styles based on the device's characteristics, such as screen width or orientation.
            </p>
            <pre className="code-snippet">
{`@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}`}
            </pre>

            <h3>3. Responsive Images</h3>
            <p>
                Responsive images automatically adjust to fit the container size, ensuring proper display on any device.
            </p>
            <pre className="code-snippet">
{`<img src="example.jpg" style="max-width: 100%; height: auto;" alt="Responsive Example" />`}
            </pre>

            <h3>4. Frameworks</h3>
            <p>
                Frameworks like Bootstrap provide pre-built responsive grids and components to streamline the development process.
            </p>
            <pre className="code-snippet">
{`<div class="container">
    <div class="row">
        <div class="col-md-6">Column 1</div>
        <div class="col-md-6">Column 2</div>
    </div>
</div>`}
            </pre>

            <h2>Examples</h2>
            <p>Example of a basic responsive layout:</p>
            <pre className="code-snippet">
{`<div class="responsive-container">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <footer>Footer</footer>
</div>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of media queries in responsive design?</li>
                <li>How do flexible layouts differ from fixed layouts?</li>
                <li>Explain the use of the <code>max-width</code> property in responsive images.</li>
                <li>What is the benefit of using a responsive design framework like Bootstrap?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer">MDN Web Docs - Responsive Design</a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap Official Website</a></li>
                <li><a href="https://www.w3schools.com/css/css_rwd_intro.asp" target="_blank" rel="noopener noreferrer">W3Schools - Responsive Web Design</a></li>
            </ul>
        </div>
    );
};

export default ResponsiveDesign;
