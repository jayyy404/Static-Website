import React from 'react';

const products = [
  { src: './pictures/latte.jpg', name: 'LATTE', price: '₱140.00' },
  { src: './pictures/americano.jpg', name: 'AMERICANO', price: '₱145.00' },
  { src: './pictures/machiatto.jpg', name: 'MACHIATTO', price: '₱120.00' },
  { src: './pictures/flatwhite.jpg', name: 'FLAT-WHITE', price: '₱115.00' },
  { src: './pictures/capuccino.jpg', name: 'CAPUCCINO', price: '₱135.00' },
  { src: './pictures/espresso.jpg', name: 'ESPRESSO', price: '₱145.00' },
];

const Menu = () => {
  return (
    <section className="bg-black py-10">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.name} className="text-center p-4">
            <img src={product.src} alt={product.name} className="rounded-full w-full h-48 object-cover" />
            <h3 className="text-white text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-white text-sm">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;