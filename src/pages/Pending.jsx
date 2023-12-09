import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Pending = () => {
    const { user } = useContext(AuthContext);
    const user_email = user?.email;
    const navigation = useNavigate();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://nest-backend-iota.vercel.app/bookings`)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((service) => service.provider_email === user_email);
                setServices(filteredData);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleStatusChange = async (serviceId, newStatus) => {
        try {
            const response = await axios.patch(
                `https://nest-backend-iota.vercel.app/bookings/${serviceId}`,
                { status: newStatus }
            );
            const updatedUsers = services.map((user) =>
                user._id === serviceId? { ...user, status: newStatus } : user
            );
            setServices(updatedUsers);
            navigation('/')
        } catch (error) {
            console.error(error);
        }
    };

  

    return (
        <div>
            <Helmet>
                <title>NEST-My Pending</title>
            </Helmet>
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

                            <select className="select select-bordered" name="type" onChange={(e) => handleStatusChange(service._id, e.target.value)} required>
                                <option value="Pending" disabled selected>Pending</option>
                                <option value="In Process">In Process</option>
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
