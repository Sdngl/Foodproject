import React from "react";
import FoodCard from "../components/FoodCard";
import biryaniImg from "../images/biryani.webp";
import sekuwaImg from "../images/sekuwa.webp";
import burgerTop from "../images/burger.jpg";
import pizzaTop from "../images/pizza.jpg";
import chocomomoTop from "../images/chocomomo.webp";
import momoImg from "../images/Momo.jpg"; // ✅ Add Momo

const nonVegItems = [
  { id: 1, src: biryaniImg, alt: "Chicken Biryani", name: "Chicken Biryani", price: "899" },
  { id: 2, src: sekuwaImg, alt: "Sekuwa", name: "Sekuwa", price: "599" },
  { id: 3, src: burgerTop, alt: "Burger", name: "Burger", price: "450" },
  { id: 4, src: pizzaTop, alt: "Pizza", name: "Pizza", price: "750" },
  { id: 5, src: chocomomoTop, alt: "Choco Momo", name: "Choco Momo", price: "230" },
  { id: 6, src: momoImg, alt: "Momo", name: "Momo", price: "150" }, // ✅ Added here
];

export default function NonVeg({ onAddToCart, onAddToFavorites, favorites }) {
  return (
    <div className="px-4 space-y-12">
      <FoodCard
        title="Non-Veg Dishes"
        items={nonVegItems}
        onAddToCart={onAddToCart}
        onAddToFavorites={onAddToFavorites}
        favorites={favorites}
      />
    </div>
  );
}