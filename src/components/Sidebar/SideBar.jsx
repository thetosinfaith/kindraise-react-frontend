import React from 'react'
import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiBook, BiHome, BiWallet } from 'react-icons/bi'
import { BsMegaphone } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import Logo from '../../assets/logo.png'

const SideBar = () => {
  const Nav = useNavigate()
  return (
    <div className='sideBarBody'>
      <div className='sideBarWrapper'>
        <div className='logo'>
          <img src={Logo} alt="" />
          <div className='logoSmall'>logo</div>
        </div>
        <div className='navSide'>
          <ul className='nav'>
            <NavLink to={'/dashboard'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BiHome size={15}/><span>Home</span></NavLink>
            <NavLink to={'/campaign'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BsMegaphone size={15}/><span>Raise</span></NavLink>
            <NavLink to={'/track'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BiBook size={15}/><span>Track</span></NavLink>
            <NavLink to={'/payout'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><BiWallet size={15}/><span>Payout</span></NavLink>
            <NavLink to={'/account'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}><FiSettings size={15}/><span>Account</span></NavLink>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar