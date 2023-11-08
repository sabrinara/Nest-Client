import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const FeaturedServices = ({ services }) => {
    // console.log(services)
    const serviceId = 2

    return (
        <div>
            <hr className=" border-sky-400" />
            <h1 className="text-6xl font-bold text-center my-16">Featured Services</h1>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 px-16">

                {
                    services.slice(0, 4).map((service, index) => (
                        <div key={index}>
                            <ServiceCard service={service} />
                        </div>
                    ))
                }

            </div>
            <div className="flex justify-center mt-16">
                <Link to="/service">
                    <button className="btn bg-sky-600 hover:bg-sky-500 text-white rounded">Veiw All Services</button>
                </Link>
            </div>
            <div>
                <Link to={`/servicedetails/${serviceId}`}>
                    <button className="btn btn-primary">Service Details</button>
                </Link>

            </div>
        </div>

    );
};

export default FeaturedServices;