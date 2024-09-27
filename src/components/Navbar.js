import React from 'react';
import logo from './pictures/coop.jpg';
import '../App.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-50 bg-gray-900">
      <Link to="/">
      <img src={logo} alt="Logo" className="w-24 h-24 rounded-full" />
      </Link>
      <div className="flex-1 text-right"> 
        <ul className="flex space-x-4 justify-end"> 
          <li>
            <a href="/" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              HOME
            </a>
          </li>
          <li>
            <a href="/stalls" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              STALLS
            </a>
          </li>
          <li>
            <a href="/about-us" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
