import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Header.css';
import { useNavigate } from 'react-router-dom';
import OfficialLogo from '../../assets/logo.svg';
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="header-container">
      <header className="header">
        <img src={OfficialLogo} alt="Logo" className="logo" onClick={() => navigate('/')} data-aos="fade-right" />
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item" data-aos="fade-right">
              <button className="dropdown-toggle" onClick={() => toggleDropdown('product')}>
                Product <GoChevronDown />
              </button>
              {dropdownOpen === 'product' && (
                <ul className="dropdown-menu" data-aos="ffade-right">
                  <li className="dropdown-item" onClick={() => navigate('/product1')}>Product 1</li>
                  <li className="dropdown-item" onClick={() => navigate('/product2')}>Product 2</li>
                </ul>
              )}
            </li>
            <li className="nav-item" data-aos="fade-right">
              <button className="dropdown-toggle" onClick={() => toggleDropdown('pricing')}>
                Pricing <GoChevronDown />
              </button>
              {dropdownOpen === 'pricing' && (
                <ul className="dropdown-menu" data-aos="fade-right">
                  <li className="dropdown-item" onClick={() => navigate('/pricing')}>Pricing Plan 1</li>
                </ul>
              )}
            </li>
            <li className="nav-item" data-aos="fade-right">
              <button className="dropdown-toggle" onClick={() => toggleDropdown('resources')}>
                Resources <GoChevronDown />
              </button>
              {dropdownOpen === 'resources' && (
                <ul className="dropdown-menu" data-aos="fade-right">
                  <li className="dropdown-item" onClick={() => navigate('/resources')}>Blog</li>
                </ul>
              )}
            </li>
            <li className="nav-item" data-aos="fade-right">
              <button className="dropdown-toggle" onClick={() => toggleDropdown('/donation')}>
                Donation
              </button>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button onClick={() => navigate('/login')} className="nav-button login-button" data-aos="fade-right">Login</button>
          <button onClick={() => navigate('/signup')} className="nav-button signup-button" data-aos="fade-right">Signup</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
