import React from 'react';
import ScanToDonate from "../../assets/scan-to-donate.png";
import './DonorEngagement.css';

const DonorEngagement = () => {
  return (
    <section className="donor-engagement-description-section">
      <div className="donor-engagement-description-container">
        <div className="donor-engagement-description-content">
          <h1>Donor <span>Engagement</span></h1>
          <p>
          Increase donor interaction with <br /> custom QR codes for every <br />KindRaise campaign.          
          </p>
        </div>

        <div className="donor-engagement-img-content">
          <div className="donor-engagement-main-image-container">
            <img src={ScanToDonate} alt="Fundraising" className="donor-engagement-main-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorEngagement;
