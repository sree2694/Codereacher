// Templating.jsx
import React from 'react';
import '../css/Templating.css';

const Templating = () => {
    return (
        <div className="templating">
            <p>
                AngularJS uses HTML as its templating language, enabling developers to design the UI with familiar syntax.
                The templates are dynamic and interactive, supporting data binding, directives, and expressions to build responsive applications.
            </p>

            <h2>Features of AngularJS Templating</h2>
            <ul>
                <li><strong>Data Binding:</strong> Automatically syncs data between the model and view.</li>
                <li><strong>Directives:</strong> Enhances HTML with built-in and custom functionalities.</li>
                <li><strong>Expressions:</strong> Embeds logic directly into the template for dynamic behavior.</li>
                <li><strong>Reusable Components:</strong> Create templates for modular and maintainable code.</li>
            </ul>

            <h2>Example: Data Binding in Templates</h2>
            <pre>
                <code>
                    {`
                    <!DOCTYPE html>
                    <html ng-app="myApp">
                    <head>
                        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
                    </head>
                    <body>
                        <div ng-controller="MyController">
                            <h1>Welcome, {{ name }}!</h1> {/* Displays the model data */}
                            <input type="text" ng-model="name" placeholder="Enter your name" /> {/* Two-way binding */}
                        </div>

                        <script>
                            angular.module('myApp', []).controller('MyController', function($scope) {
                                $scope.name = "AngularJS User"; // Initialize the model
                            });
                        </script>
                    </body>
                    </html>`}
                </code>
            </pre>

            <h2>Advantages of AngularJS Templating</h2>
            <ul>
                <li><strong>Ease of Use:</strong> Leverages HTML, which is intuitive for web developers.</li>
                <li><strong>Dynamic Content:</strong> Enables interactive and responsive UIs.</li>
                <li><strong>Reusable Components:</strong> Encourages modularity and code reusability.</li>
                <li><strong>Extensibility:</strong> Allows custom directives and components for tailored solutions.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What is the role of directives in AngularJS templating?</li>
                <li>How does AngularJS support two-way data binding in templates?</li>
                <li>Give an example of an AngularJS expression used in a template.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://angularjs.org/" target="_blank" rel="noreferrer">AngularJS Official Website</a></li>
                <li><a href="https://docs.angularjs.org/guide/templates" target="_blank" rel="noreferrer">AngularJS Templates Guide</a></li>
                <li><a href="https://www.tutorialspoint.com/angularjs/angularjs_templates.htm" target="_blank" rel="noreferrer">AngularJS Templating Tutorial</a></li>
            </ul>
        </div>
    );
};

export default Templating;
