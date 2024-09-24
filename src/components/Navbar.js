
import React from 'react';
import logo from './pictures/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-opacity-50 bg-gray-900">
      <img src={logo} alt="Logo" className="w-24 h-24 rounded-full" />
      <div className="flex-1 text-right">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              HOME
            </a>
          </li>
          <li>
            <a href="/about-us" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact-us" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Stalls" className="text-white text-lg hover:bg-white hover:text-black px-3 py-2 rounded">
              Stalls
            </a>
          </li>
        </ul>
      </div>
      <i className="fa fa-bars text-white text-2xl cursor-pointer"></i>
    </nav>
  );
};

export default Navbar;
