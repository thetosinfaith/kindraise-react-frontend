import React from 'react';
import Outreach from "../../assets/donor-outreach.png";
import './DonorOutreach.css';

const DonorOutreach = () => {
  return (
    <section className="donor-outreach-description-section">
      <div className="donor-outreach-description-container">
        <div className="donor-outreach-img-content">
          <div className="donor-outreach-main-image-container">
            <img src={Outreach} alt="Fundraising" className="donor-outreach-main-image" />
          </div>
        </div>

        <div className="donor-outreach-description-content">
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
