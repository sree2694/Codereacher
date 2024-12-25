// Providers.jsx
import React from 'react';
import '../css/Providers.css';

const Providers = () => {
    return (
        <div className="providers">
            <h1>AngularJS Providers</h1>
            <p>
                Providers in AngularJS are used to create and configure services, factories, and values in your application. They allow you to manage dependencies and control how they are provided to various components.
            </p>
            
            <h2>Types of Providers</h2>
            <ol>
                <li>
                    <strong>Factory:</strong> Used to create objects or functions. It returns a value or object to be used as a service.
                    <pre>
                        <code>{`
        angular.module('myApp', []).factory('myFactory', function() {
                                return {
                                    greet: function() {
                                        return "Hello from Factory!";
                                    }
                                };
                            });`}
                        </code>
                    </pre>
                </li>

                <li>
                    <strong>Service:</strong> Similar to a factory but used as a constructor function. You use the <code>new</code> keyword to instantiate it.
                    <pre>
                        <code>{`
        angular.module('myApp', []).service('myService', function() {
                                this.greet = function() {
                                    return "Hello from Service!";
                                };
                            });`}
                        </code>
                    </pre>
                </li>

                <li>
                    <strong>Value:</strong> A simple object or value that can be injected.
                    <pre>
                        <code>
                            angular.module('myApp', []).value('myValue', "Hello from Value!");
                        </code>
                    </pre>
                </li>

                <li>
                    <strong>Constant:</strong> A value that remains constant and can be used during the configuration phase.
                    <pre>
                        <code>
                            angular.module('myApp', []).constant('myConstant', "This is a constant value!");
                        </code>
                    </pre>
                </li>

                <li>
                    <strong>Provider:</strong> The most flexible option, allowing configuration during the application's config phase.
                    <pre>
                        <code>{`
        angular.module('myApp', []).provider('myProvider', function() {
                let greeting = "Hello";

                    this.setGreeting = function(newGreeting) {
                        greeting = newGreeting;
                            };

                    this.$get = function() {
                        return {
                            greet: function() {
                                return greeting + " from Provider!";
                                    }
                                };
                            };
                        });

        angular.module('myApp').config(function(myProviderProvider) {
                myProviderProvider.setGreeting("Hi");
                    });`}
                        </code>
                    </pre>
                </li>
            </ol>

            <h2>Example Usage</h2>
            <p>Inject and use these providers in a controller:</p>
            <pre>
                <code>{`
    angular.module('myApp').controller('MyController', function($scope, myFactory, myService, myValue, myConstant, myProvider) {
                        $scope.factoryGreeting = myFactory.greet();
                        $scope.serviceGreeting = myService.greet();
                        $scope.valueGreeting = myValue;
                        $scope.constantGreeting = myConstant;
                        $scope.providerGreeting = myProvider.greet();
                    });`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the difference between a factory and a service in AngularJS?</li>
                <li>Which provider type can be used during the configuration phase?</li>
                <li>How do you inject a constant into a controller?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/guide/providers" target="_blank" rel="noreferrer">AngularJS Providers Documentation</a></li>
                <li><a href="https://angularjs.org/" target="_blank" rel="noreferrer">AngularJS Official Site</a></li>
            </ul>
        </div>
    );
};

export default Providers;
