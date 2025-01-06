import React from "react";
import "../css/Optimization.css";

const Optimization = () => {
  return (
    <div className="optimization-container">
      <h1>Performance Optimization in Bootstrap</h1>
      <div className="content">
        <h2>What is Performance Optimization?</h2>
        <p>
          Optimization in Bootstrap helps to improve performance by reducing the
          size and loading time of CSS and JS files. This is especially critical
          for web applications targeting multiple devices.
        </p>

        <h2>Tree-shaking Unused CSS/JS</h2>
        <p>
          Tree-shaking involves removing unused CSS and JavaScript from your
          project. Tools like Webpack and PurifyCSS help automate this process.
        </p>
        <pre>
          <code>{`
npm install purify-css
purifycss input.css --output clean.css
          `}</code>
        </pre>
        <p>
          Example: Remove unused classes from Bootstrap:
        </p>
        <pre>
          <code>{`
purifycss bootstrap.css index.html --min --info
          `}</code>
        </pre>

        <h2>Minimizing CSS and JS Bundles</h2>
        <p>
          Minify CSS and JS files to reduce file size. Use tools like
          <code>cssnano</code> or <code>uglify-js</code>.
        </p>
        <pre>
          <code>{`
npm install cssnano uglify-js
cssnano input.css output.min.css
uglify-js input.js -o output.min.js
          `}</code>
        </pre>

        <h3>Steps to Optimize:</h3>
        <ol>
          <li>Analyze your CSS and JS usage.</li>
          <li>Remove unnecessary dependencies.</li>
          <li>Minify your CSS and JS files.</li>
          <li>Use a CDN for serving Bootstrap.</li>
          <li>Implement lazy loading where possible.</li>
        </ol>
      </div>

      <div className="quiz-section">
        <h2>Quiz</h2>
        <p>Select the correct options:</p>
        <form>
          <label>
            <input type="checkbox" name="q1" value="1" />
            Tree-shaking removes unused CSS/JS.
          </label>
          <label>
            <input type="checkbox" name="q2" value="2" />
            Minifying files increases their size.
          </label>
          <label>
            <input type="checkbox" name="q3" value="3" />
            Lazy loading helps optimize performance.
          </label>
          <label>
            <input type="checkbox" name="q4" value="4" />
            Using a CDN increases loading time.
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
            <a href="https://purifycss.online/" target="_blank" rel="noreferrer">
              PurifyCSS
            </a>
          </li>
          <li>
            <a href="https://cssnano.co/" target="_blank" rel="noreferrer">
              cssnano
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Optimization;
