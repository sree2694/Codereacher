// Authentication.jsx
import React, { useState } from 'react';
import '../css/Authentication.css';

const Authentication = () => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Mock authentication logic
        if (username === 'admin' && password === 'password') {
            setUser({ username: 'admin', token: '12345' });
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <div className="authentication">
            <h1>Authentication and Security in AngularJS</h1>

            <h2>Overview</h2>
            <p>
                Authentication and security are critical aspects of modern web applications.
                AngularJS provides built-in mechanisms and patterns to handle authentication securely.
            </p>

            <h2>Concepts</h2>
            <ul>
                <li>
                    <strong>Authentication:</strong> Verifying a user's identity using credentials like username and password.
                </li>
                <li>
                    <strong>Authorization:</strong> Granting or denying access to specific resources based on the user's role.
                </li>
                <li>
                    <strong>Token-Based Authentication:</strong> Using tokens (e.g., JWT) to securely transmit user credentials.
                </li>
                <li>
                    <strong>Secure Routes:</strong> Protecting specific routes or views using guards.
                </li>
            </ul>

            <h2>Example</h2>
            <h3>Login and Logout</h3>
            {!user ? (
                <div>
                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="Password" id="password" />
                    <button onClick={() => {
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                        login(username, password);
                    }}>
                        Login
                    </button>
                </div>
            ) : (
                <div>
                    <p>Welcome, {user.username}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )}

            <h2>Best Practices</h2>
            <ul>
                <li>Always encrypt sensitive data during transmission (e.g., use HTTPS).</li>
                <li>Use secure storage for tokens (e.g., HttpOnly cookies).</li>
                <li>Implement role-based access control (RBAC) for better authorization.</li>
                <li>Validate user inputs to prevent injection attacks.</li>
            </ul>

            <h2>Quiz</h2>
            <ul>
                <li>What is the difference between authentication and authorization?</li>
                <li>How can tokens enhance security in web applications?</li>
                <li>What is the purpose of HTTPS in securing web applications?</li>
            </ul>

            <h2>References</h2>
            <ul>
                <li><a href="https://angular.io/guide/security" target="_blank" rel="noreferrer">Angular Security Guide</a></li>
                <li><a href="https://jwt.io/" target="_blank" rel="noreferrer">JWT Official Documentation</a></li>
            </ul>
        </div>
    );
};

export default Authentication;
