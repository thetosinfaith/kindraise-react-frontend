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
          <div>Forgot password</div>
          <div onClick={()=>Nav('/sighup')}>Sigh up</div>
        </div>
        <button className='loginBtn' onClick={()=>Nav('/dashboard')}>burron</button>
      </div>
    </div>
  )
}

export default Login