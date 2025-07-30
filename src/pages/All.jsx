
import React from "react";
import FoodCard from "../components/FoodCard";

// Import images
import biryaniImg from "../images/biryani.webp";
import momoImg from "../images/momo.jpg";
import sekuwaImg from "../images/sekuwa.webp";
import crispyImg from "../images/cripsy.jpg";
import butterImg from "../images/butter.jpg";
import momoTop from "../images/momo.jpg";
import pizzaTop from "../images/pizza.jpg";
import burgerTop from "../images/burger.jpg";
import choumeinTop from "../images/choumein.jpg";
import chocomomoTop from "../images/chocomomo.webp";

const todaysSpecial = [
  { id: 1, src: biryaniImg, alt: "Chicken Biryani", name: "Chicken Biryani", price: "899" },
  { id: 2, src: momoImg, alt: "Momo", name: "Momo", price: "199" },
  { id: 3, src: sekuwaImg, alt: "Sekuwa", name: "Sekuwa", price: "599" },
  { id: 4, src: crispyImg, alt: "Crispy Dish", name: "Crispy Dish", price: "399" },
  { id: 5, src: butterImg, alt: "Butter Naan", name: "Butter Naan", price: "200" },
];

const topSellers = [
  { id: 6, src: momoTop, alt: "Momo", name: "Momo", price: "100" },
  { id: 7, src: pizzaTop, alt: "Pizza", name: "Pizza", price: "750" },
  { id: 8, src: burgerTop, alt: "Burger", name: "Burger", price: "350" },
  { id: 9, src: choumeinTop, alt: "Choumein", name: "Choumein", price: "140" },
  { id: 10, src: chocomomoTop, alt: "Choco Momo", name: "Choco Momo", price: "230" },
];


export default function All({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-12">
      {/* Today's Special */}
      <section className="category-section">
        <FoodCard
          
          items={todaysSpecial}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          favorites={favorites}
        />
      </section>

      {/* Top Sellers */}
      <section className="category-section">
        <FoodCard
          
          items={topSellers}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          favorites={favorites}
        />
      </section>
    </div>
  );
}