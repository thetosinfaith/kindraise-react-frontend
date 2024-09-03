import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { BsQuestionCircle } from 'react-icons/bs'


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
          <div className='headerBox'><BsQuestionCircle size={15}/></div>
          <div className='headerBox'>
            <div className='greenCircle'></div>Jack samuel
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header