import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("Deleted")
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }

            })
    }

    return (
        <div>
            <h2>Manage services</h2>
            {
                services.map(service => <div
                    key={service._id}
                >
                    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
                        <h3>{service.name}</h3>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;