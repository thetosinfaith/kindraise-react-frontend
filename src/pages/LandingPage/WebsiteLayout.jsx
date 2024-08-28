import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import './WebsiteLayout.css'

const LandingPage = () => {
  return (
    <section className='landingpage-container'>
      <Header/>
      <Outlet/>

    </section>
  )
}

export default LandingPage