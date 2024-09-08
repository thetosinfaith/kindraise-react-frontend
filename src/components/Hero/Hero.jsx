import React from 'react';
import { useNavigate } from 'react-router-dom'
import LoveImage from '../../assets/love-image.png';
import QRCode from '../../assets/QR-code.png';
import Arrow from "../../assets/arrow.png";
import Download from '../../assets/download.png';
import Print from '../../assets/print.png';
import './Hero.css'; 

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-content">
          <div className="main-image-container">
            <img src={LoveImage} alt="Fundraising" className="hero-main-image" />
          </div>
        </div>

        <div className="hero-content">
          <h1>Do something <br />incredible today</h1>
          <p>
          Empower the causes you care <br />about. Fundraise with ease.
          </p>

          <button onClick={() => navigate('/signup')} className="hero-button">Get Started</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
