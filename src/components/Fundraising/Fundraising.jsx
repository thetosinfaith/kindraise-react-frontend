import React, { useEffect } from 'react';
import Roots from "../../assets/roots.png";
import './Fundraising.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Fundraising = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,    
      mirror: true,
    });
  }, []);

  return (
    <div className='FundraisingPages-section'>
      <div className='FundraisingPages-container'>
        <div className='FundraisingPages-content' data-aos="fade-up">
            <h1>KindRaise Gives You More</h1>
            <p>
              Supercharge your fundraising efforts with our unique tools and personal support. <br />
              Helping you raise more money effortlessly
            </p>
        </div>
      </div>

      <section className="fundraising-description-section">
        <div className="fundraising-description-container">
          <div className="fundraising-img-content" data-aos="fade-right">
            <div className="fundraising-main-image-container">
              <img src={Roots} alt="Fundraising" className="fundraising-main-image" />
            </div>
          </div>

          <div className="fundraising-description-content" data-aos="fade-left">
            <h1>Fundraising <span>pages</span></h1>
            <p>
              Raise more for your mission with <br /> interactive fundraising pages
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fundraising;
