import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate();
    
  return (
    <section>
        <div className='hero-contents'>
            <h1>Raise, Give, Impact More.</h1>
            <p>Nigeria's Premier Fundraising Hub. Fundraise smarter, impact <br />deeper, and transform lives with ease.</p>

            <button onClick={() => navigate('/signup')} className="hero-button">Get Started</button>

        </div>
        
    </section>
  )
}

export default Hero