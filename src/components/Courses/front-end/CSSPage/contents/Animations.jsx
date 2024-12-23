import React from 'react';
import '../css/Animations.css';

const Animations = () => {
    return (
        <div className="animations-container">
            <h1>CSS Animations and Transitions</h1>
            <p>
                CSS Animations and Transitions are tools that bring life to your web designs by adding smooth and engaging motion.
                Animations allow you to create custom sequences of movements, while transitions enable gradual changes between element states.
            </p>

            <h2>Key Concepts</h2>
            <ul>
                <li><strong>@keyframes:</strong> Defines the sequence of animation steps.</li>
                <li><strong>Animation Properties:</strong> Controls the animation's duration, timing, and other aspects.</li>
                <li><strong>Transition:</strong> Creates smooth changes between different states of an element.</li>
            </ul>

            <h2>Examples</h2>

            <h3>1. Basic Animation</h3>
            <div className="example-section">
                <div className="animated-box">I Move!</div>
                <pre>
{`@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.animated-box {
    animation: slideIn 2s ease-in-out;
    background-color: #0073e6;
    color: white;
    padding: 20px;
    width: 150px;
    text-align: center;
}`}
                </pre>
            </div>

            <h3>2. Smooth Transition</h3>
            <div className="example-section">
                <button className="transition-button">Hover Over Me</button>
                <pre>
{`.transition-button {
    background-color: #0073e6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.transition-button:hover {
    background-color: #005bb5;
}`}
                </pre>
            </div>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of @keyframes in CSS?</li>
                <li>How do you control the duration of an animation?</li>
                <li>What does the transition property do?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation" target="_blank" rel="noreferrer">MDN: CSS Animations</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank" rel="noreferrer">MDN: CSS Transitions</a></li>
                <li><a href="https://css-tricks.com/almanac/properties/a/animation/" target="_blank" rel="noreferrer">CSS Tricks: Animations</a></li>
            </ul>
        </div>
    );
};

export default Animations;
