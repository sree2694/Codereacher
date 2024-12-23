import React from 'react';
import '../css/Transforms.css';

const Transforms = () => {
    return (
        <div className="transforms-container">
            <h1>CSS Transforms</h1>
            <p>
                CSS Transforms allow you to manipulate the size, shape, and position of elements. These transformations include 2D and 3D effects such as scaling, rotating, translating, and skewing elements.
            </p>

            <h2>2D Transforms</h2>
            <p>
                Use 2D transforms to alter the appearance of elements along the X and Y axes. Here are some common transformations:
            </p>
            <ul>
                <li><b>rotate(deg):</b> Rotates the element by the specified degree.</li>
                <li><b>scale(x, y):</b> Scales the element by the specified factors along the X and Y axes.</li>
                <li><b>translate(x, y):</b> Moves the element by the specified distances along the X and Y axes.</li>
                <li><b>skew(x, y):</b> Skews the element by the specified angles along the X and Y axes.</li>
            </ul>

            <div className="example-section">
                <h2>Example: 2D Transform</h2>
                <div className="transformed-box">Hover Me!</div>
                <pre>
{` .transformed-box {
    background-color: #ff5722;
    color: white;
    padding: 20px;
    width: 150px;
    text-align: center;
    transition: transform 0.5s ease;
}

.transformed-box:hover {
    transform: rotate(45deg) scale(1.2);
}`}
                </pre>
            </div>

            <h2>3D Transforms</h2>
            <p>
                Use 3D transforms to manipulate elements along the X, Y, and Z axes. One of the most popular 3D effects is the card flip.
            </p>

            <div className="example-section">
                <h2>Example: 3D Transform</h2>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">Front</div>
                        <div className="card-back">Back</div>
                    </div>
                </div>
                <pre>
{` .card {
    width: 200px;
    height: 300px;
    background-color: #ff5722;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    margin: 20px auto;
}

.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}`}
                </pre>
            </div>

            <h2>Quiz</h2>
            <p>Test your understanding of CSS Transforms:</p>
            <ul>
                <li>What property is used to apply a 3D effect to an element?</li>
                <li>How does the <b>translate()</b> function affect an element's position?</li>
                <li>What is the purpose of the <b>perspective</b> property in 3D transforms?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">MDN Web Docs on CSS Transforms</a></li>
                <li><a href="https://css-tricks.com/almanac/properties/t/transform/">CSS-Tricks Guide to Transforms</a></li>
            </ul>
        </div>
    );
};

export default Transforms;
