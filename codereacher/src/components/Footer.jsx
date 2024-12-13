import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2024 Code Reacher. All Rights Reserved.</p>
                <ul>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
