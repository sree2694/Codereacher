// APIIntegration.jsx
import React from 'react';
import '../css/APIIntegration.css';

const APIIntegration = () => {
    return (
        <div className="api-integration">
            <h1>RESTful API Integration in AngularJS</h1>

            <h2>What is RESTful API Integration?</h2>
            <p>
                RESTful API integration in AngularJS involves using HTTP methods (GET, POST, PUT, DELETE) to
                communicate with backend services. AngularJS provides the <code>$http</code> and <code>$resource</code>
                services to simplify these interactions.
            </p>

            <h2>Why Use RESTful API Integration?</h2>
            <ul>
                <li>Fetch and display data dynamically.</li>
                <li>Enable user interactions with backend services.</li>
                <li>Create a seamless and dynamic single-page application experience.</li>
            </ul>

            <h2>How to Use RESTful API Integration?</h2>

            <h3>1. Using <code>$http</code> Service</h3>
            <p>
                The <code>$http</code> service is used to perform HTTP requests and handle responses.
            </p>
            <pre>
                <code>
{`angular.module('myApp', [])
                        .controller('APIController', function($scope, $http) {
                            // Fetch data from an API
                            $http.get('https://jsonplaceholder.typicode.com/posts')
                                .then(function(response) {
                                    $scope.posts = response.data; // Store data in the scope
                                })
                                .catch(function(error) {
                                    console.error('Error fetching data:', error);
                                });
                        });`}
                </code>
            </pre>

            <h3>2. Using <code>$resource</code> Service</h3>
            <p>
                The <code>$resource</code> service provides a higher-level abstraction for RESTful APIs.
                It requires the <code>ngResource</code> module.
            </p>
            <pre>
                <code>
{`angular.module('myApp', ['ngResource'])
                        .controller('ResourceController', function($scope, $resource) {
                            const Post = $resource('https://jsonplaceholder.typicode.com/posts/:id');
                            
                            // Fetch a list of posts
                            $scope.posts = Post.query();
                        });`}
                </code>
            </pre>

            <h2>Example</h2>
            <pre>
                <code>
                   {` <div ng-app="myApp" ng-controller="APIController">
                        <h2>Posts</h2>
                        <ul>
                            <li ng-repeat="post in posts">
                                {{ post.title }}
                            </li>
                        </ul>
                    </div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of the <code>$http</code> service in AngularJS?</li>
                <li>How does the <code>$resource</code> service simplify RESTful API interactions?</li>
                <li>Write an example of a POST request using <code>$http</code>.</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank" rel="noreferrer">AngularJS $http Documentation</a></li>
                <li><a href="https://docs.angularjs.org/api/ngResource/service/$resource" target="_blank" rel="noreferrer">AngularJS $resource Documentation</a></li>
                <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">JSONPlaceholder API</a></li>
            </ul>
        </div>
    );
};

export default APIIntegration;
