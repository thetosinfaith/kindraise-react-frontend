import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Solution.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Solution = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

  return (
    <div className='solution-section'>
      <div className='solution-container' data-aos="fade-up">
        <div className='solution-content'>
            <h1>A Fundraising <span>Solution</span> For All</h1>
            <p>No cause is big or small. From heartfelt personal missions to grand community projects, <br /> we empower you to turn dreams into reality.</p>
        </div>
      </div>

      <div className='solution-raise' data-aos="fade-down">
        <h1>Raise Funds In 3 Easy Steps</h1>
      </div>

      <div className='solution-text-section-container'>
        <div className='solution-text-section' data-aos="fade-right">
          <div className='circle'>1</div>
          <h1 className='solution-text-container'>Start your fundraiser</h1>
          <p>Tell your story, set a target, <br /> add pictures and videos</p>
        </div>

        <div className='solution-text-section' data-aos="fade-up">
          <div className='circle'>2</div>
          <h1 className='solution-text-container'>Share with friends</h1>
          <p>Send emails, share on social media</p>
        </div>

        <div className='solution-text-section' data-aos="fade-left">
          <div className='circle'>3</div>
          <h1 className='solution-text-container'>Manage donations</h1>
          <p>Receive donations, thank donors, <br />money goes to your bank account</p>
        </div>
      </div>

      <div className="solution-mini-container">
        <button onClick={() => navigate('/signup')} className="solution-button" data-aos="zoom-in">Get Started</button>
      </div>
    </div>
  );
};

export default Solution;
