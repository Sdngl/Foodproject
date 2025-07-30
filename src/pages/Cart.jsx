import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import Popup from '../pages/Popup'; // ✅ Popup is in pages

export default function Cart({ cartItems = [], onUpdateQuantity, onRemoveItem }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ modal state

  // Calculate total price safely converting price and quantity to numbers
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);

    if (isNaN(price) || isNaN(quantity)) return acc; // skip invalid
    return acc + price * quantity;
  }, 0);

  return (
    <div className="px-4 space-y-8">
      {cartItems.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <>
          <div className="cart-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {cartItems.map(({ id, name, price, src, alt, quantity }) => {
              const safePrice = Number(price);
              const safeQuantity = Number(quantity);

              return (
                <div key={id} style={{ width: 250, position: 'relative' }}>
                  <FoodCard
                    title=""
                    items={[{ id, name, price: safePrice, src, alt }]}
                    favorites={[]}
                    onAddToFavorites={() => {}}
                    onRemoveFromFavorites={() => {}}
                    onAddToCart={() => onUpdateQuantity(id, safeQuantity + 1)}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 8,
                      gap: 10,
                    }}
                  >
                    <button
                      onClick={() => onUpdateQuantity(id, safeQuantity - 1)}
                      disabled={safeQuantity <= 1}
                      aria-label={`Decrease quantity of ${name}`}
                      className="cart-qty-btn"
                    >
                      −
                    </button>
                    <span>{safeQuantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(id, safeQuantity + 1)}
                      aria-label={`Increase quantity of ${name}`}
                      className="cart-qty-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(id)}
                      aria-label={`Remove ${name} from cart`}
                      className="cart-remove-btn"
                    >
                      ×
                    </button>
                  </div>
                  <p className="cart-item-price">
                    Price: {isNaN(safePrice) || isNaN(safeQuantity)
                      ? 'Rs0.00'
                      : `Rs ${(safePrice * safeQuantity).toFixed(2)}`}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ✅ Wrap Total + Buy Now for alignment */}
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <h3 className="text-xl font-semibold cart-total">
              Total: ₹ {totalPrice.toFixed(2)}
            </h3>
            <button 
              onClick={() => setIsPopupOpen(true)} 
              className="buy-now-btn"
              style={{
                marginTop: '1rem',
                padding: '12px 28px',
                background: '#09874cff',
                color: 'white',
                borderRadius: '8px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                letterSpacing: '1px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>
          </div>
        </>
      )}

      {/* ✅ Popup Modal */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
// This component displays the user's cart with items, quantities, and total price.