
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './index.css'; 

function App() {
  const location = useLocation();

  return (
    <div>
 
      <Navbar />

      <Routes>

        <Route path="/" element={<Header />} />

        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      {location.pathname === "/" && <Menu />}

      <Footer />
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
