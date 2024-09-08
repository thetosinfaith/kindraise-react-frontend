// import React from 'react'

// const InvalidAmount = () => {
//   return (
//     <div>InvalidAmount</div>
//   )
// }

// export default InvalidAmount

import React, { useState } from 'react';  
// import ''
// import './CampaignDropdown.css'; // Import CSS for styling  

const CampaignDropdown = () => {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleDropdown = () => {  
        setIsOpen(!isOpen);  
    };  

    // const handleSort = (order) => {  
    //     // onSort(order); // Call the sort function passed as a prop  
    //     setIsOpen(false); // Close dropdown after selection  
    // };  

    return (  
        <div className="dropdown">  
            <button className="dropbtn" onClick={toggleDropdown}>  
                Campaign  
            </button>  
            {isOpen && (  
                <div className="dropdown-content">  
                    <button >Ascending</button>  
                    <button >Descending</button>  
                </div>  
            )}  
        </div>  
    );  
};  

export default CampaignDropdown;