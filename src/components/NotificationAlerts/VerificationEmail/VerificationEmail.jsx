// import React from 'react'

// const VerificationEmail = () => {
//   return (
//     <div>VerificationEmail</div>
//   )
// }

// export default VerificationEmail




import React, { useEffect, useState } from 'react';

const UserStateLocation = () => {
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        fetchStateName(latitude, longitude);
                    },
                    (err) => {
                        setError(err.message);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
            }
        };

        const fetchStateName = async (latitude, longitude) => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                const data = await response.json();
                const address = data.address;

                if (address && address.state) {
                    setState(address.state);
                } else {
                    setError("State information not found.");
                }
            } catch (error) {
                setError("Error fetching state name.");
            }
        };

        getLocation();
    }, []);

    return (
        <div className="p-4 border rounded shadow-md">
            <h1 className="text-xl font-bold">User State Location</h1>
            {error && <p className="text-red-500">Error: {error}</p>}
            {state ? (
                <p>
                    <strong>Your current state:</strong> {state}
                </p>
            ) : (
                <p>Fetching state...</p>
            )}
        </div>
    );
};

export default UserStateLocation;
