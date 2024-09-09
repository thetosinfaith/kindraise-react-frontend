import React from 'react'
import './welcomesignup.css'
import { useNavigate } from 'react-router-dom'

const WelcomeSignup = ({setActiveSignupPage}) => {
  const Nav = useNavigate()
  return (
    <div className='welcomeSignupPage'>
      
      <div className='welcomesignupBox'>
        <h2>Welcome!</h2>
        <div>
          We are glad to have you, visit your dashboard to get started
        </div>
        <button className='welcomeBtnDashboard' onClick={()=>Nav('/dashboard')[setActiveSignupPage('A')]}>
          Go To Dashboard
        </button>
      </div>
    </div>
  )
}

export default WelcomeSignup