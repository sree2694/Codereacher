// WhatIsBootstrap.jsx
import React from 'react';
import '../css/WhatIsBootstrap.css';

const WhatIsBootstrap = () => {
    return (
        <div className="what-is-bootstrap">
            <h1>What is Bootstrap?</h1>
            <p>
                Bootstrap is a powerful front-end framework for developing responsive and mobile-first web applications. 
                It provides a collection of pre-designed components, utilities, and templates that simplify web development.
            </p>

            <h2>Overview of Bootstrap Framework</h2>
            <ul>
                <li><strong>Responsive Design:</strong> Built-in grid system and responsive utilities.</li>
                <li><strong>Pre-styled Components:</strong> Buttons, modals, navbars, and more.</li>
                <li><strong>Customization:</strong> Use Sass variables and mixins for styling flexibility.</li>
                <li><strong>Cross-browser Compatibility:</strong> Works seamlessly on modern browsers.</li>
                <li><strong>Extensibility:</strong> Easily integrates with JavaScript plugins and libraries.</li>
            </ul>

            <h2>Purpose: Simplifying Responsive Web Design</h2>
            <p>
                Bootstrap simplifies responsive web design by providing a mobile-first grid system and pre-built styles for 
                common web components. Developers can focus more on functionality and less on designing elements from scratch.
            </p>

            <h2>Versions of Bootstrap</h2>
            <p>
                Over the years, Bootstrap has evolved significantly. The latest stable version is Bootstrap 5, which offers 
                improved features and eliminates the dependency on jQuery.
            </p>
            <ul>
                <li><strong>Bootstrap 3:</strong> Introduced a mobile-first approach.</li>
                <li><strong>Bootstrap 4:</strong> Enhanced responsiveness and Sass support.</li>
                <li><strong>Bootstrap 5:</strong> Removed jQuery dependency and introduced new utilities.</li>
            </ul>

            <h2>Example</h2>
            <p>Here is an example of a simple responsive layout using Bootstrap:</p>
            <pre>
                <code>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6">Column 1</div>
            <div class="col-md-6">Column 2</div>
        </div>
    </div>
</body>
</html>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the primary purpose of Bootstrap?</li>
                <li>How does the grid system in Bootstrap help with responsive design?</li>
                <li>What are the key differences between Bootstrap 4 and Bootstrap 5?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com" target="_blank" rel="noreferrer">Official Bootstrap Documentation</a></li>
                <li><a href="https://www.w3schools.com/bootstrap/" target="_blank" rel="noreferrer">W3Schools Bootstrap Tutorial</a></li>
            </ul>
        </div>
    );
};

export default WhatIsBootstrap;
