// Controllers.jsx
import React from 'react';
import '../css/Controllers.css';

const Controllers = () => {
    return (
        <div className="controllers">
            <h1>AngularJS Controllers</h1>
            <p>
                Controllers in AngularJS are JavaScript functions that handle the application logic and data for a specific part of the application.
                They act as the intermediary between the view and the model, making it easier to maintain and organize the code.
            </p>

            <h2>Responsibilities of Controllers</h2>
            <ul>
                <li>Initializing the model with default values.</li>
                <li>Handling user interactions such as button clicks or form submissions.</li>
                <li>Updating the view dynamically based on changes in the model.</li>
            </ul>

            <h2>Example: Using a Controller</h2>
            <pre>
                <code>
{`
angular.module('myApp', []).controller('MyController', function($scope) {
    // Initializing the model
    $scope.message = "Welcome to AngularJS Controllers!";

    // Function to update the model
    $scope.updateMessage = function(newMessage) {
        $scope.message = newMessage;
    };
});
`}
                </code>
            </pre>

            <h2>HTML Usage</h2>
            <pre>
                <code>
{`
<div ng-app="myApp" ng-controller="MyController">
    <h1>{{ message }}</h1> 
    {/* Displays the initial message */}

    <input type="text" ng-model="newMessage" placeholder="Enter a new message" /> 
    {/* Binds input to newMessage */}

    <button ng-click="updateMessage(newMessage)">Update Message</button>
    {/* Calls the updateMessage function */}
</div>
`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the main role of a controller in AngularJS?</li>
                <li>How do you define a controller in AngularJS?</li>
                <li>What directive is used to bind a controller to a specific part of the HTML?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://angularjs.org/" target="_blank" rel="noopener noreferrer">AngularJS Official Documentation</a></li>
                <li><a href="https://docs.angularjs.org/guide/controller" target="_blank" rel="noopener noreferrer">AngularJS Controller Guide</a></li>
            </ul>
        </div>
    );
};

export default Controllers;
