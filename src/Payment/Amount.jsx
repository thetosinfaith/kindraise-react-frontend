import React from 'react'
import './amount.css'
import { useNavigate } from 'react-router-dom'
import Tree from '../assets/Tree.svg'

const Amount = ({setActiveComponent,setPay}) => {
  const Nav = useNavigate()
  return (
    <div className='amountBody'>
      <div className='amountHeader'>
        <h3>Enter an amount</h3>
        <div onClick={()=>setPay(false)}>X</div>
      </div>
      <div className='amountWrapper'>
        <div className='amountAmount'>
          <div className='inputBox'>
            ₦ <input type="text" />
          </div>
          <button onClick={()=>setActiveComponent("B")}>continue</button>
        </div>
        <div className='amountDetailsBox'>
          <div>
            <img src={Tree} alt="" />
          </div>
          <h3>Roots of hope</h3>
          <p>Nuturing Our Future, One Tree at a Time</p>
        </div>
      </div>
        {/* <button onClick={()=>setActiveComponent("B")}>amount</button> */}
    </div>
  )
}

export default Amount