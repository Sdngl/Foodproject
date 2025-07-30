import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import TodaysSpecial from './pages/TodaysSpecial';
import TopSellers from './pages/TopSellers';
import Beverages from './pages/Beverages';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';

// ✅ Import your category pages
import Veg from './pages/Veg';
import NonVeg from './pages/NonVeg';
import All from './pages/All';

// ✅ Import Orders page
import Orders from './pages/Orders';

export default function App() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('auth') === 'true');
  const [searchQuery, setSearchQuery] = useState('');

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const onAddToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const onUpdateCartQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const onRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorites = (item) => {
    setFavorites((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const onRemoveFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const showHeader = isLoggedIn && location.pathname !== '/login';

  return (
    <>
      {showHeader && (
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          setIsLoggedIn={setIsLoggedIn}
          wishlistCount={favorites.length}
          cartCount={cartItems.length}
        />
      )}

      <Routes>
        <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home
                searchQuery={searchQuery}
                onAddToCart={onAddToCart}
                onAddToFavorites={onAddToFavorites}
                favorites={favorites}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/specials"
          element={isLoggedIn ? <TodaysSpecial onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />}
        />

        <Route
          path="/topsellers"
          element={isLoggedIn ? <TopSellers onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />}
        />

        <Route
          path="/beverages"
          element={isLoggedIn ? <Beverages onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />}
        />

        <Route
          path="/favorites"
          element={isLoggedIn ? <Favorites favorites={favorites} onAddToCart={onAddToCart} onRemoveFromFavorites={onRemoveFromFavorites} /> : <Navigate to="/login" />}
        />

        <Route
          path="/cart"
          element={isLoggedIn ? <Cart cartItems={cartItems} onUpdateQuantity={onUpdateCartQuantity} onRemoveItem={onRemoveCartItem} /> : <Navigate to="/login" />}
        />

        {/* ✅ Category Routes */}
        <Route path="/veg" element={isLoggedIn ? <Veg onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />} />
        <Route path="/nonveg" element={isLoggedIn ? <NonVeg onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />} />
        <Route path="/all" element={isLoggedIn ? <All onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorites={favorites} /> : <Navigate to="/login" />} />

        {/* ✅ New Orders Route */}
        <Route path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/login" />} />

        <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/login'} />} />
      </Routes>
    </>
  );
}
