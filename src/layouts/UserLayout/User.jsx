import React from 'react'
import './user.css'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/Sidebar/SideBar'
import Header from '../../components/Header/Header'

const User = () => {
  return (
    <div className='userLayoutBody'>
      <div className='sidebar'><SideBar/></div>
      <div className='otherSide'>
        <div className='userLayoutHeader'><Header/></div>
        <div><Outlet/></div>
      </div>
    </div>
  )
}

export default User