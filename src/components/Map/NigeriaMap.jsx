import React, { useState, useEffect } from 'react';  
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';  

const NigeriaMap = () => {  
    const [geoData, setGeoData] = useState(null);  
    const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-geo/master/test/data/world.geojson";  

    useEffect(() => {  
        const fetchGeoData = async () => {  
            try {  
                const response = await fetch(geoUrl);  
                if (!response.ok) {  
                    throw new Error("Network response was not ok");  
                }  
                const data = await response.json();  
                setGeoData(data);  
            } catch (error) {  
                console.error("There was a problem fetching the GeoJSON data:", error);  
            }  
        };  

        fetchGeoData();  
    }, [geoUrl]);  

    if (!geoData) return <div>Loading...</div>;  

    return (  
        <ComposableMap>  
            <Geographies geography={geoData}>  
                {({ geographies }) =>  
                    geographies.map((geo) => (  
                        <Geography  
                            key={geo.rsmKey}  
                            geography={geo}  
                            fill="#D3D3D3"  
                            stroke="#FFFFFF"  
                        />  
                    ))  
                }  
            </Geographies>  
        </ComposableMap>  
    );  
};  

export default NigeriaMap;