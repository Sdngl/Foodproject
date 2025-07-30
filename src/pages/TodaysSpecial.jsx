import React from 'react';
import FoodCard from '../components/FoodCard';

import biryaniImg from '../images/biryani.webp';
import momoImg from '../images/Momo.jpg';
import sekuwaImg from '../images/sekuwa.webp';
import crispyImg from '../images/cripsy.jpg';
import butterImg from '../images/Butter.jpg';

const todaysSpecial = [
  { id: 1, src: biryaniImg, alt: 'Chicken Biryani', name: 'Chicken Biryani', price: '899' },
  { id: 2, src: momoImg, alt: 'Momo', name: 'Momo', price: '199' },
  { id: 3, src: sekuwaImg, alt: 'Sekuwa', name: 'Sekuwa', price: '599' },
  { id: 4, src: crispyImg, alt: 'Crispy Dish', name: 'Crispy Dish', price: '399' },
  { id: 5, src: butterImg, alt: 'Butter Naan', name: 'Butter Naan', price: '200' },
];

export default function TodaysSpecial({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-8">
      <FoodCard
        title="Today's Special"
        items={todaysSpecial}
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}
