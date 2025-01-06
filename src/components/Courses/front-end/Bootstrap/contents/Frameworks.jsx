import React from 'react';
import '../css/Frameworks.css';

const Frameworks = () => {
    return (
        <div className="frameworks-container">
            <h1>Integrating Bootstrap with Other Frameworks</h1>
            <section>
                <h2>Using Bootstrap with React</h2>
                <p>
                    React allows you to use Bootstrap by importing CSS directly or via libraries like
                    <code>react-bootstrap</code>. This ensures that Bootstrap components integrate seamlessly
                    with React's component-based architecture.
                </p>
                <div>
                    <h3>Example</h3>
                    <code>
                        {`import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
    return <Button variant="primary">React Bootstrap Button</Button>;
}`}
                    </code>
                </div>
            </section>

            <section>
                <h2>Using Bootstrap with Angular</h2>
                <p>
                    Angular integrates with Bootstrap through the use of <code>angular.json</code> or
                    libraries like <code>ngx-bootstrap</code>. This helps to maintain Angular's modular
                    structure while leveraging Bootstrap's styling and components.
                </p>
                <div>
                    <h3>Example</h3>
                    <code>
                        {`npm install bootstrap

// angular.json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
]`}
                    </code>
                </div>
            </section>

            <section>
                <h2>Using Bootstrap with Vue.js</h2>
                <p>
                    Vue.js can incorporate Bootstrap either by direct inclusion of the CSS file or through
                    libraries like <code>bootstrap-vue</code>, allowing for responsive and styled Vue
                    components.
                </p>
                <div>
                    <h3>Example</h3>
                    <code>
                        {`npm install bootstrap-vue bootstrap

// main.js
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);`}
                    </code>
                </div>
            </section>

            <section>
                <h2>Quiz: Integrating Bootstrap</h2>
                <form>
                    <div>
                        <label>1. Which library integrates Bootstrap components with React?</label>
                        <div>
                            <input type="checkbox" id="react-bootstrap" /> React Bootstrap
                        </div>
                        <div>
                            <input type="checkbox" id="angular-bootstrap" /> Angular Bootstrap
                        </div>
                        <div>
                            <input type="checkbox" id="vue-bootstrap" /> Vue Bootstrap
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            <section>
                <h2>References</h2>
                <ul>
                    <li><a href="https://getbootstrap.com/">Official Bootstrap Documentation</a></li>
                    <li><a href="https://react-bootstrap.github.io/">React Bootstrap Documentation</a></li>
                    <li><a href="https://valor-software.com/ngx-bootstrap/#/">NGX-Bootstrap Documentation</a></li>
                    <li><a href="https://bootstrap-vue.org/">Bootstrap-Vue Documentation</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Frameworks;