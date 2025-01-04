// BasicComponents.jsx
import React from "react";
import "../css/BasicComponents.css";

const BasicComponents = () => {
  return (
    <div className="basic-components">
      <h1>Bootstrap Basic Components</h1>
      
      <h2>1. Buttons</h2>
      <p>
        Buttons are an essential part of any UI. Bootstrap provides various styles and sizes of buttons.
      </p>
      <h3>Example:</h3>
      <pre>
      <code>
        {`<div className="example">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-success">Success Button</button>
      </div>`}
      </code>
      </pre>
      <div className="example">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-success">Success Button</button>
      </div>

      <h2>2. Alerts</h2>
      <p>
        Alerts are used to display important messages to users. Bootstrap alerts support different types of messages.
      </p>
      <h3>Example:</h3>
      <pre>
        <code>
            {` <div className="example">
        <div className="alert alert-success" role="alert">
          This is a success alert!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert!
        </div>
        <div className="alert alert-warning" role="alert">
          This is a warning alert!
        </div>
      </div>`}
        </code>
      </pre>
      <div className="example">
        <div className="alert alert-success" role="alert">
          This is a success alert!
        </div>
        <div className="alert alert-danger" role="alert">
          This is a danger alert!
        </div>
        <div className="alert alert-warning" role="alert">
          This is a warning alert!
        </div>
      </div>

      <h2>3. Badges</h2>
      <p>
        Badges are used to highlight additional information like counts or labels.
      </p>
      <h3>Example:</h3>
      <pre>
        <code>
            {` <div className="example">
        <button className="btn btn-primary">
          Notifications <span className="badge bg-secondary">4</span>
        </button>
        <h4>
          Tasks Completed <span className="badge bg-success">75%</span>
        </h4>
      </div>`}
        </code>
      </pre>
      <div className="example">
        <button className="btn btn-primary">
          Notifications <span className="badge bg-secondary">4</span>
        </button>
        <h4>
          Tasks Completed <span className="badge bg-success">75%</span>
        </h4>
      </div>

      <h2>Quiz</h2>
      <p>Test your knowledge of Bootstrap Basic Components:</p>
      <form id="quiz">
        <div className="quiz-item">
          <label>1. Which class is used for a primary button in Bootstrap?</label>
          <div>
            <input type="checkbox" id="btn-primary" name="q1" value="btn-primary" />
            <label htmlFor="btn-primary">btn-primary</label>
          </div>
          <div>
            <input type="checkbox" id="btn-main" name="q1" value="btn-main" />
            <label htmlFor="btn-main">btn-main</label>
          </div>
          <div>
            <input type="checkbox" id="btn-primary-color" name="q1" value="btn-primary-color" />
            <label htmlFor="btn-primary-color">btn-primary-color</label>
          </div>
        </div>

        <div className="quiz-item">
          <label>2. What is the purpose of the <code>badge</code> component?</label>
          <div>
            <input type="checkbox" id="highlight" name="q2" value="Highlight Information" />
            <label htmlFor="highlight">Highlight Information</label>
          </div>
          <div>
            <input type="checkbox" id="link" name="q2" value="Create Links" />
            <label htmlFor="link">Create Links</label>
          </div>
          <div>
            <input type="checkbox" id="image" name="q2" value="Embed Images" />
            <label htmlFor="image">Embed Images</label>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleQuizSubmit}>Submit</button>
      </form>

      <h2>References</h2>
      <ul>
        <li><a href="https://getbootstrap.com/docs/5.3/components/buttons/" target="_blank" rel="noreferrer">Bootstrap Buttons Documentation</a></li>
        <li><a href="https://getbootstrap.com/docs/5.3/components/alerts/" target="_blank" rel="noreferrer">Bootstrap Alerts Documentation</a></li>
        <li><a href="https://getbootstrap.com/docs/5.3/components/badge/" target="_blank" rel="noreferrer">Bootstrap Badges Documentation</a></li>
      </ul>
    </div>
  );

  function handleQuizSubmit() {
    const answers = document.querySelectorAll("#quiz input:checked");
    let score = 0;

    answers.forEach((answer) => {
      if (answer.value === "btn-primary" || answer.value === "Highlight Information") {
        score++;
      }
    });

    alert(`You scored ${score} out of 2`);
  }
};

export default BasicComponents;
