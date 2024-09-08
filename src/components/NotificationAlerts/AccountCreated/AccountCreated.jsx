// import React from 'react'

// const AccountCreated = () => {
//   return (
//     <div>AccountCreated</div>
//   )
// }

// export default AccountCreated


import React, { useState } from 'react';  
import ComponentA from './ComponentA';  
import ComponentB from './ComponentB';  
import ComponentC from './ComponentC';  

const App = () => {  
    const [activeComponent, setActiveComponent] = useState('A');  

    const renderComponent = () => {  
        switch (activeComponent) {  
            case 'A':  
                return <ComponentA />;  
            case 'B':  
                return <ComponentB />;  
            case 'C':  
                return <ComponentC />;  
            default:  
                return <ComponentA />;  
        }  
    };  

    return (  
        <div>  
            <nav>  
                <button onClick={() => setActiveComponent('A')}>Show Component A</button>  
                <button onClick={() => setActiveComponent('B')}>Show Component B</button>  
                <button onClick={() => setActiveComponent('C')}>Show Component C</button>  
            </nav>  
            <div>  
                {renderComponent()}  
            </div>  
        </div>  
    );  
};  

export default App;