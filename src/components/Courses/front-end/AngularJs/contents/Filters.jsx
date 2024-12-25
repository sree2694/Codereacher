// Filters.jsx
import React from 'react';
import '../css/Filters.css';

const Filters = () => {
    return (
        <div className="filters-container">
            <h1> Filters</h1>
            <p>
                Filters in AngularJS are used to format the value of an expression for display to the user. 
                They can be applied to expressions in view templates, directives, and controllers.
            </p>

            <h2>What Are Filters?</h2>
            <p>
                Filters allow you to transform data directly in your templates. For example, you can format 
                numbers, dates, or strings, filter arrays, or create your custom transformations.
            </p>

            <h2>Common Built-in Filters</h2>
            <ul>
                <li><strong>currency</strong>: Formats a number as a currency string.</li>
                <li><strong>date</strong>: Formats a date to a specified format.</li>
                <li><strong>filter</strong>: Selects a subset of an array based on a filter expression.</li>
                <li><strong>json</strong>: Formats an object as a JSON string.</li>
                <li><strong>limitTo</strong>: Limits the length of an array or string.</li>
                <li><strong>lowercase</strong>: Converts a string to lowercase.</li>
                <li><strong>orderBy</strong>: Orders an array by an expression.</li>
                <li><strong>uppercase</strong>: Converts a string to uppercase.</li>
            </ul>

            <h2>How to Use Filters</h2>
            <p>Filters can be applied in two ways:</p>

            <h3>1. Using Filters in Templates</h3>
            <pre>
                <code>{`
        <div>
            {{ amount | currency }}
               {/* Formats 'amount' as currency */}
                {{ message | uppercase }}
                {/* Converts 'message' to uppercase */}
        </div>`}
                </code>
            </pre>

            <h3>2. Using Filters in Controllers</h3>
            <pre>
                <code>{`
    angular.module('myApp', []).controller('MyController', function($scope, $filter) {
            $scope.amount = 1234.56;
            $scope.currencyValue = $filter('currency')($scope.amount, '$');
            // Uses 'currency' filter in the controller
            });`}
                </code>
            </pre>

            <h2>Custom Filters</h2>
            <p>You can create custom filters for unique formatting needs.</p>
            <pre>
                <code>{`
    angular.module('myApp', []).filter('reverse', function() {
        return function(input) {
        if (!input) return '';
        return input.split('').reverse().join('');
            };
        });`}
                </code>
            </pre>

            <p>Using the custom filter in a template:</p>
            <pre>
                <code>{`
    <div>
        {{ 'AngularJS' | reverse }}
        {/* Outputs: SJralugnA */}
    </div>`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of AngularJS filters?</li>
                <li>List three built-in filters in AngularJS.</li>
                <li>How do you create a custom filter?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://docs.angularjs.org/guide/filter" target="_blank" rel="noreferrer">AngularJS Filters Guide</a></li>
                <li><a href="https://angular.io/" target="_blank" rel="noreferrer">AngularJS Official Documentation</a></li>
            </ul>
        </div>
    );
};

export default Filters;
