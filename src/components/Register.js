import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const validateInput = (type, value) => {
    switch (type) {
      case 'email':
        return /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address.';
      case 'password':
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(value)
          ? ''
          : 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.';
      case 'mobile':
        return /^\d{10}$/.test(value) ? '' : 'Mobile number must be 10 digits.';
      default:
        return '';
    }
  };

  const handleRegister = () => {
    const emailError = validateInput('email', email);
    const passwordError = validateInput('password', password);
    const mobileError = validateInput('mobile', mobile);

    if (emailError || passwordError || mobileError) {
      setError(emailError || passwordError || mobileError);
      return;
    }

    const userData = { username, email, password, mobile };
    register(userData);
    navigate('/login');
  };

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
