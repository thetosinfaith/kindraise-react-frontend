import React from 'react';
import SecurityAssuredImg from '../../assets/security.png';
import './SecurityAssured.css';

const SecurityAssured = () => {
  return (
    <div className="security-container">
      <div className="security-text">
        <p>Your security is our priority. We go above and<br />beyond to stay compliant with regulatory standards.</p>
      </div>
      <div className="security-image">
        <img src={SecurityAssuredImg} alt="Security Assured" />
      </div>
    </div>
  );
};

export default SecurityAssured;
