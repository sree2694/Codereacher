// Routing.jsx
import React from 'react';
import '../css/Routing.css';

const Routing = () => {
    return (
        <div className="routing-concept">
            <h1>AngularJS Routing</h1>
            <p>
                AngularJS provides a powerful routing mechanism that allows developers to create single-page applications (SPAs). 
                By using AngularJS routing, you can define multiple views and bind them to different URLs without requiring a full-page reload.
            </p>

            <h2>1. Why Use Routing?</h2>
            <ul>
                <li>Improves user experience by avoiding full-page reloads.</li>
                <li>Allows you to manage navigation within the application effectively.</li>
                <li>Enables modular development by breaking the app into multiple views.</li>
            </ul>

            <h2>2. Setting Up Routing</h2>
            <p>To enable routing in AngularJS, include the <code>ngRoute</code> module in your application.</p>
            <pre>
                <code>
                    {`
// Include ngRoute as a dependency
angular.module('myApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});`}
                </code>
            </pre>

            <h2>3. Example Application</h2>
            <p>Let’s create a simple app with two views: Home and About.</p>

            <h3>HomeController</h3>
            <pre>
                <code>{`
angular.module('myApp').controller('HomeController', function($scope) {
    $scope.message = "Welcome to the Home Page!";
});`}
                </code>
            </pre>

            <h3>AboutController</h3>
            <pre>
                <code>{`
angular.module('myApp').controller('AboutController', function($scope) {
    $scope.message = "Learn more About Us here.";
});`}
                </code>
            </pre>

            <h3>HTML Structure</h3>
            <pre>
                <code>{`
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>AngularJS Routing Example</title>
</head>
<body>
    <a href="#/">Home</a>
    <a href="#/about">About</a>

    <div ng-view></div>

    <!-- Include AngularJS and ngRoute -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular-route.min.js"></script>
    <script src="app.js"></script>
</body>
</html>`}
                </code>
            </pre>

            <h2>4. Quiz</h2>
            <ul>
                <li>What is the purpose of the <code>ngRoute</code> module?</li>
                <li>How do you define a route in AngularJS?</li>
                <li>What is the significance of the <code>ng-view</code> directive?</li>
            </ul>

            <h2>5. References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/api/ngRoute" target="_blank" rel="noreferrer">AngularJS ngRoute Documentation</a></li>
                <li><a href="https://www.w3schools.com/angular/angular_routing.asp" target="_blank" rel="noreferrer">AngularJS Routing Tutorial - W3Schools</a></li>
            </ul>
        </div>
    );
};

export default Routing;
