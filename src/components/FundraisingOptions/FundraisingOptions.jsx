import React from 'react';
import FundraisingImage from '../../assets/fundraising-image.png';
import MoneyRaised from '../../assets/money-raised.png'
import ShareCampaign from '../../assets/share-campaign.png'
import './FundraisingOptions.css';

const FundraisingOptions = () => {
  return (
    <section className="fundraising-section">
      <div className="fundraising-container">
        <div className="fundraising-content">
          <h1>Fundraising <br />Pages</h1>
          <p>
            Raise more for your mission <br /> with interactive fundraising <br /> pages that
            excite donors and <br />make it easy to donate and <br />share your cause with
            others.
          </p>
        </div>
        <div className="fundraising-img-content">
        <img src={MoneyRaised} alt="Money Raised" className="overlay-image top-left" />
        <img src={FundraisingImage} alt="Fundraising" className="main-image" />
        <img src={ShareCampaign} alt="Share Campaign" className="overlay-image top-right" />
        </div>
      </div>
    </section>
  );
};

export default FundraisingOptions;
