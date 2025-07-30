import React from 'react';
import FoodCard from '../components/FoodCard';

import momoImg from '../images/Momo.jpg';
import pizzaImg from '../images/pizza.jpg';
import burgerImg from '../images/burger.jpg';
import choumeinImg from '../images/choumein.jpg';
import chocomomoImg from '../images/chocomomo.webp';

const topSellers = [
  { id: 1, src: momoImg, alt: 'Momo', name: 'Momo', price: '100' },
  { id: 2, src: pizzaImg, alt: 'Pizza', name: 'Pizza', price: '750' },
  { id: 3, src: burgerImg, alt: 'Burger', name: 'Burger', price: '350' },
  { id: 4, src: choumeinImg, alt: 'Choumein', name: 'Choumein', price: '140' },
  { id: 5, src: chocomomoImg, alt: 'Choco Momo', name: 'Choco Momo', price: '230' },
];

export default function TopSellers({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-8">
      <FoodCard
        title="Top Sellers"
        items={topSellers}
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}
