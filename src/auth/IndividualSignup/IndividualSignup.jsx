import React, { useState } from 'react'
import './individualSignup.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const IndividualSignup = ({setActiveSignupPage}) => {
  const [show, setShow]= useState(false)
  return (
    <div className='indSignupBody'>
      <div className='signupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}>Sign in</span>
      </div>
      <div className='indSignupInputBox'>
        <h1 className='indSignupQusBox'>Tell us about your self</h1>
        <div className='indInputHoldBox'>
          First Name
          <input type="text" />
        </div>
        <div className='indInputHoldBox'>
          Last Name
          <input type="text" />
        </div>
        <div className='indInputHoldBox'>
          Email Address
          <input type="text" />
        </div>
        <div className='indInputHoldBox'>
          NIN
          <input type="text" />
        </div>
        <div className='indInputHoldBox'>
          Password
          <div className='signupInputClone'>
            <input type={show ? 'text': 'password'} /> 
            {
              show ? 
              <BsEyeSlash cursor="pointer" onClick={()=>setShow(false)}/>:
              <BsEye cursor="pointer" onClick={()=>setShow(true)}/>
            }
          </div>
        </div>
        <div className='signupPassHintBox'>
          Your Password must have:
          <span>At least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number</span>
        </div>
        <div className='TermsBox'>
          <input type="checkbox" name="" id="" /> I have read and agree to the Terms and Use and Private Policy
        </div>
        <button className='signupIndCreateBtn' onClick={()=>setActiveSignupPage("D")}>
          Create Account
        </button>
        
      </div>
      <div className='mediaSignupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}>Sign in</span>
      </div>
    </div>
  )
}

export default IndividualSignup