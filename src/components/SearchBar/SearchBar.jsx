import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="search-bar">
      <button className="logo"><img src='src/Images/LOGO.jpeg'/></button>
      <input type="text" className="search-input" placeholder="Search..." />
      <nav className="navbar">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Menu
        </button>
        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/review">Review</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
          </ul>
        </div>
      </nav>
      
      <div className="navbar-auth">
        <a href="#" className="auth-link">Login/Register</a>
      </div>
      <div className="navbar-cart">
        <a href="#">Cart</a>
      </div>
    </div>
  );
}

export default SearchBar;








