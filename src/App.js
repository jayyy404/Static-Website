// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the new Navbar component
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './index.css'; // Tailwind CSS

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Always show the navigation (Navbar component) */}
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Header />} />

        {/* About Us route */}
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      {/* Conditionally render the Menu only on the home page ("/") */}
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
