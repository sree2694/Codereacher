// DataBinding.jsx
import React from "react";
import "../css/DataBinding.css";

const DataBinding = () => {
  return (
    <div className="data-binding">
      <h1>Data Binding in AngularJS</h1>

      <h2>What is Data Binding?</h2>
      <p>
        Data Binding is the process of connecting the application user interface
        (UI) to the data model dynamically. It allows for automatic
        synchronization of data between the model and view components.
      </p>

      <p>
        Data Binding simplifies the development process by reducing the need for
        boilerplate code to sync the model and view manually. It ensures that
        any updates to the model are reflected in the view and vice versa.
      </p>

      <p>
        Data Binding is ideal for dynamic web applications where the UI needs to
        respond to user input or changes in the data model. It is commonly used
        in forms, real-time updates, and interactive components.
      </p>

       <p>
        Use Data Binding when you need to streamline communication between the
        model and the view. It is particularly useful in applications with
        frequent data updates or interactive user interfaces.
      </p>

      <h2>How to Use Data Binding?</h2>
      <p>
        AngularJS offers two-way data binding, which allows for automatic
        synchronization of data between the model and the view. Here's an
        example:
      </p>

      <h3>Example</h3>
      <pre>
        <code>
          {`
        angular.module('myApp', []).controller('MyController', function($scope) {
            $scope.message = "Hello, AngularJS!"; // Model containing data
        });
        `}
        </code>
      </pre>

      <p>HTML View:</p>
      <pre>
        <code>
          {`
    <div ng-app="myApp" ng-controller="MyController">
        <h1>{{ message }}</h1> 
        <!-- View displaying model data -->
        <input type="text" ng-model="message" />
        <!-- Two-way binding -->
    </div>
    `}
        </code>
      </pre>

      <h2>Quiz</h2>
      <ul>
        <li>What is data binding in AngularJS?</li>
        <li>What are the advantages of using data binding?</li>
        <li>How does two-way data binding differ from one-way data binding?</li>
      </ul>

      <h2>References</h2>
      <ul>
        <li>
          <a
            href="https://angular.io/guide/binding"
            target="_blank"
            rel="noreferrer"
          >
            Angular Data Binding Guide
          </a>
        </li>
        <li>
          <a
            href="https://docs.angularjs.org/guide/databinding"
            target="_blank"
            rel="noreferrer"
          >
            AngularJS Data Binding Documentation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DataBinding;
