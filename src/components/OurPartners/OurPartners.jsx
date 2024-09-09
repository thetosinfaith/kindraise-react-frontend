import React, { useEffect } from 'react';
import PartnersImg from '../../assets/partners.png';
import './OurPartners.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const OurPartners = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

  return (
    <div className="partners-container">
      <div className="partners-text" data-aos="fade-up">
        <p>OUR <br /> PARTNERS</p>
      </div>
      <div className="partners-image" data-aos="fade-down">
        <img src={PartnersImg} alt="Our Partners" />
      </div>
    </div>
  );
};

export default OurPartners;
