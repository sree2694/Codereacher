// DataBindingOptimization.jsx
import React from 'react';
import '../css/DataBindingOptimization.css';

const DataBindingOptimization = () => {
    return (
        <div className="data-binding-optimization">
            <h1>Two-Way Data Binding Optimization</h1>
            <p>
                Two-way data binding is a powerful feature in AngularJS that synchronizes the view and the model.
                However, in large applications, excessive bindings can lead to performance issues. To optimize
                two-way data binding, follow these best practices:
            </p>

            <h2>What is Two-Way Data Binding?</h2>
            <p>
                Two-way data binding establishes a connection between the model and the view, allowing them to
                update each other automatically. It simplifies the development process but requires efficient
                management to ensure optimal performance.
            </p>

            <h2>Why Optimize Two-Way Data Binding?</h2>
            <p>
                AngularJS uses a digest cycle to check for changes in bindings. With a large number of bindings,
                the digest cycle becomes time-consuming, affecting application performance.
            </p>

            <h2>Optimization Techniques</h2>
            <ul>
                <li>
                    <strong>Use One-Way Data Binding:</strong>
                    <p>
                        When updates from the view to the model are unnecessary, use <code>ng-bind</code> or
                        <code>::</code> to establish one-way bindings.
                    </p>
                    <pre>
                        <code>{`
    <div>{{::message}}</div> // One-time binding
                            `}
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Limit Watchers:</strong>
                    <p>
                        Reduce the number of watchers by minimizing the usage of <code>ng-repeat</code> and
                        other directives that create bindings.
                    </p>
                </li>
                <li>
                    <strong>Detach Unused Bindings:</strong>
                    <p>
                        Remove bindings for elements that are no longer in use to free up resources.
                    </p>
                </li>
                <li>
                    <strong>Optimize <code>ng-repeat</code>:</strong>
                    <p>
                        Use track by to improve performance when iterating over lists.
                    </p>
                    <pre>
                        <code>{`
    <li ng-repeat="item in items track by $index">
        {{item}}
    </li>
                        `}
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Avoid Deep Watchers:</strong>
                    <p>
                        When watching objects, avoid deep watchers by using <code>=</code> bindings sparingly.
                    </p>
                </li>
            </ul>

            <h2>Example</h2>
            <p>Optimizing data binding in a sample AngularJS application:</p>
            <pre>
                <code>{`
    angular.module('myApp', [])
        .controller('OptimizationController', function($scope) {
        $scope.message = "Optimized Binding Example"; // Model with one-time binding
    });
                        `}
                </code>
            </pre>
            <pre>
                <code>
                    {`
    <div ng-app="myApp" ng-controller="OptimizationController">
        <h1>{{::message}}</h1> // One-time binding to improve performance
    </div>
                    `}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of the digest cycle in AngularJS?</li>
                <li>How does using one-time bindings improve performance?</li>
                <li>What does <code>track by</code> do in <code>ng-repeat</code>?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://angular.io/guide" target="_blank" rel="noreferrer">AngularJS Official Documentation</a></li>
                <li><a href="https://docs.angularjs.org/guide/scope" target="_blank" rel="noreferrer">AngularJS Scope</a></li>
            </ul>
        </div>
    );
};

export default DataBindingOptimization;
