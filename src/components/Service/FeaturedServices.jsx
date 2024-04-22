import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const FeaturedServices = ({ services }) => {
    // console.log(services)
    

    return (
        <div>
            {/* <hr className=" border-sky-400" />s */}
            <h1 className="text-3xl md:text-5xl font-bold text-center my-16 text-cyan-600">Popular Services</h1>
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
           
        </div>

    );
};

export default FeaturedServices;