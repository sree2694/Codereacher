// Directives.jsx
import React from 'react';
import '../css/Directives.css';

const Directives = () => {
    return (
        <div className="directives">
            <h1>AngularJS Core Concepts: Directives</h1>
            <p>
                AngularJS Directives allow you to extend HTML by attaching custom behavior to elements and attributes. 
                They make it easier to build dynamic and interactive web applications.
            </p>

            <h2>What are Directives?</h2>
            <p>
                Directives are special markers on elements (such as attributes, elements, or classes) that tell AngularJS 
                to attach specific behavior or manipulate the DOM in a desired way.
            </p>

            <h2>Types of Directives</h2>

            <h3>1. Built-in Directives</h3>
            <ul>
                <li><strong>ng-if</strong>: Conditionally renders elements based on an expression.</li>
                <li><strong>ng-repeat</strong>: Iterates over a collection and renders the DOM elements for each item.</li>
                <li><strong>ng-class</strong>: Dynamically adds or removes CSS classes.</li>
                <li><strong>ng-style</strong>: Applies dynamic styles to an element.</li>
            </ul>

            <h3>Example: Built-in Directives</h3>
            <pre>
            <pre>
    <code>
        {/* AngularJS Template Example */}
        {`
        <div ng-class="{ 'highlight': isHighlighted }">
            This text has dynamic classes.
        </div>

        <div ng-style="{ 'color': textColor }">
            This text has dynamic styles.
        </div>
        `}
    </code>
</pre>

            </pre>

            <h3>2. Custom Directives</h3>
            <p>
                Custom directives are reusable components that encapsulate specific functionality. They are defined using 
                the <code>directive</code> method of an AngularJS module.
            </p>

            <h3>Example: Custom Directive</h3>
            <pre>
                <code>{`
                    angular.module('myApp', []).directive('myDirective', function() {
                        return {
                            restrict: 'E', // Restrict to Element
                            template: '&lt;h3&gt;This is a custom directive&lt;/h3&gt;'
                        };
                    });`}
                </code>
            </pre>
            <p>Usage:</p>
            <pre>
                <code>
                    &lt;div ng-app="myApp"&gt;
                        &lt;my-directive&gt;&lt;/my-directive&gt;
                    &lt;/div&gt;
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of AngularJS directives?</li>
                <li>How does <code>ng-repeat</code> work?</li>
                <li>What are the steps to create a custom directive in AngularJS?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://angularjs.org/" target="_blank" rel="noreferrer">AngularJS Official Documentation</a></li>
                <li><a href="https://docs.angularjs.org/guide/directive" target="_blank" rel="noreferrer">AngularJS Directives Guide</a></li>
            </ul>
        </div>
    );
};

export default Directives;
