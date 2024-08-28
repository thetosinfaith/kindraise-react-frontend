import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Nav = useNavigate()
  return (
    <div className='loginBody'>
      <div className='loginBox'>
        <div>Logo</div>
        <input type="text" className='loginInput' placeholder='Email'/>
        <input type="text" className='loginInput' placeholder='Password'/>
        <div className='inputText'>
          <div onClick={()=>Nav('/forgotpassword')}>Forgot password</div>
          <div onClick={()=>Nav('/signup')}>Sigh up</div>
        </div>
        <button className='loginBtn' onClick={()=>Nav('/dashboard')}>burron</button>
      </div>
    </div>
  )
}

export default Login