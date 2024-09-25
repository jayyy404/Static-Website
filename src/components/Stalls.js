import React, { useState } from 'react';
import './Stalls.css'; // Import the CSS file

const stalls = [
  {
    id: 1,
    name: 'Stall 1',
    description: 'Best burgers in town!',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 2,
    name: 'Stall 2',
    description: 'Delicious pasta!',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 3,
    name: 'Stall 3',
    description: 'Fresh sushi!',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  // Add more stalls as needed
];

function App() {
  const [selectedStall, setSelectedStall] = useState(null);

  const handleSelectStall = (index) => {
    setSelectedStall(index);
  };

  const closeModal = () => {
    setSelectedStall(null);
  };

  const navigateStalls = (direction) => {
    if (direction === 'next') {
      setSelectedStall((prev) => (prev + 1) % stalls.length);
    } else {
      setSelectedStall((prev) => (prev - 1 + stalls.length) % stalls.length);
    }
  };

  return (
    <div className="stall-container">
      {stalls.map((stall, index) => (
        <div
          key={stall.id}
          className="stall-box"
          onClick={() => handleSelectStall(index)}
        >
          {/* 3:4 aspect ratio for image + name */}
          <div className="stall-image">
            <img src={stall.image} alt={stall.name} />
          </div>
          <h2 className="stall-name">{stall.name}</h2>
        </div>
      ))}

      {selectedStall !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
                 &#10539;
            </button>
            {/* Image on the left */}
            <div className="modal-image">
              <img
                src={stalls[selectedStall].image}
                alt={stalls[selectedStall].name}
              />
            </div>
            {/* Scrollable text content on the right */}
            <div className="modal-text">
              <h2 className="modal-title">{stalls[selectedStall].name}</h2>
              <p className="modal-description">
                {stalls[selectedStall].description}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            className="modal-nav-button prev"
            onClick={() => navigateStalls('prev')}
          >
            &#11164;
          </button>
          <button
            className="modal-nav-button next"
            onClick={() => navigateStalls('next')}
          >
            &#10148;
          </button>
        </div>
      )}
    </div>
  );
}

export default App;