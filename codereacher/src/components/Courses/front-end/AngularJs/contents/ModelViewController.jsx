// ModelViewController.jsx
import React from 'react';
import '../css/ModelViewController.css';
import image1 from '../../assets/mvc.jpg';

const ModelViewController = () => {
    return (
        <div className="mvc-concept">
            <h1>Model-View-Controller (MVC) Architecture</h1>

            {/* Explanation of MVC Architecture */}
            <section>
                <h2>What is MVC?</h2>
                <p>
                    MVC (Model-View-Controller) is a software design pattern that separates an application into three main logical components:
                </p>
                <ul>
                    <li>
                        <strong>Model:</strong> The Model represents the data and business logic of the application. It manages the state and directly interacts with the database or APIs.
                    </li>
                    <li>
                        <strong>View:</strong> The View defines the visual representation of the data, such as HTML templates or UI elements, and renders data from the Model.
                    </li>
                    <li>
                        <strong>Controller:</strong> The Controller acts as an intermediary between the Model and the View. It handles user input, updates the Model, and refreshes the View accordingly.
                    </li>
                </ul>
            </section>

            {/* MVC Architecture Diagram */}
            <section>
                <h2>MVC Architecture</h2>
                <div className="mvc-diagram">
                    {/* Example Diagram */}
                    <img src={image1} alt="MVC Architecture Diagram" />
                    <p>The MVC architecture ensures modularity and maintainability by separating concerns.</p>
                </div>
            </section>

            {/* Example in AngularJS */}
            <section>
                <h2>Example: MVC in AngularJS</h2>
                <p>Here is an example of how MVC works in AngularJS:</p>

                <h3>1. Model</h3>
                <pre>
    <code>
        {`angular.module('myApp', []).controller('MyController', function($scope) {
    $scope.message = "Hello, MVC!"; // Data stored in the model
});`}
    </code>
</pre>


                <h3>2. View</h3>
                <pre>
    <code dangerouslySetInnerHTML={{
        __html: `
            &lt;div ng-app="myApp" ng-controller="MyController"&gt;
            &lt;h1&gt;{{message}}&lt;/h1&gt;
            &lt;/div&gt;
        `
    }}/>
</pre>


                <h3>3. Controller</h3>
                <pre>
                    <code>
                       {` angular.module('myApp').controller('MyController', function($scope) {
                        $scope.updateMessage = function (newMessage) {
                            $scope.message = newMessage; // Update model and refresh view
                        };
                    });`}
                    </code>
                </pre>
            </section>

            {/* Quiz Section */}
            <section>
                <h2>Quiz</h2>
                <ul>
                    <li>What is the primary role of the Model in MVC architecture?</li>
                    <li>How does the Controller interact with the View in AngularJS?</li>
                    <li>What are the benefits of using MVC in an application?</li>
                </ul>
            </section>

            {/* References Section */}
            <section>
                <h2>References</h2>
                <ul>
                    <li><a href="https://angularjs.org/" target="_blank" rel="noreferrer">AngularJS Official Documentation</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/MVC" target="_blank" rel="noreferrer">MDN Web Docs: MVC Architecture</a></li>
                    <li><a href="https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm" target="_blank" rel="noreferrer">TutorialsPoint: MVC Framework</a></li>
                </ul>
            </section>
        </div>
    );
};

export default ModelViewController;
