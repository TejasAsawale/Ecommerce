import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjusted path based on directory structure

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        address: '',
        gender: '',
        age: ''
    });

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        register(formData);
        navigate('/login');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input 
                        type="text" 
                        name="mobile" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
