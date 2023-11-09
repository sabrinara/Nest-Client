import React, { useState, useEffect } from "react";
import ServiceCard from "../components/Service/ServiceCard";
import { Helmet } from "react-helmet-async";

const Service = () => {
    const [services, setServices] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://nest-backend-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const displayedServices = showAll ? services : services.slice(0, 6);
    const filteredServices = displayedServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>NEST-All Services</title>
            </Helmet>
            <div className="mb-8 ">
                <input
                    type="text"
                    placeholder="Search by service name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2  border border-gray-300 rounded"
                />
            </div>
            <h1 className="text-6xl font-bold text-center my-16">All Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                {filteredServices.map((service, index) => (
                    <div key={index}>
                        <ServiceCard service={service} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-16">
                {!showAll && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn bg-sky-600 hover:bg-sky-500 text-white rounded"
                    >
                        Show More Services
                    </button>
                )}
            </div>
        </div>
    );
};

export default Service;
