// Icons.jsx
import React from 'react';
import '../css/Icons.css';

const Icons = () => {
    return (
        <div className="icons-container">
            <h1>Bootstrap Icons</h1>

            <h2>Introduction</h2>
            <p>
                Bootstrap Icons is an open-source icon library designed for use with Bootstrap. It provides a comprehensive set of icons that can easily be customized and included in your projects.
            </p>

            <h2>Adding Bootstrap Icons</h2>
            <p>To use Bootstrap Icons in your project, you can:</p>
            <ol>
                <li>
                    <strong>Via CDN:</strong>
                    <pre>
                        <code>
                            &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"&gt;
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Download:</strong>
                    Download the icon library from the <a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">official Bootstrap Icons website</a> and include the necessary files in your project.
                </li>
            </ol>

            <h2>Using Bootstrap Icons</h2>
            <p>
                Add icons to your HTML using the <code>&lt;i&gt;</code> tag with the appropriate class. For example:
            </p>
            <pre>
                <code>
                    &lt;i class="bi bi-alarm"&gt;&lt;/i&gt;
                </code>
            </pre>
            <p>The above code renders an alarm icon.</p>

            <h2>Examples</h2>
            <pre>{`<div className="icon-examples">
                <i className="bi bi-alarm"></i> Alarm Icon <br />
                <i className="bi bi-battery-half"></i> Battery Icon <br />
                <i className="bi bi-camera"></i> Camera Icon
            </div>`}</pre>
            <div className="icon-examples">
                <i className="bi bi-alarm"></i> Alarm Icon <br />
                <i className="bi bi-battery-half"></i> Battery Icon <br />
                <i className="bi bi-camera"></i> Camera Icon
            </div>


            <h2>Quiz</h2>
            <form className="quiz-form">
                <p>1. Which HTML tag is used to add Bootstrap Icons?</p>
                <div>
                    <label><input type="checkbox" name="q1" value="a" /> &lt;icon&gt;</label><br />
                    <label><input type="checkbox" name="q1" value="b" /> &lt;i&gt;</label><br />
                    <label><input type="checkbox" name="q1" value="c" /> &lt;img&gt;</label><br />
                </div>
                <p>2. Where can you download the Bootstrap Icons library?</p>
                <div>
                    <label><input type="checkbox" name="q2" value="a" /> From the Bootstrap Icons website</label><br />
                    <label><input type="checkbox" name="q2" value="b" /> From npm</label><br />
                    <label><input type="checkbox" name="q2" value="c" /> From any third-party icon provider</label><br />
                </div>
                <button type="submit">Submit</button>
            </form>

            <h2>References</h2>
            <ul>
                <li><a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Icons Official Documentation</a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Framework</a></li>
            </ul>
        </div>
    );
};

export default Icons;
