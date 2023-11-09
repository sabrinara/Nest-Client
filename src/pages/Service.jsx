import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../components/Service/ServiceCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nest-backend-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <Helmet>
                <title>NEST-All Services</title>
            </Helmet>
            <h1 className="text-6xl font-bold text-center my-16">All Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                {
                    services.map((service, index) => <div key={index}>
                        <ServiceCard service={service} />
                    </div>)
                }
            </div>
            <div className="flex justify-center mt-16">
                <Link to="/service">
                    <button className="btn bg-sky-600 hover:bg-sky-500 text-white rounded">Show More Services</button>
                </Link>
            </div>


        </div>
    );
};

export default Service;