import React from 'react'
import './passwordchange.css'
import { BiCheckShield } from 'react-icons/bi'
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const PasswordChange = () => {
  const Nav = useNavigate()
  return (
    <div className="loginBody">
      <div className="logoSec">
        <img src={logo} alt="" />
      </div>
      <div className="formSec">
        <div className="formBox">
          <div className="formWrapper">
            <div className='checkIcon'><BiCheckShield color='white' size={30}/></div>
            <div className="loginText">
              <h2>Password Reset</h2>
            </div>
            
            <div className="PassChange">
              Your password has been successfully updated. Click below to sign in.
            </div>
            <button className="loginBtn"onClick={()=>Nav('/createpassword')}>Go to Sign in</button>
          </div>
        </div>
        <div>©2024 KindRaise, Inc. All rights reserved</div>
      </div>
    </div>
  )
}

export default PasswordChange