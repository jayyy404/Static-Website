import React from 'react';
import bgImage from './pictures/homepage.jpg';

const Header = () => {
    return (
        <section 
            className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center" 
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="text-center">
                <h1 className="text-5xl text-white">WELCOME TO WVSU CANTEEN</h1>
            </div>
        </section>
    );
};

export default Header;
