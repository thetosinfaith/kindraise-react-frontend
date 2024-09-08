import React from 'react';
import PartnersImg from '../../assets/partners.png'; 
import './OurPartners.css'; 

const OurPartners = () => {
  return (
    <div className="partners-container">
      <div className="partners-text">
        <p>OUR <br /> PARTNERS</p>
      </div>
      <div className="partners-image">
        <img src={PartnersImg} alt="Our Partners" />
      </div>
    </div>
  );
};

export default OurPartners;
