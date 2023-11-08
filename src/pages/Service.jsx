import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../components/Service/ServiceCard";


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect (()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h1>This is service</h1>
            {
                services.map((service, index) => <div key={index}>
                    <ServiceCard service={service} />
                </div>)
            }
        </div>
    );
};

export default Service;