import React from 'react';  
import './progress.css'

const ProgressBar = () => {  
    const max = 2000;  
    const current = 1000;  
    const percentage = (current / max) * 100;  

    return (  
        <div className="progress-container">  
            <div  
                className="progress-bar"  
                style={{ width: `${percentage}%` }}  
            ></div>  
        </div>  
    );  
};  

export default ProgressBar;