
import React from 'react';
import bgImage from './pictures/bgkape.jpg';

const Header = () => {
  return (
    <section className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-7xl text-yellow-200">WELCOME TO COFFEE TASTING</h1>
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl italic text-yellow-200">Where every sip is a memory</h2>
      </div>
    </section>
  );
};

export default Header;
