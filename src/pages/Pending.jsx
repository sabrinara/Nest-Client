import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Pending = () => {
    const { user } = useContext(AuthContext);
    const user_email = user?.email;
    
    const [services, setservices] = useState([]); 
    
    useEffect(() => {
        fetch(`https://nest-backend-iota.vercel.app/bookings`)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((service) => service.provider_email === user_email);
                setservices(filteredData);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleStatusChange = (serviceId, newStatus) => {
        fetch(`https://nest-backend-iota.vercel.app/bookings/${serviceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        })
        .then((res) => res.json())
        .then((updatedService) => {
          
            setservices((prevServices) => prevServices.map((s) => (s._id === updatedService._id ? updatedService : s)));
        })
        .catch((error) => console.error(error));
    };

    return (
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 md:mx-8 lg:mx-16 my-8">
          {services?.map((service) => (
            <div key={service._id} className="card lg:h-[20rem] lg:card-side bg-base-100 shadow-xl">
              <figure className="lg:w-[50%]">
                <img src={service.image} className="w-full h-96 md:h-64 lg:h-full lg:object-center" alt="Album" />
              </figure>
              <div className="card-body lg:w-[50%] md:mt-10 md:mb-10">
                <h2 className="card-title text-2xl">{service.name}</h2>
                <p className="text-xl">{service.type}</p>
                <p className="text-cyan-900 font-bold text-xl">Price: {service.price} $</p>
                <select
                  value={service.status} // Use the selectedStatus state as the value
                  onChange={(e) => handleStatusChange(service._id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Pending;
