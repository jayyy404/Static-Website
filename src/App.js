
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';  
import './index.css'; 

function App() {
  const location = useLocation();

  return (
    <div>
 
      <Navbar />

      <Routes>

        <Route path="/" element={<Header />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>

      {location.pathname === "/" && <Menu />}

   <Footer/>
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
