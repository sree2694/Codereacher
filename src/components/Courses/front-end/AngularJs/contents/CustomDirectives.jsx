// CustomDirectives.jsx
import React from "react";
import "../css/CustomDirectives.css";

const CustomDirectives = () => {
  return (
    <div className="custom-directives">
      <h1>Custom Directives</h1>

      <h2>What are Custom Directives?</h2>
      <p>
        Custom directives in AngularJS allow you to extend the functionality of HTML by creating reusable components with specific behaviors. They enable you to encapsulate logic and templates, enhancing modularity and maintainability.
      </p>

      <h2>Why Use Custom Directives?</h2>
      <ul>
        <li>To create reusable components across the application.</li>
        <li>Encapsulate complex DOM manipulations and behaviors.</li>
        <li>Enhance code readability and maintainability.</li>
      </ul>

      <h2>How to Create Custom Directives</h2>
      <p>
        Custom directives are created using the <code>.directive</code> method of an AngularJS module. Here's a simple example:
      </p>

      <pre>
        <code>{`
  angular.module("myApp", []).directive("myDirective", function () {
      return {
        restrict: "E", // Element directive
        template: "<div>This is a custom directive!</div>",
        };
      });`}
        </code>
      </pre>

      <h2>Directive Options</h2>
      <ul>
        <li>
          <strong>restrict:</strong> Specifies how the directive is used (E: Element, A: Attribute, C: Class, M: Comment).
        </li>
        <li>
          <strong>template:</strong> Defines the HTML content of the directive.
        </li>
        <li>
          <strong>scope:</strong> Creates an isolated scope for the directive.
        </li>
        <li>
          <strong>link:</strong> A function to manipulate the DOM or add event listeners.
        </li>
        <li>
          <strong>controller:</strong> Specifies the controller for the directive.
        </li>
      </ul>

      <h2>Example: Custom Attribute Directive</h2>
      <pre>
        <code>{`
  angular.module("myApp", []).directive("highlight", function () {
    return {
      restrict: "A", // Attribute directive
        ink: function (scope, element, attrs) {
          element.on("mouseenter", function () {
            element.css("background-color", attrs.highlight);
          });
          element.on("mouseleave", function () {
            element.css("background-color", "");
                });
              },
            };
          });`}
        </code>
      </pre>

      <h3>Usage:</h3>
      <pre>
        <code>
          &lt;div highlight="yellow"&gt;Hover over me to see the effect!&lt;/div&gt;
        </code>
      </pre>

      <h2>Quiz</h2>
      <p>Test your understanding of custom directives:</p>
      <ul>
        <li>What is the purpose of the <code>restrict</code> property in a directive?</li>
        <li>How do you create an isolated scope for a directive?</li>
        <li>What is the difference between an element and an attribute directive?</li>
      </ul>

      <h2>References</h2>
      <ul>
        <li>
          <a href="https://docs.angularjs.org/guide/directive" target="_blank" rel="noreferrer">
            AngularJS Official Documentation on Directives
          </a>
        </li>
        <li>
          <a href="https://www.w3schools.com/angular/angular_customdirectives.asp" target="_blank" rel="noreferrer">
            W3Schools: AngularJS Custom Directives
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CustomDirectives;
