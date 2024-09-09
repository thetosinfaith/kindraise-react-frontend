import React, { useEffect } from 'react';
import FooterLogo from '../../assets/logo.svg';
import Facebook from '../../assets/fb-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import Telegram from '../../assets/telegram-icon.png';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-item footer-logo">
          <img src={FooterLogo} alt="Footer Logo" />
          <p className='footer-prescb'>Kindraise is dedicated to providing you with the tools you need to raise money for whatever your cause may be.</p>
        </div>
        <div className="footer-item">
          <h2>Product</h2>
          <ul>
            <li>Fundraising Page</li>
            <li>Nonprofit CRM</li>
            <li>Donor Engagement</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Privacy</h2>
          <ul>
            <li>Privacy Notice</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>FAQS</li>
            <li>Teams</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="social-media-icon">
          <img src={Facebook} alt="Facebook" />
          <img src={Telegram} alt="Telegram" />
          <img src={Instagram} alt="Instagram" />
        </div>

        <div className="footer-item footer-bottom" style={{ gridColumn: 'span 5' }} data-aos="fade-up">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
