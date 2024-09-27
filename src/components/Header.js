import React from 'react';
import bgImage from './pictures/homepage.jpg';

const Header = () => {
    return (
        <section className="relative min-h-screen w-full bg-cover bg-center boxfit" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-5xl text-white">WELCOME TO WVSU CANTEEN</h1>
            </div>
           
        </section>
    );
};

export default Header;