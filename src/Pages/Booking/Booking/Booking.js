import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>Details of {service.name}</h2>
            <img src={service.img} alt="" />
            <p>booking ID: {serviceId}</p>
            <p>Cost: {service.price}</p>
        </div>
    );
};

export default Booking;