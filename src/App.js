import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { UserContextProvider } from './useContext/UserContextExample'; // Adjust the import as necessary
import CardDetails from './components/CardDetails';

const App = () => {
    return (
        <Router>
            <UserContextProvider>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/card-details" element={<CardDetails />}/>
                </Routes>
            </UserContextProvider>
        </Router>
    );
};

export default App;
