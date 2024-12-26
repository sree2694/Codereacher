// Animations.jsx
import React from 'react';
import '../css/Animations.css';

const Animations = () => {
    return (
        <div className="animations-container">
            <h1>AngularJS Animations</h1>
            <p>
                AngularJS provides a powerful way to add animations to your applications. Using the ngAnimate module,
                you can define custom animations for various events such as adding, removing, or changing elements in the DOM.
            </p>

            <h2>Why Use Animations?</h2>
            <ul>
                <li>Enhance user experience by providing visual feedback.</li>
                <li>Highlight changes in the application state.</li>
                <li>Make your application more interactive and engaging.</li>
            </ul>

            <h2>Getting Started</h2>
            <p>To use animations in AngularJS, follow these steps:</p>
            <ol>
                <li>
                    Include the ngAnimate module in your application.
                    <pre>
                        <code>
                            angular.module('myApp', ['ngAnimate']);
                        </code>
                    </pre>
                </li>
                <li>
                    Add CSS classes for animations (e.g., .ng-enter, .ng-leave).
                </li>
                <li>
                    Use directives like <code>ng-if</code>, <code>ng-show</code>, and <code>ng-hide</code> to trigger animations.
                </li>
            </ol>

            <h2>Example: Fade-In and Fade-Out</h2>
            <p>This example demonstrates how to create a fade-in and fade-out effect:</p>
            <pre>
           {`     <code>
                    angular.module('myApp', ['ngAnimate']).controller('MyController', function($scope) {
                        $scope.show = true;
                    });
                </code>`}
            </pre>
            <div>
                <code>
                    &lt;div ng-app="myApp" ng-controller="MyController"&gt;
                        &lt;button ng-click="show = !show"&gt;Toggle&lt;/button&gt;
                        &lt;div class="box" ng-if="show"&gt;I fade in and out!&lt;/div&gt;
                    &lt;/div&gt;
                </code>
            </div>

            <h2>CSS for Animations</h2>
            <p>Define the animation styles in your CSS file:</p>
            <pre>
                <code>
                  {`  .box {
                        width: 100px;
                        height: 100px;
                        background-color: lightblue;
                    }

                    .box.ng-enter {
                        transition: all 0.5s ease-in;
                        opacity: 0;
                    }

                    .box.ng-enter-active {
                        opacity: 1;
                    }

                    .box.ng-leave {
                        transition: all 0.5s ease-out;
                        opacity: 1;
                    }

                    .box.ng-leave-active {
                        opacity: 0;
                    }`}
                </code>
            </pre>

            <h2>Advanced Animations</h2>
            <p>For more complex animations, you can:</p>
            <ul>
                <li>Use keyframes in CSS for detailed control.</li>
                <li>Combine JavaScript and CSS animations.</li>
                <li>Use AngularJS animation hooks for advanced scenarios.</li>
            </ul>

            <h2>Quiz</h2>
            <p>Test your knowledge:</p>
            <ul>
                <li>What module is used for animations in AngularJS?</li>
                <li>What CSS classes are required for ngAnimate animations?</li>
                <li>How can you trigger animations using AngularJS directives?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/api/ngAnimate" target="_blank" rel="noreferrer">AngularJS ngAnimate Documentation</a></li>
                <li><a href="https://www.w3schools.com/angular/angular_animations.asp" target="_blank" rel="noreferrer">AngularJS Animations Tutorial</a></li>
            </ul>
        </div>
    );
};

export default Animations;