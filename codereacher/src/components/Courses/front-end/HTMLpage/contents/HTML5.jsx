import React from 'react';
import '../css/HTML5.css';

const HTML5 = () => {
    return (
        <div className="html5">
            <h2>Introduction to HTML5</h2>
            <p>
                HTML5 is the latest version of the HTML standard, offering new features and capabilities for creating modern, interactive, and dynamic web applications. It introduces new semantic elements, APIs, and multimedia support, making it a powerful tool for developers.
            </p>

            <h2>Key Features of HTML5</h2>

            <h3>1. Canvas</h3>
            <p>
                The <code>&lt;canvas&gt;</code> element is used to draw graphics on the web. It provides a 2D rendering context that allows for the creation of shapes, images, and animations directly in the browser.
            </p>
            <pre className="code-snippet">
{`<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

<script>
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 25, 100, 50);
</script>`}
            </pre>

            <h3>2. Geolocation</h3>
            <p>
                Geolocation API allows web applications to access the user’s geographical location, enabling location-based features.
            </p>
            <pre className="code-snippet">
{`<button onclick="getLocation()">Get Location</button>
<p id="location"></p>

<script>
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('location').innerHTML =
                    'Latitude: ' + position.coords.latitude +
                    '<br>Longitude: ' + position.coords.longitude;
            });
        } else {
            document.getElementById('location').innerHTML = 'Geolocation is not supported.';
        }
    }
</script>`}
            </pre>

            <h3>3. Local Storage</h3>
            <p>
                Local Storage allows web applications to store data locally on the user’s browser with no expiration time. This data is persistent even after the browser is closed.
            </p>
            <pre className="code-snippet">
{`<button onclick="saveData()">Save Data</button>
<button onclick="loadData()">Load Data</button>
<p id="data"></p>

<script>
    function saveData() {
        localStorage.setItem('name', 'John Doe');
        alert('Data Saved');
    }
    function loadData() {
        var data = localStorage.getItem('name');
        document.getElementById('data').innerHTML = data ? data : 'No Data Found';
    }
</script>`}
            </pre>

            <h2>Quiz</h2>
            <ol>
                <li>What is the purpose of the <code>&lt;canvas&gt;</code> element in HTML5?</li>
                <li>Explain how the Geolocation API can be used in web applications.</li>
                <li>What is the difference between Local Storage and Session Storage?</li>
                <li>Provide an example of using Local Storage to save user preferences.</li>
            </ol>

            <h2>References</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas" target="_blank" rel="noopener noreferrer">MDN Web Docs - Canvas</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" target="_blank" rel="noopener noreferrer">MDN Web Docs - Geolocation API</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">MDN Web Docs - Local Storage</a></li>
            </ul>
        </div>
    );
};

export default HTML5;
