import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import './Foodcard.css';

export default function FoodCard({
  title,
  items,
  onAddToCart,
  onAddToFavorites,
  favorites,
  onRemoveFromFavorites,
}) {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <section className="food-section">
      {title && <h2 className="food-title">{title}</h2>}
      <div className="food-scroll-container">
        {items.map((item) => (
          <div
            key={item.id}
            className="food-card"
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            {/* Minus button always visible on left side */}
            {isFavorite(item.id) && onRemoveFromFavorites && (
              <button
                className="remove-favorite-btn"
                aria-label="Remove from Favorites"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromFavorites(item.id);
                }}
              >
                &minus;
              </button>
            )}

            <div className="food-img-wrapper" style={{ position: 'relative' }}>
              <img src={item.src} alt={item.alt} className="food-img" />
              {hoveredItemId === item.id && (
                <div className="icon-overlay">
                  <div className="top-icons">
                    <button
                      className="icon-btn"
                      aria-label={
                        isFavorite(item.id)
                          ? 'Remove from Favorites'
                          : 'Add to Favorites'
                      }
                      onClick={() => onAddToFavorites(item)}
                    >
                      {isFavorite(item.id) ? (
                        <FaHeart color="#ff6a00" size={20} />
                      ) : (
                        <FaRegHeart color="#ff6a00" size={20} />
                      )}
                    </button>
                    <button
                      className="icon-btn"
                      aria-label="Add to Cart"
                      onClick={() => onAddToCart(item)}
                    >
                      <FaShoppingCart color="#ff6a00" size={20} />
                    </button>
                  </div>

                  {/* Removed minus button here as now it’s always visible on left */}
                </div>
              )}
            </div>
            {item.name && <p className="food-name">{item.name}</p>}
            {item.price && <p className="food-price">Rs {item.price}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
