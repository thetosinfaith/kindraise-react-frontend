import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Period from '../../assets/period.png';
import WaterSupply from '../../assets/water-supply.png';
import BackToSchool from '../../assets/back-to-school.png';
import './PopularCampaigns.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const campaigns = [
    {
        id: 1,
        image: BackToSchool,
        title: 'Sponsor 5 Children in Nigeria Get Back to School',
        description: 'Hi, I’m Noor, and I started SchoolFund to provide education to children who...',
        donors: 71,
        raised: 100450,
        funded: 65
    },
    {
        id: 2,
        image: WaterSupply,
        title: 'Bring Clean Water to Rural Communities in Lagos',
        description: 'Greetings! I’m Lola Badmus, working with WaterNow to provide clean water in...',
        donors: 44,
        raised: 75400,
        funded: 80
    },
    {
        id: 3,
        image: Period,
        title: 'Menstrual Hygiene Support for Orphanages & Girls',
        description: 'PeriodPals is about sponsoring menstrual kits for schoolgirls to keep them comfortable...',
        donors: 120,
        raised: 200000,
        funded: 90
    }
];

const PopularCampaigns = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        AOS.init({
          duration: 3000,
          once: false,    
          mirror: true,
        });
    }, []);

    return (
        <div className='PopularCampaigns-section'>
            <div className='PopularCampaigns-container'>
                <div className='PopularCampaigns-content' data-aos="fade-up">
                    <h1>Popular Campaigns</h1>
                    <p>Driven by what matters to you</p>
                </div>
            </div>
            <div className='campaigns-container'>
                {campaigns.map((campaign) => (
                    <div className='campaign-img-content' key={campaign.id} data-aos="fade-up">
                        <img src={campaign.image} alt={campaign.title} />        
                        <div className='text-content'>
                            <p className='text-one'>{campaign.title}</p>
                            <p className='text-two'>{campaign.description}</p>
                            <p>{campaign.donors} Donors</p>
                            <progress value={campaign.funded} max="100"></progress>
                            <div className='text-fee'>
                                <p className='left'>₦{campaign.raised.toLocaleString()} Raised</p>
                                <p className='right'>{campaign.funded}% Funded</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-container" data-aos="zoom-in">
                <button onClick={() => navigate('/signup')} className="campaign-button">Explore campaigns</button>
            </div>
        </div>
    );
};

export default PopularCampaigns;
