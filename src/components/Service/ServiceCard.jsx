import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, image, name, description,price, provider_image,provider_name} = service || {}
    return (
        <div>
            <div className="card  lg:h-[56vh] lg:card-side bg-base-100 shadow-xl md:my-6">
                <figure className="w-full h-[50vh] md:h-[56vh] md:w-[50%]">
                    <img className="w-full h-[50vh] md:h-[56vh] md:max-w-none"  src= {image} /></figure>
                <div className="card-body md:w-1/2">
                    <h1 className="card-title text-2xl font- text-red-600">{name}.</h1>
                    <p className="text-sm overflow-hidden">{description}</p>
                    <p className="text-lg font-semibold"><span className="text-lg font-extrabold text-red-600">Cost:</span>  {price}$</p>
                    <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start lg:gap-6">
                            <img
                                alt=""
                                src={provider_image}
                                className="relative inline-block h-[70px] w-[70px] lg:h-[50px] lg:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                            />
                             <h5 className="mb-2 font-sans text-lg font-semibold ">
                                {provider_name}
                            </h5>
                        </div>
                    <div className="card-actions justify-center lg:justify-start">
                       <Link to={`/servicedetails/${_id}`}> <button className="lg:mt-2 px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 text-white  hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;