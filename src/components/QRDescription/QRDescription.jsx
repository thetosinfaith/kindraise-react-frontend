import React from 'react';
import scanToDonate from '../../assets/scan-to-donate.png';
import QRCode from '../../assets/QR-code.png';
import Arrow from "../../assets/arrow.png";
import Download from '../../assets/download.png';
import Print from '../../assets/print.png';
import './QRDescription.css';

const QRDescription = () => {
  return (
    <section className="qr-description-section">
      <div className="qr-description-container">
        <div className="qr-description-img-content">
          <div className="main-image-container">
            <img src={scanToDonate} alt="Fundraising" className="qr-main-image" />
            <img src={Print} alt="Print" className="print-icon" />
            <img src={Arrow} alt="Arrow" className='qr-arrow-icon'/>
          </div>
          <div className="qr-code-container">
            <img src={QRCode} alt="Share Campaign" className="qr-overlay-image qr-image top-right" />
            <img src={Download} alt="Download" className="download-icon" />
          </div>
        </div>

        <div className="qr-description-content">
          <h1>Raise more with QR <br /> codes for donations</h1>
          <p>
            For every campaign you create, KindRaise <br /> automatically generates a free QR code that’s <br /> easy to access and share with your donors on <br /> printed materials, and anywhere online. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default QRDescription;
