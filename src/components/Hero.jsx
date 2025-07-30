import React from 'react';
import heroImage from '../images/bhok.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image"
        />
      </div>
    </section>
  );
}



