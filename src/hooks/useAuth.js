// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    const register = (formData) => {
        console.log('Registering user:', formData);
        localStorage.setItem('formData', JSON.stringify(formData));
        setUser(formData);
    };

    return { user, register };
};

export default useAuth;
