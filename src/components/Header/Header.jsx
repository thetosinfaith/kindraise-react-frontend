import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const [show, setShow] = useState(false)

  const Nav = useNavigate()
  return (
    
    <div className='headerBody'>
      <div className="headerWrapper">
        <div className='hello'>Logo</div>
        <div className='hello' onClick={()=>setShow(!show)}>{show ? 'close' : 'menu'}</div>
        {
          show ? 
          <div className='dropDown'>
            <div onClick={()=>setShow(false)}> drop-down secction</div>
          </div>:
          null
        }
        <div className='headerSighUp'>
          <div className='headerBox' onClick={()=>Nav('/')}>hello</div>
          <div className='headerBox'>hello</div>
        </div>
      </div>
    </div>
  )
}

export default Header