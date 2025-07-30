import React, { useState, useRef, useEffect } from 'react';
import { Search, Heart, ShoppingCart, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header({
  searchQuery,
  onSearchChange,
  setIsLoggedIn,
  wishlistCount = 0,
  cartCount = 0,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Do you really want to logout?');
    if (confirmed) {
      localStorage.removeItem('auth');
      setIsLoggedIn(false);
      navigate('/login');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-container" ref={dropdownRef}>
          
          {/* Logo */}
          <div className="header-logo">
            <h1>भोक संसार</h1>
            <span>Bhok Sansar</span>
          </div>

          {/* Search + Nav Links */}
          <div className="search-nav-wrapper" style={{ display: 'flex', alignItems: 'center', flex: 1, margin: '0 2rem' }}>
            <div className="header-search">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Hungry?"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            <nav className="nav-links" style={{ display: 'flex', gap: '2rem', marginLeft: '2rem' }}>
              {/* Home Button */}
              <button
                onClick={() => navigate('/')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#4b5563',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#000')}
                onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
              >
                Home
              </button>

              {/* Categories Dropdown */}
              <div className="categories-dropdown">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1rem',
                    color: '#4b5563',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Categories ▾
                </button>

                {categoriesOpen && (
                  <ul className="categories-menu">
                    <li onClick={() => { navigate('/all'); setCategoriesOpen(false); }}>All</li>
                    <li onClick={() => { navigate('/veg'); setCategoriesOpen(false); }}>Veg</li>
                    <li onClick={() => { navigate('/nonveg'); setCategoriesOpen(false); }}>Non-Veg</li>
                  </ul>
                )}
              </div>

              {/* NEW - Your Orders Button */}
              <button
                onClick={() => navigate('/orders')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1rem',
                  color: '#4b5563',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#000')}
                onMouseLeave={(e) => (e.target.style.color = '#4b5563')}
              >
                Your Orders
              </button>
            </nav>
          </div>

          {/* Icons */}
          <div className="header-icons">
            <button onClick={() => navigate('/favorites')} style={{ position: 'relative' }}>
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
            </button>

            <button onClick={() => navigate('/cart')} style={{ position: 'relative' }}>
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && <span className="badge orange">{cartCount}</span>}
            </button>

            <div className="user-dropdown">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <User className="w-6 h-6" />
              </button>

              {dropdownOpen && (
                <div className="user-dropdown-menu">
                  <button onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
