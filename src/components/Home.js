import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="home-container">
            {user ? (
                <div>
                    <h1>Welcome, {user.username}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <h1>Please log in</h1>
            )}
        </div>
    );
};

export default Home;
