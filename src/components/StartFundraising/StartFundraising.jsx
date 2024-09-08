import React from 'react';
import './StartFundraising.css'; 

const StartFundraising = () => {
  return (
    <div className="start-fundraising-container">
      <div className="start-fundraising-text">
        <p>Start Fundraising Today.</p>
      </div>
      <div className="start-fundraising-button">
        <button onClick={() => navigate('/signup')} className="start-button">Sign Up For Free</button>
        </div>
    </div>
  );
};

export default StartFundraising;
