import React from "react";
import "../css/AdvancedLayouts.css";

const AdvancedLayouts = () => {
  return (
    <div className="advanced-layouts-container">
      <h1>Advanced Layouts in Bootstrap</h1>
      <div className="content">
        <h2>Responsive Cards and Card Decks</h2>
        <p>
          Bootstrap provides powerful utilities to create responsive cards and card decks. These cards adapt to different screen sizes and can be styled with a variety of classes.
        </p>
        <pre><code>
            {`<div className="card-deck">
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is a card description.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is another card description.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is yet another card description.</p>
            </div>
          </div>
        </div>`}</code></pre>
        <div className="card-deck">
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is a card description.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is another card description.</p>
            </div>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Card 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is yet another card description.</p>
            </div>
          </div>
        </div>

        <h2>Building Complex Layouts with Flexbox</h2>
        <p>
          Flexbox utilities in Bootstrap allow you to create advanced layouts with ease. You can align items, justify content, and create responsive grids.
        </p>
        <pre>
            <code>{`<div className="flex-container">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
        </div>`}</code>
        </pre>
        <div className="flex-container">
          <div className="flex-item">Item 1</div>
          <div className="flex-item">Item 2</div>
          <div className="flex-item">Item 3</div>
        </div>

        <h2>Building Complex Layouts with Grid Utilities</h2>
        <p>
          Bootstrap's grid system provides a flexible layout structure with rows and columns. Using offsets, orders, and alignment classes, you can build intricate designs.
        </p>
        <pre>
            <code>
                {`<div className="row">
          <div className="col-md-4">Column 1</div>
          <div className="col-md-4">Column 2</div>
          <div className="col-md-4">Column 3</div>
        </div>`}
            </code>
        </pre>
        <div className="row">
          <div className="col-md-4">Column 1</div>
          <div className="col-md-4">Column 2</div>
          <div className="col-md-4">Column 3</div>
        </div>
      </div>

      <div className="quiz-section">
        <h2>Quiz</h2>
        <p>Select the correct options:</p>
        <form>
          <label>
            <input type="checkbox" name="q1" value="1" />
            Bootstrap cards are responsive by default.
          </label>
          <label>
            <input type="checkbox" name="q2" value="2" />
            Flexbox utilities cannot be used with cards.
          </label>
          <label>
            <input type="checkbox" name="q3" value="3" />
            The grid system is based on a 12-column layout.
          </label>
          <label>
            <input type="checkbox" name="q4" value="4" />
            Card decks automatically align content vertically.
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="references-section">
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://getbootstrap.com/docs" target="_blank" rel="noreferrer">
              Official Bootstrap Documentation
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/docs/5.0/components/card/" target="_blank" rel="noreferrer">
              Bootstrap Cards
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/docs/5.0/utilities/flex/" target="_blank" rel="noreferrer">
              Flex Utilities
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdvancedLayouts;
