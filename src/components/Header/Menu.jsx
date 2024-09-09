import React from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import Kora from '../../assets/Kora.svg'

const Menu = ({setShow}) => {
  const Nav = useNavigate()
  return (
    <div className='menuBody' >
      <div className='closeSide' onClick={()=>setShow(false)}></div>
      <div className='opanSide'> 
        <div className='menuImgSide animate__animated animate__backInRight'>
          powered by
          <img src={Kora} alt="" />
        </div>
        <div className='menuWrapper animate__animated animate__backInRight'>
          <ul>
            <li onClick={()=>Nav('/dashboard')[setShow(false)]}>Dashboard</li>
            <li onClick={()=>Nav('/campaign')[setShow(false)]}>Raise</li>
            <li onClick={()=>Nav('/donor')[setShow(false)]}>Donor</li>
            <li onClick={()=>Nav('/payout')[setShow(false)]}>Payout</li>
            <li onClick={()=>Nav('/account')[setShow(false)]}>Account</li>
            <li onClick={()=>Nav('/signup')[setShow(false)]} className='logoutMenu'>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu