import React from 'react'
import Logo from '../../assets/Logo.svg'
import './Signup.css'

const Signup = () => {
  return (
    <section>
      <div className='signup-container'>
        <div className='signup-inner'>
          <div className='signup-content'>
            <div className='signup-image'>
            <img src={Logo}/>
            </div>
          <h1>Empower Your Cause</h1>
          <p>Amplify your mission with our easy-to-use tools.</p>
          </div>
        </div>
        <div className='signup-inputs'>
        <input type="text" placeholder='Fullname'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
          <input type="text" placeholder='Email'/>
        </div>
      </div>
    </section>
  )
}

export default Signup;