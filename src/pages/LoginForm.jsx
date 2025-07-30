import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.css'; // renamed CSS file for clarity

export default function LoginForm({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true); 
    navigate('/');
  };

  return (
    <div className="loginform-page">
      <div className="loginform-container">
        <h1 className="loginform-title">🍴 Welcome to Bhok Sansar</h1>
        <p className="loginform-subtitle">Order your favorite food anytime!</p>
        
        <form onSubmit={handleLogin} className="loginform-form">
          <input
            type="text"
            placeholder="👤 Enter Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="🔒 Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}











