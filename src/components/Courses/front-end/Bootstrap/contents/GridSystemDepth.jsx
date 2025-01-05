// GridSystemDepth.jsx
import React from 'react';
import '../css/GridSystemDepth.css';

const GridSystemDepth = () => {
    return (
        <div className="grid-system-depth">
            <h1>Bootstrap Grid System (In-depth)</h1>
            
            <section>
                <h2>Nesting Columns</h2>
                <p>
                    Nesting allows you to create more complex layouts by placing a grid inside another column.
                    This is done by adding a <code>.row</code> inside a column and then defining additional <code>.col</code> classes inside it.
                </p>
                <pre>
                    <code>
                        {`<div className="example">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                Outer Column 1
                                <div className="row">
                                    <div className="col-6">Nested Column 1</div>
                                    <div className="col-6">Nested Column 2</div>
                                </div>
                            </div>
                            <div className="col-6">Outer Column 2</div>
                        </div>
                    </div>
                </div>`}
                    </code>
                </pre>
                <div className="example">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                Outer Column 1
                                <div className="row">
                                    <div className="col-6">Nested Column 1</div>
                                    <div className="col-6">Nested Column 2</div>
                                </div>
                            </div>
                            <div className="col-6">Outer Column 2</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Offset and Order Classes</h2>
                <p>
                    Offset classes add space to the left of a column, and order classes control the order of columns in a row.
                </p>
                <pre>
                    <code>
                        {` <div className="example">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Column 1</div>
                            <div className="col-4 offset-4">Column 2 (Offset by 4)</div>
                        </div>
                        <div className="row">
                            <div className="col-4 order-2">Column 1 (Order 2)</div>
                            <div className="col-4 order-1">Column 2 (Order 1)</div>
                        </div>
                    </div>
                </div>`}
                    </code>
                </pre>
                <div className="example">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">Column 1</div>
                            <div className="col-4 offset-4">Column 2 (Offset by 4)</div>
                        </div>
                        <div className="row">
                            <div className="col-4 order-2">Column 1 (Order 2)</div>
                            <div className="col-4 order-1">Column 2 (Order 1)</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Alignment Classes for Rows and Columns</h2>
                <p>
                    Alignment classes help you align rows and columns vertically and horizontally. Use classes like <code>.align-items-center</code> or <code>.justify-content-end</code>.
                </p>
                <pre>
                    <code>
                        {`<div className="example">
                    <div className="container">
                        <div className="row align-items-center" style={{ height: "100px", backgroundColor: "#f8f9fa" }}>
                            <div className="col">Aligned Center</div>
                        </div>
                        <div className="row justify-content-end" style={{ backgroundColor: "#e9ecef" }}>
                            <div className="col-4">Aligned End</div>
                        </div>
                    </div>
                </div>`}
                    </code>
                </pre>
                <div className="example">
                    <div className="container">
                        <div className="row align-items-center" style={{ height: "100px", backgroundColor: "#f8f9fa" }}>
                            <div className="col">Aligned Center</div>
                        </div>
                        <div className="row justify-content-end" style={{ backgroundColor: "#e9ecef" }}>
                            <div className="col-4">Aligned End</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Quiz</h2>
                <form id="quiz-form">
                    <p><strong>1. What is nesting in the grid system?</strong></p>
                    <label><input type="checkbox" name="q1" value="a" /> Adding a row inside a column</label><br />
                    <label><input type="checkbox" name="q1" value="b" /> Adding a column inside a row</label><br />
                    <label><input type="checkbox" name="q1" value="c" /> Adding multiple containers</label><br />

                    <p><strong>2. What does the class <code>offset-4</code> do?</strong></p>
                    <label><input type="checkbox" name="q2" value="a" /> Adds space to the right of a column</label><br />
                    <label><input type="checkbox" name="q2" value="b" /> Adds space to the left of a column</label><br />
                    <label><input type="checkbox" name="q2" value="c" /> Moves the column to the right by 4 units</label><br />

                    <button type="submit">Submit</button>
                </form>
            </section>

            <section>
                <h2>References</h2>
                <ul>
                    <li><a href="https://getbootstrap.com/docs/5.0/layout/grid/" target="_blank" rel="noreferrer">Bootstrap Grid Documentation</a></li>
                </ul>
            </section>
        </div>
    );
};

export default GridSystemDepth;
