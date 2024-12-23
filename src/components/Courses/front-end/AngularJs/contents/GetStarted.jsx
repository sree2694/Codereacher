import React from 'react';
import '../css/GetStarted.css';

const GetStarted = () => {
    return (
        <div className="angular-get-started-container">
            <h1>Getting Started with AngularJS</h1>

            <h2>What is AngularJS?</h2>
            <p>
                AngularJS is a powerful JavaScript framework developed by Google that allows developers to create
                dynamic, single-page web applications. It simplifies the development process by extending the
                capabilities of HTML and providing powerful tools for building interactive applications.
            </p>

            <h2>AngularJS Extends HTML</h2>
            <p>
                AngularJS enhances HTML by introducing new attributes, tags, and expressions that allow you to bind data
                dynamically and create reusable components. It bridges the gap between static HTML and dynamic web
                applications.
            </p>

            <h2>AngularJS Directives</h2>
            <p>Directives are special markers in the HTML that tell AngularJS to do something specific. Some commonly
                used directives include:</p>
            <ul>
                <li><strong>ng-app:</strong> Defines an AngularJS application.</li>
                <li><strong>ng-model:</strong> Binds the value of HTML controls (like input, select) to application
                    data.
                </li>
                <li><strong>ng-repeat:</strong> Loops through arrays or objects to create a dynamic list of elements.
                </li>
            </ul>

            <h2>AngularJS Expressions</h2>
            <p>
                AngularJS expressions are used to bind data to HTML elements. They are enclosed in single curly
                braces <code>{`{expression}`}</code>.
            </p>
            <p>Example:</p>
            <pre>
    <code>
{`<p>My name is {name}</p>`}
    </code>
</pre>


            <h2>AngularJS Applications</h2>
            <p>
                AngularJS enables developers to build highly dynamic and scalable web applications. It supports features
                like two-way data binding, dependency injection, and modular development, making it an excellent choice
                for single-page applications.
            </p>

            <h2>Examples</h2>
            <h3>Simple AngularJS Application</h3>
            <pre>
                <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script><title></title>
</head>
<body ng-app="">
    <p>Enter your name: <input type="text" ng-model="name"></p>
    <h1>Hello {{name}}</h1>
</body>
</html>`}
                </code>
            </pre>

            <h3>Using Directives and Expressions</h3>
            <pre>
                <code>
{`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script><title>Directives and Expressions</title>
</head>
<body ng-app="">
    <ul>
        <li ng-repeat="item in items">{{item}}</li>
    </ul>
    <script>
        angular.module('myApp', []).controller('myCtrl', function($scope) {
            $scope.items = ['Item 1', 'Item 2', 'Item 3'];
        });
    </script>
</body>
</html>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of the <code>ng-app</code> directive?</li>
                <li>How does AngularJS extend HTML functionality?</li>
                <li>Explain the concept of two-way data binding with an example.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://angularjs.org/" target="_blank" rel="noopener noreferrer">
                        AngularJS Official Documentation
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
                       rel="noopener noreferrer">
                        Learn JavaScript - MDN
                    </a>
                </li>
                <li>
                    <a href="https://www.w3schools.com/angular/" target="_blank" rel="noopener noreferrer">
                        AngularJS Tutorials - W3Schools
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default GetStarted;
