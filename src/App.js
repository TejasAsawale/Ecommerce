import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
