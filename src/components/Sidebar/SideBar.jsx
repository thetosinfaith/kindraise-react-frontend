import React from 'react'
import './sidebar.css'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const Nav = useNavigate()
  return (
    <div className='sideBarBody'>
      <div className='sideBarWrapper'>
        <div className='logo'>LoGo</div>
        <div className='navSide'>
          <ul>
            <li onClick={()=>Nav('/dashboard')}>Dashboard</li>
            <li onClick={()=>Nav('/dashboard/customize')}>Campaighn</li>
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