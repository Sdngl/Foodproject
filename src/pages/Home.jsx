import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FoodCard from '../components/FoodCard';
import './home.css';

import biryaniImg from '../images/biryani.webp';
import momoImg from '../images/Momo.jpg';
import sekuwaImg from '../images/sekuwa.webp';
import crispyImg from '../images/cripsy.jpg';
import butterImg from '../images/Butter.jpg';

import momoTop from '../images/momo.jpg';
import pizzaTop from '../images/pizza.jpg';
import burgerTop from '../images/burger.jpg';
import choumeinTop from '../images/choumein.jpg';
import chocomomoTop from '../images/chocomomo.webp';

import cokeBev from '../images/coke.jpg';
import fantaBev from '../images/fanta.jpg';
import beerBev from '../images/beer.jpeg';
import lassiBev from '../images/lassi.webp';
import oakBev from '../images/oak.jpeg';

const todaysSpecial = [
  { id: 1, src: biryaniImg, alt: 'Chicken Biryani', name: 'Chicken Biryani', price: '899' },
  { id: 2, src: momoImg, alt: 'Momo', name: 'Momo', price: '199' },
  { id: 3, src: sekuwaImg, alt: 'Sekuwa', name: 'Sekuwa', price: '599' },
  { id: 4, src: crispyImg, alt: 'Crispy Dish', name: 'Crispy Dish', price: '399' },
  { id: 5, src: butterImg, alt: 'Butter Naan', name: 'Butter Naan', price: '200' },
];

const topSellers = [
  { id: 6, src: momoTop, alt: 'Momo', name: 'Momo', price: '100' },
  { id: 7, src: pizzaTop, alt: 'Pizza', name: 'Pizza', price: '750' },
  { id: 8, src: burgerTop, alt: 'Burger', name: 'Burger', price: '350' },
  { id: 9, src: choumeinTop, alt: 'Choumein', name: 'Choumein', price: '140' },
  { id: 10, src: chocomomoTop, alt: 'Choco Momo', name: 'Choco Momo', price: '230' },
];

const beverages = [
  { id: 11, src: cokeBev, alt: 'Coke', name: 'Coke', price: '90' },
  { id: 12, src: fantaBev, alt: 'Fanta', name: 'Fanta', price: '90' },
  { id: 13, src: beerBev, alt: 'Beer', name: 'Beer', price: '450' },
  { id: 14, src: lassiBev, alt: 'Lassi', name: 'Lassi', price: '150' },
  { id: 15, src: oakBev, alt: 'Oak', name: 'Oak', price: '1000' },
];

export default function Home({ searchQuery = '', onAddToCart, onAddToFavorites, favorites }) {
  const filterItems = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredTodaysSpecial = filterItems(todaysSpecial);
  const filteredTopSellers = filterItems(topSellers);
  const filteredBeverages = filterItems(beverages);

  const noMatches =
    filteredTodaysSpecial.length === 0 &&
    filteredTopSellers.length === 0 &&
    filteredBeverages.length === 0;

  return (
    <div className="px-4 space-y-12">
      <Hero />

      {/* Only show category if filtered items exist */}
      {filteredTodaysSpecial.length > 0 && (
        <section className="category-section">
          <FoodCard
            title={searchQuery ? '' : "Today's Special"}
            items={filteredTodaysSpecial}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            favorites={favorites}
          />
          <div className="see-more-wrapper">
            <Link to="/specials" className="see-more-btn">See More</Link>
          </div>
        </section>
      )}

      {filteredTopSellers.length > 0 && (
        <section className="category-section">
          <FoodCard
            title={searchQuery ? '' : 'Top Sellers'}
            items={filteredTopSellers}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            favorites={favorites}
          />
          <div className="see-more-wrapper">
            <Link to="/topsellers" className="see-more-btn">See More</Link>
          </div>
        </section>
      )}

      {filteredBeverages.length > 0 && (
        <section className="category-section">
          <FoodCard
            title={searchQuery ? '' : 'Beverages'}
            items={filteredBeverages}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            favorites={favorites}
          />
          <div className="see-more-wrapper">
            <Link to="/beverages" className="see-more-btn">See More</Link>
          </div>
        </section>
      )}

      {/* Show message if no search results */}
      {noMatches && (
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem' }}>
          No items matched your search.
        </p>
      )}

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-left-circle">Bhok Sansar</div>
        <div className="footer-text-and-hours">
          <p className="footer-text">We taste different</p>
          <div className="footer-hours">
            <span className="status-circle"></span>
            <span>Open from 6am to 6pm</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
