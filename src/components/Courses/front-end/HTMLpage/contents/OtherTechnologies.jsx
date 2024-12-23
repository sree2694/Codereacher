import React from 'react';
import '../css/OtherTechnologies.css';

const OtherTechnologies = () => {
    return (
        <div className="other-technologies">
            <h1>Integration with Other Technologies</h1>

            <h2>Introduction</h2>
            <p>
                HTML is not a standalone technology; its true power lies in its ability to integrate seamlessly with other web technologies. From client-side scripting with JavaScript to server-side processing with frameworks like Node.js, HTML is the foundation for creating modern, dynamic, and interactive web applications.
            </p>

            <h2>Key Integration Points</h2>

            <h3>1. HTML and CSS</h3>
            <p>
                HTML structures the content, while CSS styles it. The integration of CSS allows developers to create visually appealing and responsive designs.
            </p>
            <pre className="code-snippet">
{`<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 class="title">Welcome to HTML and CSS</h1>
</body>
</html>`}
            </pre>

            <h3>2. HTML and JavaScript</h3>
            <p>
                JavaScript enhances the interactivity of HTML documents. From form validation to creating dynamic content, JavaScript is an essential partner for HTML.
            </p>
            <pre className="code-snippet">
{`<html>
<body>
    <button onclick="alert('Hello World!')">Click Me</button>
</body>
</html>`}
            </pre>

            <h3>3. HTML and APIs</h3>
            <p>
                HTML can work with APIs to fetch and display dynamic content, enabling developers to create feature-rich web applications.
            </p>
            <pre className="code-snippet">
{`<html>
<body>
    <div id="data"></div>
    <script>
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('data').innerText = JSON.stringify(data);
            });
    </script>
</body>
</html>`}
            </pre>

            <h3>4. HTML and Backend Technologies</h3>
            <p>
                HTML integrates with backend technologies like Node.js, Python (Flask/Django), and PHP to create full-stack applications.
            </p>

            <h3>5. HTML and Databases</h3>
            <p>
                By working with server-side scripts, HTML can display data fetched from databases like MySQL, MongoDB, or Firebase.
            </p>

            <h2>Examples</h2>
            <h3>Dynamic Content with JavaScript</h3>
            <pre className="code-snippet">
{`<html>
<body>
    <div id="content"></div>
    <script>
        document.getElementById('content').innerText = 'Dynamic Content Loaded';
    </script>
</body>
</html>`}
            </pre>

            <h3>HTML and Node.js</h3>
            <p>
                Example of serving HTML using Node.js:
            </p>
            <pre className="code-snippet">
{`const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Node.js</h1>');
});
server.listen(3000);`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>How does CSS enhance the functionality of HTML?</li>
                <li>Give an example of how JavaScript can make HTML interactive.</li>
                <li>What is the role of APIs when working with HTML?</li>
                <li>How can HTML integrate with backend technologies like Node.js?</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN Web Docs: HTML</a></li>
                <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">W3Schools: HTML</a></li>
                <li><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">GeeksforGeeks: Web Development</a></li>
            </ul>
        </div>
    );
};

export default OtherTechnologies;
