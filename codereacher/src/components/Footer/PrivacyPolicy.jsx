import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <h1>Privacy Policy</h1>

            <p>At Code Reacher Online Academy, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.</p>

            <h2>Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> When you sign up, we collect your name, email address, and other relevant details.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited, time spent, and features accessed.</li>
                <li><strong>Cookies:</strong> We use cookies to improve your user experience and analyze site usage.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
                <li>To provide and improve our services.</li>
                <li>To personalize your experience on our platform.</li>
                <li>To communicate updates, newsletters, and promotional offers.</li>
                <li>To ensure the security and functionality of our platform.</li>
            </ul>

            <h2>How We Protect Your Information</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. These include encryption, secure servers, and regular monitoring for vulnerabilities.</p>

            <h2>Third-Party Services</h2>
            <p>We may share limited information with trusted third-party services to enhance our offerings. These services are required to maintain the confidentiality and security of your information.</p>

            <h2>Your Rights</h2>
            <ul>
                <li>You can access, update, or delete your personal information by logging into your account.</li>
                <li>You can opt-out of receiving promotional communications at any time.</li>
                <li>You can disable cookies in your browser settings.</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@mernacademy.com">support@mernacademy.com</a>.</p>
        </div>
    );
};

export default PrivacyPolicy;
