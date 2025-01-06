/* eslint-disable jsx-a11y/anchor-is-valid */
// JsComponents.jsx
import React, { useState } from "react";
import "../css/JsComponents.css";

const JsComponents = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div className="js-components">
            <h1>JavaScript Components in Bootstrap</h1>

            <h2>1. Modals</h2>
            <button className="btn btn-primary" onClick={toggleModal}>
                Open Modal
            </button>
            {modalVisible && (
                <div className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal Title</h5>
                                <button type="button" className="close" onClick={toggleModal}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal content goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <h2>2. Tooltips</h2>
            <button className="btn btn-secondary" data-toggle="tooltip" title="This is a tooltip!">
                Hover over me
            </button>

            <h2>3. Popovers</h2>
            <button className="btn btn-info" data-toggle="popover" title="Popover Title" data-content="This is the popover content!">
                Click for Popover
            </button>

            <h2>4. Carousels</h2>
            <div id="carouselExample" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <h2>5. Collapse</h2>
            <button className="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample">
                Toggle Collapse
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Collapsible content goes here.
                </div>
            </div>

            <h2>6. Scrollspy</h2>
            <nav id="navbar-example" className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Scrollspy Example</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#item1">Item 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#item2">Item 2</a>
                    </li>
                </ul>
            </nav>
            <div data-spy="scroll" data-target="#navbar-example" data-offset="0" className="scrollspy-example">
                <h4 id="item1">Item 1</h4>
                <p>Content for item 1...</p>
                <h4 id="item2">Item 2</h4>
                <p>Content for item 2...</p>
            </div>

            <h2>Quiz</h2>
            <form>
                <label>
                    1. Which component allows for modal windows?
                    <input type="checkbox" /> Modals
                </label>
                <label>
                    2. Which component is used for image sliders?
                    <input type="checkbox" /> Carousels
                </label>
                <button type="submit">Submit</button>
            </form>

            <h2>References</h2>
            <ul>
                <li><a href="https://getbootstrap.com/docs/4.5/components/modal/">Bootstrap Modals Documentation</a></li>
                <li><a href="https://getbootstrap.com/docs/4.5/components/carousel/">Bootstrap Carousels Documentation</a></li>
            </ul>
        </div>
    );
};

export default JsComponents;