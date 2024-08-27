import React from 'react'
import './sighup.css'
import { useNavigate } from 'react-router-dom'

const Sighup = () => {
  const Nav= useNavigate()
  return (
    <div className='sighupBody'>
      <div className="sighupBox">helk</div>
      <div className="sighupWrapper">
        <div className='sighupInputArea'>
          <input type="text" placeholder='Fullname'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
          <input type="text" placeholder='Email'/>
          <div onClick={()=>Nav('/login')} style={{cursor: 'pointer'}}>login</div>
          <button className='sighupBtn' onClick={()=>Nav('/login')}>click</button>
        </div>
      </div>
    </div>
  )
}

export default Sighup