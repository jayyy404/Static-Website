
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';  
import Stalls from './components/Stalls';
import Carousel from './components/Carousel';
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
        <Route path="/Stalls*" element={<Stalls />} />

      </Routes>

      {location.pathname === "/" && <Carousel />}

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
