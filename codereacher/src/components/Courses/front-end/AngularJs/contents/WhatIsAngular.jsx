import React from 'react';
import '../css/WhatIsAngular.css';

const WhatIsAngular = () => {
    return (
        <div className="angular-container">
            <h1>Introduction to Angular/AngularJS</h1>

            <h2>What is Angular/AngularJS?</h2>
            <p>
                AngularJS is a JavaScript-based open-source front-end web framework primarily maintained by Google. It allows developers to build dynamic, single-page web applications by extending HTML with additional attributes and creating reusable components.
            </p>
            <p>
                Angular (the modern version) is a complete rewrite of AngularJS. It is a TypeScript-based platform and framework for building dynamic, scalable web applications.
            </p>

            <h2>History of Angular/AngularJS</h2>
            <ul>
                <li><strong>2009:</strong> AngularJS was created by Misko Hevery at Google.</li>
                <li><strong>2010:</strong> Official release of AngularJS.</li>
                <li><strong>2016:</strong> Angular 2 was introduced, marking a complete rewrite of AngularJS using TypeScript.</li>
                <li>Subsequent releases: Angular continues to evolve with regular updates, providing improved performance and features.</li>
            </ul>

            <h2>What You Should Already Know</h2>
            <p>Before learning Angular/AngularJS, it is helpful to have a basic understanding of:</p>
            <ul>
                <li>HTML and CSS</li>
                <li>JavaScript (ES6 is a plus)</li>
                <li>Basic knowledge of MVC (Model-View-Controller) architecture</li>
            </ul>

            <h2>Features of Angular/AngularJS</h2>
            <ul>
                <li><strong>Data Binding:</strong> Synchronize data between the model and the view.</li>
                <li><strong>Directives:</strong> Extend HTML with custom behaviors.</li>
                <li><strong>Dependency Injection:</strong> Manage the dependencies of an application efficiently.</li>
                <li><strong>Two-Way Data Binding:</strong> Changes in the UI are reflected in the model and vice versa.</li>
                <li><strong>Components:</strong> Reusable building blocks of the application.</li>
            </ul>

            <h2>Examples</h2>
            <h3>AngularJS Example</h3>
            <pre>
                <code>
{`<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="">
    <p>Enter your name: <input type="text" ng-model="name"></p>
    <h1>Hello {{name}}</h1>
</body>
</html>`}
                </code>
            </pre>

            <h3>Angular Example</h3>
            <p>Create a simple component in Angular:</p>
            <pre>
                <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
}`}
                </code>
            </pre>

            <h2>Quiz</h2>
            <ul>
                <li>What is the primary difference between AngularJS and Angular?</li>
                <li>Explain the concept of two-way data binding in AngularJS.</li>
                <li>What is the role of TypeScript in Angular?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li>
                    <a href="https://angularjs.org/" target="_blank" rel="noopener noreferrer">
                        AngularJS Official Documentation
                    </a>
                </li>
                <li>
                    <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                        Angular Official Documentation
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank" rel="noopener noreferrer">
                        Learn JavaScript - MDN
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WhatIsAngular;
