import React from 'react'

const UploadError = () => {
  return (
    <div>UploadError</div>
  )
}

export default UploadError


// import React, { useState } from 'react';  
// import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';  

// const nigeriaMapUrl = 'https://raw.githubusercontent.com/datasets/geo-boundaries/master/data/countries/NGA.geojson';  or
// const nigeriaMapUrl = 'https://raw.githubusercontent.com/Abuja-GeoJSON/nigeria-states-geojson/master/nigeria-states.geojson';

// const NigeriaMap = () => {  
//     const [userStates, setUserStates] = useState(['Lagos State', 'Oyo State']); // Example states with users  

//     const isUserInState = (stateName) => userStates.includes(stateName);  

//     return (  
//         <div>  
//             <h1>Donations by States</h1>  
//             <ComposableMap projection="geoMercator">  
//                 <Geographies geography={nigeriaMapUrl}>  
//                     {({ geographies }) =>  
//                         geographies.map((geo) => {  
//                             const stateName = geo.properties.name; // Adjust based on your GeoJSON structure  
//                             return (  
//                                 <Geography  
//                                     key={geo.rsmKey}  
//                                     geography={geo}  
//                                     fill={isUserInState(stateName) ? '#1E90FF' : '#D3D3D3'} // Blue if user found, gray otherwise  
//                                     stroke="#FFFFFF"  
//                                 />  
//                             );  
//                         })  
//                     }  
//                 </Geographies>  
//             </ComposableMap>  
//             <div>  
//                 {userStates.map((state, index) => (  
//                     <div key={index}>  
//                         <strong>{state}</strong>: 4 donors, N110,000  
//                     </div>  
//                 ))}  
//             </div>  
//         </div>  
//     );  
// };  

// export default NigeriaMap;