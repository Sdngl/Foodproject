import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {orders.map((item, index) => (
            <li 
              key={index} 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                padding: '0.8rem',
                background: '#f9f9f9',
                borderRadius: '8px',
              }}
            >
              <div>
                <strong>{item.name}</strong>  
                <br />
                📞 {item.phone} | 📍 {item.location}
                <br />
                <small>{item.date}</small>
              </div>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'red',
                  fontSize: '20px',
                  cursor: 'pointer',
                }}
                title="Remove order"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
