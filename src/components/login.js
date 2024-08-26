import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

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
};

return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
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
                <label>Message:</label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                />
            </div>

            <button type="submit">Submit</button>

        </form>
            {/* <div className="form-data">
                <h3>Form Data:</h3>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
            </div> */}
    </div>
);
};

export default Login;
