import React from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
    return (
        <div className="help-center">
            <h1>Help Center</h1>

            <section>
                <h2>Frequently Asked Questions (FAQs)</h2>
                <p>
                    Browse through our most frequently asked questions to quickly find answers to common issues.
                </p>
                <ul>
                    <li>How do I sign up for a course?</li>
                    <li>What is the refund policy?</li>
                    <li>How can I reset my password?</li>
                </ul>
            </section>

            <section>
                <h2>Contact Support</h2>
                <p>
                    If you need additional assistance, our support team is here to help. Please reach out using one of the methods below:
                </p>
                <ul>
                    <li>Email: <a href="mailto:support@mernacademy.com">support@mernacademy.com</a></li>
                    <li>Phone: +1-800-123-4567</li>
                    <li>Live Chat: Available 9:00 AM - 6:00 PM (Monday - Friday)</li>
                </ul>
            </section>

            <section>
                <h2>Technical Issues</h2>
                <p>
                    Experiencing technical difficulties? Follow these steps to resolve common issues:
                </p>
                <ol>
                    <li>Ensure your internet connection is stable.</li>
                    <li>Clear your browser cache and cookies.</li>
                    <li>Try accessing the platform on a different browser or device.</li>
                </ol>
                <p>
                    If the issue persists, please contact our technical support team.
                </p>
            </section>

            <section>
                <h2>Community Resources</h2>
                <p>
                    Join our community forums to connect with other learners, share knowledge, and find additional support.
                </p>
                <p>
                    <a href="/community">Visit Community Forums</a>
                </p>
            </section>

            <section>
                <h2>Feedback</h2>
                <p>
                    Your feedback helps us improve! Share your thoughts and suggestions to help us enhance your learning experience.
                </p>
                <p>
                    <a href="/feedback">Submit Feedback</a>
                </p>
            </section>
        </div>
    );
};

export default HelpCenter;
