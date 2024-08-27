import { useState, useEffect } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const register = (formData) => {
        console.log('Registering user:', formData);
        localStorage.setItem('user', JSON.stringify(formData));
        setUser(formData);
    };

    const login = (username, password) => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            return 'Please register first.';
        }
        if (storedUser.username !== username) {
            return 'Invalid username.';
        }
        if (storedUser.password !== password) {
            return 'Invalid password.';
        }
        setUser(storedUser);
        return '';
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return { user, register, login, logout };
};

export default useAuth;
