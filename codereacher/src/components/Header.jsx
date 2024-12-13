import React, { useState } from 'react';
import '../App.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src="/assets/images/logo_CR.png" alt="Education Portal Logo" />
                </div>
                <nav>
                    <ul className={isMenuOpen ? 'open' : ''}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Courses">Courses</a></li>
                        <li><a href="/about-us">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                {/* Hamburger Icon (for mobile view) */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
                </div>
            </div>
        </header>
    );
};

export default Header;
