// ProjectSetup.jsx
import React from 'react';
import '../css/ProjectSetup.css';

const ProjectSetup = () => {
    return (
        <div className="project-setup">
            {/* Header for the project setup guide */}
            <h1>AngularJS Project Setup</h1>

            {/* Section for Angular CLI introduction */}
            <h2>1. Angular CLI</h2>
            <p>
                Angular CLI (Command Line Interface) is a tool to initialize, develop, scaffold, and maintain Angular applications.
                It simplifies the process of creating and managing Angular projects by providing commands for creating components, services, modules, and more.
            </p>

            {/* Subsection for installing Angular CLI */}
            <h3>Installing Angular CLI</h3>
            <pre>
                <code>
                    npm install -g @angular/cli {/* Command to globally install Angular CLI */}
                </code>
            </pre>

            {/* Subsection for verifying installation */}
            <h3>Verify Installation</h3>
            <pre>
                <code>
                    ng version {/* Command to check the installed Angular CLI version */}
                </code>
            </pre>

            {/* Section for steps to create an application */}
            <h2>2. Steps to Create Application Using Angular CLI</h2>
            <ol>
                {/* Step 1: Creating a new Angular project */}
                <li>
                    <strong>Step 1: Create a New Angular Project</strong>
                    <pre>
                        <code>
                            ng new my-angular-app {/* Command to initialize a new Angular project */}
                        </code>
                    </pre>
                    Choose the options for routing and preferred stylesheet format (CSS, SCSS, etc.).
                </li>

                {/* Step 2: Navigating to the project directory */}
                <li>
                    <strong>Step 2: Navigate to the Project Directory</strong>
                    <pre>
                        <code>
                            cd my-angular-app {/* Command to move into the project folder */}
                        </code>
                    </pre>
                </li>

                {/* Step 3: Serving the application */}
                <li>
                    <strong>Step 3: Serve the Application</strong>
                    <pre>
                        <code>
                            ng serve {/* Command to start the Angular development server */}
                        </code>
                    </pre>
                    Open your browser and navigate to <a href="http://localhost:4200" target="_blank" rel="noreferrer">http://localhost:4200</a> to view your application.
                </li>
            </ol>

            {/* Section for folder structure explanation */}
            <h2>3. Folder Structure</h2>
            <p>The Angular project structure includes the following:</p>
            <ul>
                <li><strong>src/app</strong>: Contains application logic and components.</li>
                <li><strong>src/assets</strong>: Stores static files like images, styles, and fonts.</li>
                <li><strong>src/environments</strong>: Configuration files for different environments (development, production).</li>
                <li><strong>angular.json</strong>: Configuration file for the Angular project.</li>
                <li><strong>package.json</strong>: Contains project dependencies and scripts.</li>
            </ul>

            {/* Example of creating a new component */}
            <h2>4. Example</h2>
            <p>Create a basic Angular component:</p>
            <pre>
                <code>
                    ng generate component my-component {/* Command to generate a new Angular component */}
                </code>
            </pre>
            <p>This will create:</p>
            <ul>
                <li><code>my-component.component.ts</code>: Logic of the component.</li>
                <li><code>my-component.component.html</code>: Template (HTML) of the component.</li>
                <li><code>my-component.component.css</code>: Stylesheet of the component.</li>
            </ul>

            {/* Quiz section */}
            <h2>Quiz</h2>
            <p>Test your knowledge:</p>
            <ul>
                <li>What command is used to install Angular CLI?</li>
                <li>Which file contains the configuration for an Angular project?</li>
                <li>How do you generate a new Angular component?</li>
            </ul>

            {/* References section */}
            <h2>References</h2>
            <ul>
                <li><a href="https://angular.io/cli" target="_blank" rel="noreferrer">Angular CLI Official Documentation</a></li>
                <li><a href="https://angular.io/guide/quickstart" target="_blank" rel="noreferrer">Angular Quick Start Guide</a></li>
            </ul>
        </div>
    );
};

export default ProjectSetup;
