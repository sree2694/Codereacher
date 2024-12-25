// ModuleArchitecture.jsx
import React from 'react';
import '../css/ModuleArchitecture.css';

const ModuleArchitecture = () => {
    return (
        <div className="module-architecture">
            <h1>Module Architecture</h1>

            <h2>What is Module Architecture in AngularJS?</h2>
            <p>
                AngularJS applications are structured into modules to promote modularity and maintainability.
                A module in AngularJS is a container for different parts of an application like controllers,
                services, filters, directives, and more. Each module defines a specific functionality or
                feature, enabling developers to build scalable applications.
            </p>

            <h2>Benefits of Module Architecture</h2>
            <ul>
                <li>Encourages code reuse and separation of concerns.</li>
                <li>Makes the application easier to test and debug.</li>
                <li>Facilitates collaboration among developers working on different modules.</li>
                <li>Improves application scalability.</li>
            </ul>

            <h2>How to Create and Use Modules</h2>
            <h3>Step 1: Define a Module</h3>
            <pre>
                <code>
                    angular.module('myApp', []);
                    {/* Defines a module named 'myApp' with no dependencies */}
                </code>
            </pre>

            <h3>Step 2: Add Components to the Module</h3>
            <pre>
                <code>{`
                    angular.module('myApp', [])
                        .controller('MyController', function($scope) {
                            $scope.message = "Hello, AngularJS Module!";
                        })
                        .service('MyService', function() {
                            this.getData = function() {
                                return "Service Data";
                            };
                        });`}
                </code>
            </pre>

            <h3>Step 3: Bootstrap the Application</h3>
            <pre>
                <code>
                   {` <!DOCTYPE html>
                    <html ng-app="myApp">
                    <head>
                        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
                        <script src="app.js"></script>
                    </head>
                    <body>
                        <div ng-controller="MyController">
                            {{ message }}
                        </div>
                    </body>
                    </html>`}
                </code>
            </pre>

            <h2>Example: Modular Application</h2>
            <pre>
                <code>
                  {`  angular.module('userApp', [])
                        .controller('UserController', function($scope, UserService) {
                            $scope.users = UserService.getUsers();
                        })
                        .service('UserService', function() {
                            this.getUsers = function() {
                                return [
                                    { id: 1, name: 'John' },
                                    { id: 2, name: 'Jane' }
                                ];
                            };
                        });`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is a module in AngularJS?</li>
                <li>List three benefits of using module architecture.</li>
                <li>How do you define a module in AngularJS?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/guide/module" target="_blank" rel="noreferrer">AngularJS Module Documentation</a></li>
                <li><a href="https://angularjs.org/" target="_blank" rel="noreferrer">Official AngularJS Website</a></li>
            </ul>
        </div>
    );
};

export default ModuleArchitecture;
