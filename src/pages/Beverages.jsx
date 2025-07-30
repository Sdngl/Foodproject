import React from 'react';
import FoodCard from '../components/FoodCard';

import cokeImg from '../images/coke.jpg';
import fantaImg from '../images/fanta.jpg';
import beerImg from '../images/beer.jpeg';
import lassiImg from '../images/lassi.webp';
import oakImg from '../images/oak.jpeg';

const beverages = [
  { id: 1, src: cokeImg, alt: 'Coke', name: 'Coke', price: '90' },
  { id: 2, src: fantaImg, alt: 'Fanta', name: 'Fanta', price: '90' },
  { id: 3, src: beerImg, alt: 'Beer', name: 'Beer', price: '450' },
  { id: 4, src: lassiImg, alt: 'Lassi', name: 'Lassi', price: '150' },
  { id: 5, src: oakImg, alt: 'Oak', name: 'Oak', price: '1000' },
];

export default function Beverages({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-8">
      <FoodCard
        title="Beverages"
        items={beverages}
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}
// This component displays a list of beverages available for order.