import React from "react";
import "../css/Themes.css";

const Themes = () => {
  return (
    <div className="themes-container">
      <h1>Bootstrap Themes</h1>
      <p>
        Themes in Bootstrap allow you to customize and enhance the design of your
        web application with ease. You can use third-party themes or build your
        custom themes to suit your brand and design preferences.
      </p>

      <section>
        <h2>Using Third-Party Themes</h2>
        <p>
          Third-party themes are pre-built Bootstrap themes that you can purchase or download
          for free. These themes save time and effort, as they come with pre-designed
          components and layouts.
        </p>
        <ul>
          <li>Find third-party themes on marketplaces like ThemeForest, StartBootstrap, or Bootswatch.</li>
          <li>Include the theme's CSS file in your project.</li>
          <li>Ensure compatibility with your Bootstrap version.</li>
        </ul>

        <code>
          &lt;link rel="stylesheet" href="path/to/theme.css" /&gt;
        </code>
      </section>

      <section>
        <h2>Building Custom Themes</h2>
        <p>
          Create custom themes by modifying Bootstrap's SCSS variables and files.
          This allows you to achieve a unique look while retaining the functionality
          of Bootstrap components.
        </p>
        <h3>Steps to Build Custom Themes:</h3>
        <ol>
          <li>Install Bootstrap's source files via npm or download them manually.</li>
          <li>Modify the <code>_variables.scss</code> file to customize colors, typography, and other settings.</li>
          <li>Compile the SCSS files using a preprocessor like Sass.</li>
          <li>Include the compiled CSS in your project.</li>
        </ol>

        <code>
          $primary: #ff5733;  // Change the primary color
          $font-family-base: 'Roboto', sans-serif;  // Update the base font family
          @import "bootstrap/scss/bootstrap";
        </code>
      </section>

      <section>
        <h2>Quiz</h2>
        <form>
          <fieldset>
            <legend>Select the correct statements about Bootstrap themes:</legend>

            <div>
              <input type="checkbox" id="q1" name="themeQuiz" value="1" />
              <label htmlFor="q1">Themes can be customized using SCSS variables.</label>
            </div>

            <div>
              <input type="checkbox" id="q2" name="themeQuiz" value="2" />
              <label htmlFor="q2">Bootstrap themes are incompatible with third-party plugins.</label>
            </div>

            <div>
              <input type="checkbox" id="q3" name="themeQuiz" value="3" />
              <label htmlFor="q3">You can purchase third-party themes from marketplaces.</label>
            </div>

            <div>
              <input type="checkbox" id="q4" name="themeQuiz" value="4" />
              <label htmlFor="q4">Custom themes require modifying JavaScript files.</label>
            </div>

            <button type="button" onClick={handleQuizSubmit}>Submit</button>
          </fieldset>
        </form>
      </section>

      <section>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://getbootstrap.com/docs/5.3/customize/overview/" target="_blank" rel="noreferrer">
              Bootstrap Customization Guide
            </a>
          </li>
          <li>
            <a href="https://bootswatch.com/" target="_blank" rel="noreferrer">
              Bootswatch: Free Bootstrap Themes
            </a>
          </li>
          <li>
            <a href="https://themeforest.net/" target="_blank" rel="noreferrer">
              ThemeForest: Premium Themes
            </a>
          </li>
        </ul>
      </section>
    </div>
  );

  function handleQuizSubmit() {
    alert("Correct answers: 1 and 3. Themes can be customized using SCSS variables and purchased from marketplaces.");
  }
};

export default Themes;