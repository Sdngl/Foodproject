import React from "react";
import FoodCard from "../components/FoodCard";
import momoImg from "../images/momo.jpg";
import crispyImg from "../images/cripsy.jpg";
import butterImg from "../images/butter.jpg";

const vegItems = [
  { id: 1, src: momoImg, alt: "Veg Momo", name: "Veg Momo", price: "199" },
  { id: 2, src: butterImg, alt: "Butter Naan", name: "Butter Naan", price: "200" },
  { id: 3, src: crispyImg, alt: "Crispy Veg Dish", name: "Crispy Dish", price: "399" },
];


export default function Veg({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-12">
      <FoodCard
        title="Veg Dishes"
        items={vegItems}
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}