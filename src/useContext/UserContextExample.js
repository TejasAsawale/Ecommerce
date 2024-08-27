import React, { createContext, useState } from 'react';
// import Navbar from '../components/Navbar';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", isLoggedIn: false });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
