import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Fundraising from "../../components/Fundraising/Fundraising"
import PopularCampaigns from '../../components/PopularCampaigns/PopularCampaigns'
import DonorEngagement from '../../components/DonorEngagement/DonorEngagement'
import DonorOutreach from '../../components/DonorOutreach/DonorOutreach'
import Solution from '../../components/Solution/Solution'
import SecurityAssured from '../../components/SecurityAssured/SecurityAssured'
import OurPartners from '../../components/OurPartners/OurPartners'
import StartFundraising from '../../components/StartFundraising/StartFundraising'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './HomepageLayout.css'

const HomepageLayout = () => {
  return (
    <section className='landingpage-container'>
      <Header/>
      <Hero/>
      <PopularCampaigns/>
      <Fundraising/>
      <DonorEngagement/>
      <DonorOutreach/>
      <Solution/>
      <SecurityAssured/>
      <StartFundraising/>
      <OurPartners/>
      <Footer/>
      <Outlet/>
    </section>
  )
}

export default HomepageLayout