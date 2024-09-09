import React, { useEffect } from 'react';
import Outreach from "../../assets/donor-outreach.png";
import './DonorOutreach.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorOutreach = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

  return (
    <section className="donor-outreach-description-section">
      <div className="donor-outreach-description-container">
        <div className="donor-outreach-img-content" data-aos="fade-right">
          <div className="donor-outreach-main-image-container">
            <img src={Outreach} alt="Donor Outreach" className="donor-outreach-main-image" />
          </div>
        </div>

        <div className="donor-outreach-description-content" data-aos="fade-left">
          <h1>Donor <span>Outreach</span></h1>
          <p>
            Stay engaged. Share your <br /> message. Our Outreach Tools can <br /> help you build relationships and keep donors connected to your <br /> cause.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonorOutreach;
