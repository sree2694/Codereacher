// DependencyInjection.jsx
import React from 'react';
import '../css/DependencyInjection.css';

const DependencyInjection = () => {
    return (
        <div className="dependency-injection">
            <h2>What is Dependency Injection?</h2>
            <p>
                Dependency Injection (DI) is a design pattern used to achieve Inversion of Control (IoC) between classes and their dependencies. AngularJS uses DI to provide components (e.g., services) to other components (e.g., controllers, directives) without requiring them to explicitly create instances.
            </p>

            <h2>Why Use Dependency Injection?</h2>
            <ul>
                <li>Improves code modularity and reusability.</li>
                <li>Makes testing easier by allowing mock dependencies.</li>
                <li>Decouples components and their dependencies, enhancing maintainability.</li>
            </ul>

            <h2>How Dependency Injection Works in AngularJS</h2>
            <p>AngularJS has a built-in injector that creates and wires dependencies. You can use DI in controllers, directives, filters, and other components.</p>

            <h3>Example</h3>
            <p>Injecting the <code>$http</code> service into a controller:</p>
            <pre>
                <code>{`
                    angular.module('myApp', [])
                        .controller('MyController', function($scope, $http) {
                            // Use $http to fetch data from an API
                            $http.get('https://api.example.com/data')
                                .then(function(response) {
                                    $scope.data = response.data; // Store the data in the model
                                });
                        });`}
                </code>
            </pre>

            <h2>Creating Custom Services with DI</h2>
            <p>You can create and inject custom services into your application components.</p>
            <h3>Example</h3>
            <pre>
                <code>
                    {`
                    // Define a custom service
                    angular.module('myApp').service('MyService', function() {
                        this.sayHello = function() {
                            return "Hello from MyService!";
                        };
                    });

                    // Inject the custom service into a controller
                    angular.module('myApp')
                        .controller('MyController', function($scope, MyService) {
                            $scope.message = MyService.sayHello();
                        });`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the primary benefit of Dependency Injection?</li>
                <li>How does AngularJS implement Dependency Injection?</li>
                <li>Write an example of a custom service and inject it into a controller.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/guide/di" target="_blank" rel="noreferrer">AngularJS Dependency Injection Documentation</a></li>
                <li><a href="https://www.geeksforgeeks.org/dependency-injection-in-angularjs/" target="_blank" rel="noreferrer">Dependency Injection in AngularJS - GeeksforGeeks</a></li>
            </ul>
        </div>
    );
};

export default DependencyInjection;
