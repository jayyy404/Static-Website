import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from './pictures/homepage.jpg';

const Header = () => {
    return (
        <section 
            className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center" 
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="relative text-center">
                <h1 className="text-5xl text-white mb-4">WELCOME TO WVSU CANTEEN</h1>

                {/* Minimal Modern Button with hover effect */}
                <Link to="/Stalls">
                    <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md transition duration-300 ease-in-out hover:bg-black hover:text-white">
                        Explore Stalls
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Header;
