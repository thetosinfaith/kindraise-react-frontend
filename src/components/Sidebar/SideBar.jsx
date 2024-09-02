import React from 'react'
import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const SideBar = () => {
  const Nav = useNavigate()
  return (
    <div className='sideBarBody'>
      <div className='sideBarWrapper'>
        <div className='logo'>LoGo</div>
        <div className='navSide'>
          <ul>
            {/* <NavLink to={'/dashboard'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}>Dashboard</NavLink> */}
            {/* <NavLink to={'/dashboard/campaign'} className={({ isActive }) =>isActive ? "HeaderActive" : "HeaderNotActive"}>Dashboard</NavLink> */}
            <li onClick={()=>Nav('/dashboard')}>Dashboard</li>
            <li onClick={()=>Nav('/dashboard/campaign')}>Campaighn</li>
            <li>he</li>
            <li>he</li>
            <li>he</li>
            <li>he</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar