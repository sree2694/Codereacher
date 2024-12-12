import React from 'react';
import '../css/GetStarted.css';

const GetStarted = () => {
    return (
        <div className="get-started">
            <h2>Getting Started with React</h2>

            <h3>1. Setting up a React Environment</h3>
            <p>
                To set up a React environment, you'll need Node.js and npm (Node Package Manager) installed. Follow these steps:
            </p>
            <ol>
                <li>Download and install Node.js from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org</a>.</li>
                <li>Verify installation by running <code>node -v</code> and <code>npm -v</code> in your terminal.</li>
                <li>Install the React app template using <code>npx create-react-app my-app</code>.</li>
                <li>Navigate to your project folder with <code>cd my-app</code>.</li>
            </ol>

            <h3>2. Run the React Application</h3>
            <p>
                After setting up the environment, you can start the development server:
            </p>
            <pre>
{`cd my-app
npm start`}
            </pre>
            <p>
                This will open your application in the browser at <code>http://localhost:3000</code>. The page will reload automatically whenever you make changes to your code.
            </p>

            <h3>3. Modify the React Application</h3>
            <p>
                Let's make a simple modification to the React application:
            </p>
            <ol>
                <li>Open the <code>src/App.js</code> file in your favorite code editor.</li>
                <li>Replace the contents of the <code>&lt;div className="App"&gt;</code> element with:
                    <pre>
{`<h1>Welcome to My First React App!</h1>
<p>This is a modified version of the default template.</p>`}
                    </pre>
                </li>
                <li>Save the file, and your browser will automatically update to display the changes.</li>
            </ol>

            <h3>4. Upgrade to React 19</h3>
            <p>
                React 19 introduces new features and improvements. Follow these steps to upgrade your application.
            </p>

            <h4>Step 1: Install React 19</h4>
            <p>
                Run the following command to update React and React DOM to version 19:
            </p>
            <pre>
{`npm install react@19 react-dom@19`}
            </pre>
            <p>
                Ensure that your <code>package.json</code> reflects the updated versions:
            </p>
            <pre>
{`
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
`}
            </pre>

            <h4>Step 2: Use the New Root API</h4>
            <p>
                React 19 introduces a new root API for rendering components. Update your <code>src/index.js</code> file:
            </p>
            <p>Before:</p>
            <pre>
{`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`}
            </pre>
            <p>After:</p>
            <pre>
{`import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);`}
            </pre>
            <p>
                This new API ensures better support for features like concurrent rendering.
            </p>

            <h3>Conclusion</h3>
            <p>
                You've now set up a React environment, run your application, modified it, and upgraded it to React 19!
                You're ready to explore more advanced features and build robust applications.
            </p>

            <h3>Additional Resources</h3>
            <ul>
                <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Official React Documentation</a></li>
                <li><a href="https://reactjs.org/blog/2023/06/15/react-v19.html" target="_blank" rel="noopener noreferrer">React 19 Release Notes</a></li>
                <li><a href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noopener noreferrer">Create React App Guide</a></li>
            </ul>
        </div>
    );
};

export default GetStarted;