import React from 'react';
import '../css/ValueCSS.css';

const Values = () => {
    return (
        <div className="values-container">
            <h1>CSS Core Concepts: Values</h1>
            <p>
                CSS values are the parameters given to properties to define their behavior. They are categorized into keywords and units.
            </p>

            <h2>Keywords</h2>
            <ul>
                <li>
                    <strong>inherit:</strong> This keyword makes the property adopt the value of its parent element. Useful for maintaining consistency.
                </li>
                <li>
                    <strong>initial:</strong> Resets the property to its default initial value as defined by the CSS specification.
                </li>
                <li>
                    <strong>unset:</strong> Removes the inherited value or sets it to the initial value if inheritance doesn't apply.
                </li>
            </ul>

            <h3>Example</h3>
            <div className="keyword-example">
                <p className="inherit-example">This paragraph inherits the font-size of its parent.</p>
                <p className="initial-example">This paragraph uses the initial keyword to reset its font-style.</p>
            </div>

            <h2>Units</h2>
            <ul>
                <li><strong>px:</strong> Pixels, an absolute unit often used for precise layouts.</li>
                <li><strong>em:</strong> Relative to the font size of its parent element.</li>
                <li><strong>rem:</strong> Relative to the root element's font size.</li>
                <li><strong>vh:</strong> 1% of the viewport's height.</li>
                <li><strong>vw:</strong> 1% of the viewport's width.</li>
                <li><strong>%:</strong> Relative to the parent element's size.</li>
            </ul>

            <h3>Example</h3>
            <div className="unit-example">
                <div className="box px-box">Width in px</div>
                <div className="box em-box">Width in em</div>
                <div className="box rem-box">Width in rem</div>
                <div className="box vh-box">Height in vh</div>
                <div className="box vw-box">Width in vw</div>
            </div>

            <h2>Quiz</h2>
            <ol>
                <li>What is the difference between the <code>em</code> and <code>rem</code> units?</li>
                <li>Which keyword would you use to reset a property to its default value?</li>
                <li>How does the <code>vh</code> unit behave on different devices?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/inherit" target="_blank" rel="noopener noreferrer">MDN: CSS inherit</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/initial" target="_blank" rel="noopener noreferrer">MDN: CSS initial</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length" target="_blank" rel="noopener noreferrer">MDN: CSS length</a></li>
            </ul>
        </div>
    );
};

export default Values;