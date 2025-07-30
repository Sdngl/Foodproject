import React from 'react';
import FoodCard from '../components/FoodCard';

export default function Favorites({ favorites = [], onAddToCart, onRemoveFromFavorites }) {
  return (
    <div className="px-4 space-y-8">
      

      {favorites.length === 0 ? (
        <h1>You have no favorite items yet.</h1>
      ) : (
        <FoodCard
          title="Favorites"
          items={favorites}
          onAddToCart={onAddToCart}
          onAddToFavorites={() => {}}  // no toggle here; handled in remove only
          favorites={favorites.map(item => item.id)} // pass array of favorite IDs
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      )}
    </div>
  );
}
// This component displays the user's favorite food items with options to add to cart or remove from favorites.