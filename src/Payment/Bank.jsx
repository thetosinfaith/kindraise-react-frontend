import React from 'react'
import './bank.css'
import Kora from '../assets/Kora.svg'

const Bank = ({setActiveComponent,setPay={setPay}}) => {
  return (
    <div className="bankBody">
      <div className='amountHeader'>
        <h3>Select Payment</h3>
        <div onClick={()=>setPay(false)}>X</div>
      </div>
      <div className='bankWrapper'>
        <div className='selectPaymentBox'>
          <div>
            <input type="radio" name="" id="" />Pay with Card or Bank
          </div>
          <div>
            <img src={Kora} alt="" />
          </div>
        </div>
        <div className='continueBox'>
          <button disabled={false} onClick={()=>setActiveComponent("C")}>continue</button>
        </div>
      </div>
      {/* <button className="bankWrapper" onClick={()=>setActiveComponent('C')}>hello</button> */}
    </div>
  )
}

export default Bank