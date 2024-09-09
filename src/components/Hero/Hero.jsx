import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoveImage from '../../assets/love-image.png';
import QRCode from '../../assets/QR-code.png';
import Arrow from "../../assets/arrow.png";
import Download from '../../assets/download.png';
import Print from '../../assets/print.png';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    }); 
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-img-content" data-aos="fade-right">
          <div className="main-image-container">
            <img src={LoveImage} alt="Fundraising" className="hero-main-image" />
          </div>
        </div>

        <div className="hero-content" data-aos="fade-left">
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
