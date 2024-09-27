import React, { useState, useEffect } from 'react';
import logo from './pictures/coop.jpg';
import '../App.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to track the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ease-in-out 
      ${isScrolled ? 'bg-neutral-950 bg-opacity-100' : 'bg-neutral-950 bg-opacity-80'} p-4`}>
      
      <div className={`flex mx-6 items-center transition-all duration-300 ease-in-out ${isScrolled ? 'justify-center' : 'justify-between'}`}>
        {/* Logo */}
        {!isScrolled && (
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 h-24 rounded-full" />
          </Link>
        )}
        
        {/* Navigation Links */}
        <ul className={`flex space-x-4 flex-1 transition-all duration-300 ease-in-out 
          ${isScrolled ? 'justify-center' : 'justify-end'}`}>
          <li>
            <a href="/" className="text-white text-lg hover:bg-white hover:text-blue-700 px-3 py-2 rounded">
              HOME
            </a>
          </li>
          <li>
            <a href="/stalls" className="text-white text-lg hover:bg-white hover:text-blue-700 px-3 py-2 rounded">
              STALLS
            </a>
          </li>
          <li>
            <a href="/about-us" className="text-white text-lg hover:bg-white hover:text-blue-700 px-3 py-2 rounded">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-white text-lg hover:bg-white hover:text-blue-700 px-3 py-2 rounded">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
