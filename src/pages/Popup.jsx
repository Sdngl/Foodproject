import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './popup.css';

export default function Popup({ isOpen, onClose, cartItems = [], totalPrice = 0 }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newOrder = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      items: cartItems,  // Save cart items with order but don't show in popup
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    savedOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(savedOrders));

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      navigate('/orders');
    }, 2000);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {!showSuccess ? (
          <>
            <h2>Complete Your Order</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>

              <label>
                Phone No:
                <input type="tel" name="phone" placeholder="Enter phone number" required />
              </label>

              <label>
                Location:
                <input type="text" name="location" placeholder="Enter your address" required />
              </label>

              <div className="popup-actions" style={{ marginTop: '1rem' }}>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>✅ Your order is on the way!</h2>
          </div>
        )}
      </div>
    </div>
  );
}
