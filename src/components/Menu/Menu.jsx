import React from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom'

const Menu = ({setShow}) => {
  const Nav = useNavigate()
  return (
    <div className='menuBody'>
      
      <div className='menuWrapper'>
        <ul>
          <li onClick={()=>Nav('/dashboard')[setShow(false)]}>Dashboard</li>
          <li onClick={()=>Nav('/campaign')[setShow(false)]}>Raise</li>
          <li onClick={()=>Nav('/track')[setShow(false)]}>Track</li>
          <li onClick={()=>Nav('/payout')[setShow(false)]}>Payout</li>
          <li onClick={()=>Nav('/account')[setShow(false)]}>Account</li>
          <li onClick={()=>Nav('/signup')[setShow(false)]} className='logoutMenu'>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Menu