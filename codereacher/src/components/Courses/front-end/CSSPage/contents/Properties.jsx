import React from 'react';

const Properties = () => {
    return (
        <div className="properties-css">
            <h1>CSS Properties</h1>

            <h2>Font Properties</h2>
            <p>Font properties define the appearance of text content in a document.</p>
            <ul>
                <li><strong>font-family:</strong> Specifies the typeface for text.</li>
                <pre className="code-snippet">{`p {
    font-family: Arial, sans-serif;
}`}</pre>

                <li><strong>font-size:</strong> Specifies the size of the font.</li>
                <pre className="code-snippet">{`h1 {
    font-size: 24px;
}`}</pre>

                <li><strong>font-weight:</strong> Controls the thickness of text.</li>
                <pre className="code-snippet">{`strong {
    font-weight: bold;
}`}</pre>

                <li><strong>color:</strong> Sets the text color.</li>
                <pre className="code-snippet">{`p {
    color: #333;
}`}</pre>
            </ul>

            <h2>Text Properties</h2>
            <p>Text properties define the alignment, decoration, and spacing of text.</p>
            <ul>
                <li><strong>text-align:</strong> Aligns text horizontally.</li>
                <pre className="code-snippet">{`h1 {
    text-align: center;
}`}</pre>

                <li><strong>text-decoration:</strong> Adds or removes text decorations like underlines.</li>
                <pre className="code-snippet">{`a {
    text-decoration: none;
}`}</pre>

                <li><strong>line-height:</strong> Sets the spacing between lines.</li>
                <pre className="code-snippet">{`p {
    line-height: 1.5;
}`}</pre>
            </ul>

            <h2>Background Properties</h2>
            <ul>
                <li><strong>background-color:</strong> Sets the background color.</li>
                <pre className="code-snippet">{`body {
    background-color: #f0f0f0;
}`}</pre>

                <li><strong>background-image:</strong> Sets a background image.</li>
                <pre className="code-snippet">{`div {
    background-image: url('image.jpg');
}`}</pre>

                <li><strong>background-position:</strong> Specifies the position of the background image.</li>
                <pre className="code-snippet">{`div {
    background-position: center;
}`}</pre>
            </ul>

            <h2>Dimension Properties</h2>
            <ul>
                <li><strong>width:</strong> Sets the width of an element.</li>
                <pre className="code-snippet">{`div {
    width: 100px;
}`}</pre>

                <li><strong>height:</strong> Sets the height of an element.</li>
                <pre className="code-snippet">{`div {
    height: 100px;
}`}</pre>

                <li><strong>margin:</strong> Sets the space outside an element.</li>
                <pre className="code-snippet">{`div {
    margin: 10px;
}`}</pre>

                <li><strong>padding:</strong> Sets the space inside an element.
                </li>
                <pre className="code-snippet">{`div {
    padding: 10px;
}`}</pre>

                <li><strong>border:</strong> Sets the border around an element.</li>
                <pre className="code-snippet">{`div {
    border: 1px solid black;
}`}</pre>
            </ul>

            <h2>Positioning Properties</h2>
            <ul>
                <li><strong>position:</strong> Specifies how an element is positioned.</li>
                <pre className="code-snippet">{`div {
    position: absolute;
}`}</pre>

                <li><strong>top, right, bottom, left:</strong> Specifies the position offsets.</li>
                <pre className="code-snippet">{`div {
    top: 10px;
    left: 10px;
}`}</pre>
            </ul>

            <h2>Display Properties</h2>
            <ul>
                <li><strong>display:</strong> Specifies the display behavior of an element.</li>
                <pre className="code-snippet">{`div {
    display: flex;
}`}</pre>
            </ul>

            <h2>Visibility Properties</h2>
            <ul>
                <li><strong>visibility:</strong> Controls the visibility of an element.</li>
                <pre className="code-snippet">{`div {
    visibility: hidden;
}`}</pre>

                <li><strong>opacity:</strong> Sets the transparency level of an element.</li>
                <pre className="code-snippet">{`div {
    opacity: 0.5;
}`}</pre>
            </ul>

            <h2>Quiz</h2>
            <ol>
                <li>What is the difference between margin and padding?</li>
                <li>Write an example of using a background image with a specific position.</li>
                <li>What does the opacity property do?</li>
                <li>How can you center-align text using CSS?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">MDN: CSS Reference</a></li>
                <li><a href="https://www.w3schools.com/css/css_reference.asp" target="_blank" rel="noopener noreferrer">W3Schools: CSS Reference</a></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS-Tricks: Flexbox Guide</a></li>
            </ul>
        </div>
    );
};

export default Properties;
