// Services.jsx
import React from 'react';
import '../css/Services.css';

const Services = () => {
    return (
        <div className="services">
            <h2>Introduction to Services</h2>
            <p>
                AngularJS services are reusable blocks of code designed to perform specific tasks. They promote modularity, reusability, and separation of concerns in your application.
            </p>

            <h2>Key Features of Services</h2>
            <ul>
                <li>Encapsulate logic that can be shared across multiple controllers and components.</li>
                <li>Provide a centralized way to manage data, such as fetching data from APIs or performing utility functions.</li>
                <li>Encourage code reusability and maintainability.</li>
            </ul>

            <h2>Built-in Services</h2>
            <p>AngularJS comes with several built-in services like:</p>
            <ul>
                <li><code>$http</code>: Handles HTTP requests and responses.</li>
                <li><code>$location</code>: Interacts with the browser's URL.</li>
                <li><code>$timeout</code>: Executes code after a specified time delay.</li>
                <li><code>$interval</code>: Repeats a function execution at specified intervals.</li>
            </ul>

            <h2>Creating a Custom Service</h2>
            <p>Custom services can be created using the <code>.service</code> or <code>.factory</code> methods.</p>

            <h3>Example: Creating a Custom Service</h3>
            <pre>
                <code>
                    {`
                    // Define a custom service
                    angular.module('myApp', []).service('MathService', function() {
                        this.square = function(num) {
                            return num * num; // Function to calculate square
                        };
                    });

                    // Use the service in a controller
                    angular.module('myApp').controller('MyController', function($scope, MathService) {
                        $scope.number = 4;
                        $scope.result = MathService.square($scope.number); // Calling the service function
                    });
                    `}
                </code>
            </pre>

            <h3>HTML Example</h3>
            <pre>
                <code>{`
                    <div ng-app="myApp" ng-controller="MyController">
                        Number: {{ number }} <br/>
                        Square: {{ result }}
                    </div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <p>Test your understanding of AngularJS services:</p>
            <ul>
                <li>What is the purpose of AngularJS services?</li>
                <li>Name two built-in AngularJS services and their use cases.</li>
                <li>What is the difference between a service and a factory in AngularJS?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/guide/services" target="_blank" rel="noreferrer">AngularJS Official Documentation</a></li>
                <li><a href="https://www.tutorialspoint.com/angularjs/angularjs_services.htm" target="_blank" rel="noreferrer">AngularJS Services Tutorial</a></li>
            </ul>
        </div>
    );
};

export default Services;
