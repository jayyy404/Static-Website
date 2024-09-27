import React, { useState } from 'react';
import './Stalls.css'; // Import the CSS file

const stalls = [
  {
    id: 1,
    name: 'IloveMilktea Store',
    price_range: '₱20 - ₱60',
    description: 'A delightful stop for milktea enthusiasts and snack lovers alike, IloveMilktea Store offers a variety of savory snacks and refreshing drinks. Enjoy their classic siopao and crispy lumpiang shanghai paired with a perfectly brewed wintermelon or taro milktea',
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 2,
    name: 'Cafe Pink Wall Shop',
    price_range: '₱20 - ₱55',
    description: 'This cozy café provides a warm atmosphere with its pink-themed decor. The menu features comforting snacks like toast with butter, ensaymada, and delicious cookies, alongside rich brewed and iced coffee options to fuel your day.',
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 3,
    name: 'Generic Green Walled Store',
    price_range: '₱20 - ₱50',
    description: 'Known for its casual vibe, this store serves up tasty bites that are perfect for a quick snack. Indulge in cheese sticks and nachos, or enjoy a classic hotdog on a stick while sipping on a refreshing mango shake or halo-halo.',
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 4,
    name: "Zen's Cafe",
    price_range: '₱20 - ₱55',
    description: "Zen's Cafe is all about comfort food and quality beverages. With items like the ube cheese pandesal and hearty tuna sandwich, you can satisfy your cravings. Their coffee selection is a must-try for anyone needing a caffeine fix.",
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 5,
    name: 'Chickbrew',
    price_range: '₱30 - ₱55',
    description: ' Specializing in chicken dishes, Chickbrew is perfect for fried chicken fans. From chicken fillet sandwiches to crunchy wings and nuggets, there’s something for everyone. Pair your meal with their flavorful iced coffee for a complete experience.',
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 6,
    name: 'Mushin Japanese Cafe',
    price_range: '₱35 - ₱70',
    description: 'For those craving Japanese flavors, Mushin Japanese Cafe serves an array of authentic dishes, including takoyaki and chicken ramen. Their gyoza and tempura provide a delightful taste of Japan, complemented by refreshing iced coffee or a matcha latte.',
    location: '2nd Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 7,
    name: 'Green Kiosk',
    price_range: '₱15 - ₱50',
    description: 'A vibrant stop for value lovers, Green Kiosk offers enticing buy-one-take-one deals on burgers, hotdogs, and nachos. Enjoy hearty meals like chicken BBQ and pancit canton, perfect for sharing or satisfying your hunger solo.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 8,
    name: 'Dinette, etc',
    price_range: '₱25 - ₱50',
    description: 'Dinette, etc provides a casual dining experience with its selection of burgers and snacks. Their burger with fries is a favorite, while the chicken nuggets combo offers a satisfying option for those craving comfort food.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 9,
    name: 'Kiosk 1',
    price_range: '₱20 - ₱55',
    description: 'This kiosk specializes in delicious waffles and French toast. Whether you prefer plain or hotdog waffles, Kiosk 1 has a sweet or savory option for everyone. Pair your treat with a hot chocolate or iced coffee for a delightful snack break.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 10,
    name: 'Kiosk 2',
    price_range: '₱40 - ₱55',
    description: 'Kiosk 2 serves traditional Filipino dishes, including pork adobo and chicken curry. Each meal is prepared with authentic flavors, providing a taste of home in every bite. Perfect for those seeking hearty, familiar meals.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 11,
    name: 'Kiosk 3',
    price_range: '₱45 - ₱55',
    description: 'Known for its comfort meals, Kiosk 3 offers fried chicken, lumpia, and classic Filipino favorites like pork sinigang and chicken inasal. Each dish promises to warm your heart and satisfy your taste buds.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 12,
    name: 'Kiosk 4',
    price_range: '₱40 - ₱50',
    description: 'Kiosk 4 presents a selection of beloved Filipino comfort food, including pork sisig and chicken adobo. With delicious home-cooked flavors, this kiosk is a must-visit for fans of traditional meals.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 13,
    name: 'Kiosk 5',
    price_range: '₱40 - ₱55',
    description: "Offering a customizable experience, Kiosk 5 allows you to pick your carenderia meal, which includes rice, one meat, and one veggie. This flexibility, along with favorites like chicken afritada, ensures there's something for everyone.",
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 14,
    name: 'Kiosk 6, 7, 8',
    price_range: '₱60 - ₱75',
    description: 'For those looking for a more filling meal, these kiosks provide hearty options like pork BBQ and beef caldereta. Each dish is generously portioned, making it an ideal choice for a substantial lunch or dinner.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 15,
    name: 'Kiosk 9',
    price_range: '₱30 - ₱35',
    description: 'Another great waffle destination, Kiosk 9 serves up a variety of waffle options with delicious toppings like cheese and yema. Perfect for a light snack or a sweet treat to brighten your day.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 16,
    name: 'Kiosk 10',
    price_range: '₱20 - ₱55',
    description: 'Kiosk 10 is a go-to spot for classic Filipino street food. Enjoy favorites like isaw, betamax, and kikiam, or try their refreshing buko juice and melon shake for a satisfying snack break.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 17,
    name: 'Kiosk 11',
    price_range: '₱20 - ₱55',
    description: 'Kiosk 11 offers a variety of Filipino snacks and drinks, including fish balls, kwek-kwek, and refreshing gulaman. Their selection of street food favorites is perfect for those looking to enjoy classic flavors on the go.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
  {
    id: 18,
    name: 'Kiosk 12',
    price_range: '₱20 - ₱60',
    description: 'This kiosk is a haven for snack lovers, offering a selection of sweet treats like puto and kutsinta. For a refreshing drink, try their ube matcha lemonade or bubble teas, perfect for cooling off on warm days.',
    location: '1st Floor',
    image: 'https://via.placeholder.com/400x300', // Placeholder image
  },
];

function App() {
  const [selectedStallIndex, setSelectedStallIndex] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleSelectStall = (index) => {
    setSelectedStallIndex(index);
  };

  const closeModal = () => {
    setSelectedStallIndex(null);
  };

  const navigateStalls = (direction) => {
    const filteredStalls = stalls.filter(stall => selectedLocations.length === 0 || selectedLocations.includes(stall.location));

    if (filteredStalls.length === 0) return; // No stalls to navigate

    let newIndex = selectedStallIndex;
    if (direction === 'next') {
      newIndex = (newIndex + 1) % filteredStalls.length;
    } else {
      newIndex = (newIndex - 1 + filteredStalls.length) % filteredStalls.length;
    }

    // Ensure newIndex points to a valid stall in filteredStalls
    if (newIndex < 0) newIndex = filteredStalls.length - 1;
    if (newIndex >= filteredStalls.length) newIndex = 0;

    setSelectedStallIndex(newIndex);
  };


  const handleLocationChange = (location) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };

  // Filter stalls based on selected locations
  const filteredStalls = stalls.filter(stall => selectedLocations.length === 0 || selectedLocations.includes(stall.location));

  return (
    <div className="container-main">
      {/* Filter Container */}
      <div className="filter-container">
        {['1st Floor', 'Outside', '2nd Floor'].map((location) => (
          <label key={location}>
            <input
              type="checkbox"
              checked={selectedLocations.includes(location)}
              onChange={() => handleLocationChange(location)}
            />
            {location}
          </label>
        ))}
      </div>
      <div className="stall-container">
        {filteredStalls.length > 0 ? (
          filteredStalls.map((stall, index) => (
            <div
              key={stall.id}
              className="stall-box"
              onClick={() => handleSelectStall(index)}
            >
              <div className="stall-image">
                <img src={stall.image} alt={stall.name} />
              </div>
              <h2 className="stall-name">{stall.name}</h2>
            </div>
          ))
        ) : (
          <p>No stalls available for the selected locations.</p> // Message when no stalls are available
        )}

        {selectedStallIndex !== null && (
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal} aria-label="Close Modal">
                &#10539;
              </button>
              <div className="modal-image">
                <img
                  src={filteredStalls[selectedStallIndex].image}
                  alt={filteredStalls[selectedStallIndex].name}
                  loading="lazy"
                />
              </div>
              <div className="modal-text">
                <h2 id="modal-title" className="modal-title">{filteredStalls[selectedStallIndex].name}</h2>
                <p id="modal-description" className="modal-description">
                  {filteredStalls[selectedStallIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              className="modal-nav-button prev"
              onClick={() => navigateStalls('prev')}
              aria-label="Previous Stall"
              disabled={filteredStalls.length <= 1} // Disable if there's one or no filtered stalls
            >
              &#11164;
            </button>
            <button
              className="modal-nav-button next"
              onClick={() => navigateStalls('next')}
              aria-label="Next Stall"
              disabled={filteredStalls.length <= 1} // Disable if there's one or no filtered stalls
            >
              &#10148;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
