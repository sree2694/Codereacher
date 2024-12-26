// TestingAngularJS.jsx
import React from 'react';
import '../css/TestingAngularJS.css';

const TestingAngularJS = () => {
    return (
        <div className="testing-angularjs">
            <h1>Testing AngularJS Applications</h1>

            <h2>Overview</h2>
            <p>
                Testing is a crucial part of AngularJS application development. It ensures that the code is reliable, maintainable, and free from bugs. AngularJS supports two main types of testing:
            </p>
            <ul>
                <li><strong>Unit Testing:</strong> Focuses on individual components like controllers, services, and filters.</li>
                <li><strong>End-to-End (E2E) Testing:</strong> Tests the complete application workflow from the user’s perspective.</li>
            </ul>

            <h2>Unit Testing</h2>
            <p>Unit tests are written to test the smallest units of the application—typically JavaScript functions. AngularJS provides built-in support for testing through <code>ngMock</code> module.</p>

            <h3>Setup</h3>
            <p>To set up unit testing:</p>
            <pre>
                <code>
                    npm install --save-dev karma jasmine karma-chrome-launcher karma-jasmine karma-ng-html2js-preprocessor
                </code>
            </pre>

            <h3>Example Unit Test</h3>
            <pre>
                <code>
                   {` describe('MyController', function() {
                        beforeEach(module('myApp'));

                        let $controller, $rootScope;

                        beforeEach(inject(function(_$controller_, _$rootScope_) {
                            $controller = _$controller_;
                            $rootScope = _$rootScope_;
                        }));

                        it('should initialize with the correct message', function() {
                            let $scope = $rootScope.$new();
                            let controller = $controller('MyController', { $scope });
                            expect($scope.message).toBe('Hello, AngularJS!');
                        });
                    });`}
                </code>
            </pre>

            <h2>End-to-End (E2E) Testing</h2>
            <p>
                E2E tests simulate user interactions with the application to verify that everything works as expected. AngularJS applications commonly use Protractor for E2E testing.
            </p>

            <h3>Setup</h3>
            <p>To set up E2E testing:</p>
            <pre>
                <code>
                    npm install -g protractor
                    webdriver-manager update
                </code>
            </pre>

            <h3>Example E2E Test</h3>
            <pre>
                <code>
{`                    describe('My AngularJS App', function() {
                        it('should display the correct message', function() {
                            browser.get('http://localhost:4200');
                            let message = element(by.binding('message'));
                            expect(message.getText()).toEqual('Hello, AngularJS!');
                        });
                    });`}
                </code>
            </pre>

            <h2>Best Practices</h2>
            <ul>
                <li>Write tests for all critical functionality.</li>
                <li>Use mocks and spies to isolate units.</li>
                <li>Run tests frequently to catch issues early.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What is the purpose of unit testing in AngularJS?</li>
                <li>Which tool is commonly used for E2E testing in AngularJS?</li>
                <li>What is the role of the <code>ngMock</code> module?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://karma-runner.github.io/" target="_blank" rel="noreferrer">Karma Official Documentation</a></li>
                <li><a href="https://jasmine.github.io/" target="_blank" rel="noreferrer">Jasmine Official Documentation</a></li>
                <li><a href="https://www.protractortest.org/" target="_blank" rel="noreferrer">Protractor Official Documentation</a></li>
            </ul>
        </div>
    );
};

export default TestingAngularJS;
