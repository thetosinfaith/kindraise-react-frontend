import React from 'react'
import './details.css'

const PaymentDetails = ({setPay}) => {
  return (
    <div className='PaymentDetailsBody'>
      <div className='amountHeader'>
        <h3>Show your Support</h3>
        <div onClick={()=>setPay(false)}>X</div>
      </div>
      <div className='payDetailsWrapper'>
        <h4>Add a Publice Message</h4>
        <input type="text" placeholder='Name'/>
        <textarea name="" id="" placeholder='Message'/>
        <div>
          <button onClick={()=>setPay(false)}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails