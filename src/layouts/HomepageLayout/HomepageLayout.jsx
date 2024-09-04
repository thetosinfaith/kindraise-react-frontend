import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import FundraisingOptions from '../../components/FundraisingOptions/FundraisingOptions'
import { Outlet } from 'react-router-dom'
import './HomepageLayout.css'

const HomepageLayout = () => {
  return (
    <section className='landingpage-container'>
      <Header/>
      <Hero/>
      <Outlet/>
      <FundraisingOptions/>
    </section>
  )
}

export default HomepageLayout