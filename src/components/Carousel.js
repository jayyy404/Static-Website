import React from 'react';
import './Carousel.css'; // Import the updated CSS file

const Carousel = () => {
  // Dynamically import images from the carousel folder
  const images = require.context('./pictures/Carousel', false, /\.(png|jpe?g|svg)$/);

  // Menu items with images only
  const menuItems = [
    { image: '1.jpg' },
    { image: '2.jpg' },
    { image: '3.jpg' },
    { image: '4.jpg' },
    { image: '5.jpg' },
    // Add more images as needed
  ];

  // Duplicate the menu items to create a seamless loop
  const duplicatedMenuItems = [...menuItems, ...menuItems];

  const getImage = (imageName) => {
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error('Image not found:', imageName);
      return ''; // Fallback if image not found
    }
  };

  return (
    <section className = "bg-white py=40">
    <div className="carousel-container">
      <div className="carousel">
        {duplicatedMenuItems.map((item, index) => (
          <img
            key={index}
            src={getImage(item.image)}
            alt={`carousel-item-${index}`}
            className="carousel-item-image"
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default Carousel;