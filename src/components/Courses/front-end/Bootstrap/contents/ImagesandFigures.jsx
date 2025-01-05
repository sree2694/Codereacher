// ImagesandFigures.jsx
import React from "react";
import "../css/ImagesandFigures.css";

const ImagesandFigures = () => {
    return (
        <div className="images-and-figures">
            <h1>Images and Figures</h1>

            <section>
                <h2>Responsive Images</h2>
                <p>
                    Bootstrap provides utility classes to make images responsive. Use the
                    <code>.img-fluid</code> class to ensure images scale properly with the
                    parent container.
                </p>
                <pre>
                    <code>
                        {` <div className="example">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Responsive Example"
                        className="img-fluid"
                    />
                </div>`}
                    </code>
                </pre>
                <div className="example">
                    <img
                        src="https://via.placeholder.com/600x300"
                        alt="Responsive Example"
                        className="img-fluid"
                    />
                </div>
            </section>

            <section>
                <h2>Image Shapes</h2>
                <p>
                    Bootstrap supports various image shapes using utility classes:
                </p>
                <ul>
                    <li><code>.rounded</code>: Adds rounded corners to the image.</li>
                    <li><code>.rounded-circle</code>: Creates a circular image.</li>
                    <li><code>.img-thumbnail</code>: Adds a border and padding to create a thumbnail-style image.</li>
                </ul>
                <pre>
                    <code>{`<div className="example">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Rounded"
                        className="rounded"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Circle"
                        className="rounded-circle"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Thumbnail"
                        className="img-thumbnail"
                    />
                </div>`}</code>
                </pre>
                <div className="example">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Rounded"
                        className="rounded"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Circle"
                        className="rounded-circle"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Thumbnail"
                        className="img-thumbnail"
                    />
                </div>
            </section>

            <section>
                <h2>Figure Captions</h2>
                <p>
                    Use the <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements for semantic
                    content. Bootstrap's <code>.figure</code> class enhances their styling.
                </p>
                <pre>
                    <code>
                        {`<div className="example">
                    <figure className="figure">
                        <img
                            src="https://via.placeholder.com/300x200"
                            className="figure-img img-fluid rounded"
                            alt="Example"
                        />
                        <figcaption className="figure-caption">
                            A caption for the above image.
                        </figcaption>
                    </figure>
                </div>`}
                    </code>
                </pre>
                <div className="example">
                    <figure className="figure">
                        <img
                            src="https://via.placeholder.com/300x200"
                            className="figure-img img-fluid rounded"
                            alt="Example"
                        />
                        <figcaption className="figure-caption">
                            A caption for the above image.
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h2>Quiz</h2>
                <p>Test your knowledge about Bootstrap images and figures:</p>
                <form className="quiz">
                    <div>
                        <label>
                            <input type="checkbox" name="q1" value="1" />
                            The <code>.img-fluid</code> class is used to make images responsive.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="q2" value="2" />
                            The <code>.rounded-circle</code> class makes an image have rounded corners.
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="q3" value="3" />
                            The <code>.figure-caption</code> class adds captions to figures.
                        </label>
                    </div>
                    <button type="button" onClick={() => alert("Check the documentation for correct answers!")}>Submit</button>
                </form>
            </section>

            <section>
                <h2>References</h2>
                <ul>
                    <li>
                        <a href="https://getbootstrap.com/docs/5.3/content/images/" target="_blank" rel="noopener noreferrer">
                            Bootstrap Images Documentation
                        </a>
                    </li>
                    <li>
                        <a href="https://getbootstrap.com/docs/5.3/content/figures/" target="_blank" rel="noopener noreferrer">
                            Bootstrap Figures Documentation
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default ImagesandFigures;