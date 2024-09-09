import React, { useState } from 'react'
import './modal.css'
import Amount from '../Amount/Amount';
import Bank from '../Bank/Bank';
import PaymentDetails from '../PaymentDetails/PaymentDetails';

const Modal = ({setPay}) => {

  const [activeComponent, setActiveComponent] = useState('A');

  const renderComponent = () => {  
    switch (activeComponent) {  
        case 'A':  
            return <Amount setActiveComponent={setActiveComponent} setPay={setPay}/>;  
        case 'B':  
            return <Bank setActiveComponent={setActiveComponent} setPay={setPay}/>;  
        case 'C':  
            return <PaymentDetails setPay={setPay}/>;  
        default:  
            return <Amount setActiveComponent={setActiveComponent} setPay={setPay}/>;  
    }  
}; 
  return (
    <div className='modalBody'>
      {renderComponent()}
    </div>
  )
}

export default Modal