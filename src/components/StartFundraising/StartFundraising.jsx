import React, { useEffect } from 'react';
import './StartFundraising.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useNavigate } from 'react-router-dom';

const StartFundraising = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="start-fundraising-container" data-aos="fade-up">
      <div className="start-fundraising-text" data-aos="fade-up">
        <p>Start Fundraising Today.</p>
      </div>
      <div className="start-fundraising-button" data-aos="fade-up">
        <button onClick={() => navigate('/signup')} className="start-button">Sign Up For Free</button>
      </div>
    </div>
  );
};

export default StartFundraising;
