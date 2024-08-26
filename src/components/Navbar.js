import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar-left">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <ul className="navbar-right">
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
    );
};

export default Navbar;
