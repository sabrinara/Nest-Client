import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const FeaturedServices = ({ services }) => {
    // console.log(services)
const serviceId = 2

    return (
        <div>
            <h1>Featured Services</h1>
            {
                services.slice(0, 5).map((service, index) => (
                    <div key={index}>
                        <ServiceCard service={service} />
                    </div>
                ))
            }
            <div>
                <Link to="/service">
                    <button className="btn btn-primary">Veiw All Services</button>
                </Link>
            </div>
            <div>
                <Link to= {`/servicedetails/${serviceId}`}>
                    <button className="btn btn-primary">Veiw All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedServices;