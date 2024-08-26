import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateLogin = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) return 'Please register first.';
    switch (true) {
      case storedUser.username !== username:
        return 'Invalid username.';
      case storedUser.password !== password:
        return 'Invalid password.';
      default:
        return '';
    }
  };

  const handleLogin = () => {
    const loginError = validateLogin(username, password);
    if (loginError) {
      setError(loginError);
      return;
    }

    alert(`Welcome, ${username}!`);
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
