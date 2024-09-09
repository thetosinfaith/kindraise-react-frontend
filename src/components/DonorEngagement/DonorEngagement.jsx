import React, { useEffect } from 'react';
import ScanToDonate from "../../assets/scan-to-donate.png";
import './DonorEngagement.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonorEngagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    }); 
  }, []);

  return (
    <section className="donor-engagement-description-section">
      <div className="donor-engagement-description-container">
        <div className="donor-engagement-description-content" data-aos="fade-up">
          <h1>Donor <span>Engagement</span></h1>
          <p>
            Increase donor interaction with <br /> custom QR codes for every <br /> KindRaise campaign.
          </p>
        </div>

        <div className="donor-engagement-img-content" data-aos="fade-left">
          <div className="donor-engagement-main-image-container">
            <img src={ScanToDonate} alt="Fundraising" className="donor-engagement-main-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorEngagement;
