// AdvancedRouting.jsx
import React from 'react';
import '../css/AdvancedRouting.css';

const AdvancedRouting = () => {
    return (
        <div className="advanced-routing">
            <h1>Advanced Routing with UI-Router</h1>

            <h2>What is UI-Router?</h2>
            <p>
                UI-Router is a flexible routing framework for AngularJS applications. Unlike the built-in ngRoute module, UI-Router allows you to manage states and nested views effectively, providing a more powerful routing mechanism.
            </p>

            <h2>Why Use UI-Router?</h2>
            <ul>
                <li>Supports nested and named views.</li>
                <li>Manages application states effectively.</li>
                <li>Provides flexibility for complex Single Page Applications (SPAs).</li>
            </ul>

            <h2>How to Use UI-Router?</h2>
            <ol>
                <li>
                    <strong>Install UI-Router:</strong>
                    <pre>
                        <code>
                            npm install @uirouter/angularjs
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Include UI-Router in Your Application:</strong>
                    <pre>
                        <code>
                            angular.module('myApp', ['ui.router']);
                        </code>
                    </pre>
                </li>
                <li>
                    <strong>Configure States:</strong>
                    <p>Define states and associated views in the application.</p>
                    <pre>
                        <code>
                           {` angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {
                                $stateProvider
                                    .state('home', {
                                        url: '/home',
                                        template: '<h1>Welcome to Home Page</h1>'
                                    })
                                    .state('about', {
                                        url: '/about',
                                        template: '<h1>About Us</h1>'
                                    });

                                $urlRouterProvider.otherwise('/home');
                            });`}
                        </code>
                    </pre>
                </li>
            </ol>

            <h2>Example Application</h2>
            <pre>
                <code>
                   {` angular.module('myApp', ['ui.router'])
                        .config(function($stateProvider, $urlRouterProvider) {
                            $stateProvider
                                .state('dashboard', {
                                    url: '/dashboard',
                                    template: '<h1>Dashboard</h1>'
                                })
                                .state('profile', {
                                    url: '/profile',
                                    template: '<h1>Your Profile</h1>'
                                });

                            $urlRouterProvider.otherwise('/dashboard');
                        });`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <p>Test your knowledge:</p>
            <ul>
                <li>What is the primary advantage of using UI-Router over ngRoute?</li>
                <li>How do you define a state in UI-Router?</li>
                <li>What is the purpose of $urlRouterProvider?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://ui-router.github.io/" target="_blank" rel="noreferrer">UI-Router Official Documentation</a></li>
                <li><a href="https://angular-ui.github.io/ui-router/sample/" target="_blank" rel="noreferrer">UI-Router Sample Applications</a></li>
            </ul>
        </div>
    );
};

export default AdvancedRouting;
