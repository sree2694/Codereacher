import React from 'react';

const Hooks = () => (
    <div>
        <h2>Hooks</h2>
        <p>
            Hooks are functions introduced in React 16.8 that allow developers to use state and lifecycle features in
            functional components. This makes functional components more powerful and versatile.
        </p>
        <p>Commonly used hooks:</p>
        <ul>
            <li><strong>useState:</strong> Manages state in functional components.</li>
            <li><strong>useEffect:</strong> Handles side effects like API calls or subscriptions.</li>
            <li><strong>useContext:</strong> Accesses context values without prop drilling.</li>
        </ul>
        <p>Hooks simplify state and lifecycle management, making code cleaner and more maintainable.</p>
    </div>
);

export default Hooks;
