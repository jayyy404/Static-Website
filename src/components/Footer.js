import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gray-300 text-center py-5">
      <p className="text-gray-700">Coffee Tastings is a newly built business which provides a selection of tasty coffee.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <i className="fa-brands fa-facebook text-2xl"></i>
        <i className="fa-brands fa-instagram text-2xl"></i>
        <i className="fa-brands fa-twitter text-2xl"></i>
      </div>
    </section>
  );
};

export default Footer;
