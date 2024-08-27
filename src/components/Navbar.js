import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../useContext/UserContextExample';
import logo1 from '../images/logo1.jpg';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo1} alt="Bakery Logo" className="logo" />
                    <span className="brand-name">Bakery Bliss</span>
                </Link>
            </div>
            <ul className="navbar-links navbar-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="navbar-links navbar-right">
                {!user.isLoggedIn ? (
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                ) : (
                    <li><button onClick={() => setUser({ name: '', isLoggedIn: false })}>Logout</button></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
