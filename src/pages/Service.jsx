import { useState, useEffect } from "react";
import ServiceCard from "../components/Service/ServiceCard";
import { Helmet } from "react-helmet-async";
import { BiSearchAlt } from "react-icons/bi";

const Service = () => {
    const [services, setServices] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedService, setSelectedService] = useState('');

    useEffect(() => {
        fetch('https://nest-backend-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const displayedServices = showAll ? services : services.slice(0, 6);
    const filteredServices = displayedServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const uniqueServiceNames = Array.from(new Set(services.map(service => service.name)));

    const handleSelectChange = (e) => {
        setSearchTerm(e.target.value);
        setSelectedService(e.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>NEST-All Services</title>
            </Helmet>

            <h1 className="text-5xl font-bold text-center text-sky-600 mt-20">All Services</h1>

            <div className="flex justify-center my-10 ">
                <div className="relative">
                    <select
                        value={selectedService}
                        onChange={handleSelectChange}
                        className="py-3 pl-8 bg-sky-100 text-center border border-sky-300 rounded"
                    >
                        <option value="" disabled className="">Select a Service from below</option>
                        {uniqueServiceNames.map(serviceName => (
                            <option key={serviceName} value={serviceName}>{serviceName}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center px-2 ">
                        <BiSearchAlt className="text-sky-600 " />
                    </div>
                </div>
            </div>

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
