import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import ServiceCard from "./ServiceCard";

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const [filter, Setfilter] = useState([]);

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://nest-backend-iota.vercel.app/services/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setService(data);
            })
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        fetch(`https://nest-backend-iota.vercel.app/services`)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((xyz) => xyz.provider_email === service.provider_email);
                Setfilter(filteredData);
            })
            .catch((error) => console.error(error));
    })


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.photo.value;
        const email = form.email.value;
        const provider_email = form.provider_email.value;
        const price = form.price.value;
        const area = form.area.value;
        const date = form.date.value;
        const status = "pending";
        const newBook = { name, image, email, provider_email, price, date, area, status };
        console.log(newBook);

        fetch(`https://nest-backend-iota.vercel.app/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("SAVE TO BOOKING", data);
                navigate("/bookings");
            })

        document.getElementById("my_modal_5").close();
    };

    return (
        <div>
            <Helmet>
                <title>NEST-Details of the service</title>
            </Helmet>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6  shadow-xl my-16 mx-10 rounded ">
                <figure className="w-full md:w-1/2">
                    <img src={service.image} className="w-full h-[100vh] rounded" alt="Service" />
                </figure>
                <div className="w-full md:w-1/2 px-10">
                    <h2 className=" text-3xl text-red-700 font-bold ">{service.name}</h2>
                    <p className=""> {service.description}</p>
                    <div className="flex justify-start items-center font-bold text-2xl md:py-4 gap-4">
                        <img
                            alt=""
                            src={service.provider_image}
                            className="relative inline-block h-[50px] w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                        />
                        <h5 className="">{service.provider_name}</h5>
                    </div>
                    <div className="flex justify-start items-center font-bold text-2xl py-1  md:py-4">
                        <HiOutlineLocationMarker className="text-sky-700" />
                        <h1><span className="text-sky-700">Location:</span>  {service.area} </h1>
                    </div>
                    <div className="flex justify-start items-center font-bold text-2xl py-1 md:py-4">
                        <AiOutlineDollar className="text-sky-700" />
                        <h1><span className="text-sky-700">Cost:</span>  {service.price}</h1>
                    </div>
                    <div className=" justify-end">
                        <div>
                            <button
                                className="btn rounded mb-6 bg-blue-600 text-white hover:bg-blue-500"
                                onClick={() => document.getElementById("my_modal_5").showModal()}
                            >
                                Book
                            </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">

                                    <div className="modal-action mx-4">
                                        <button className="p-6 absolute top-0 right-0" onClick={() => document.getElementById("my_modal_5").close()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                        <form method="dialog" onSubmit={handleBooking}>
                                            {/* <div className="flex gap-2 ">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Name</span>
                                                    </label>
                                                    <input type="text" name="name" defaultValue={service.name} className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Image</span>
                                                    </label>
                                                    <input type="text" name="photo" defaultValue={service.image} className="input input-bordered" />
                                                </div>
                                            </div> */}
                                            <div className="flex gap-2">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Provider Email</span>
                                                    </label>
                                                    <input type="email" name="provider_email" value={service.provider_email} className="input input-bordered" />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Your Email</span>
                                                    </label>
                                                    <input type="email" name="email" value={user?.email} className="input input-bordered" />
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {/* <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="text" name="price" defaultValue={service.price} className="input input-bordered" />
                                                </div> */}
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Service Taking Date</span>
                                                    </label>
                                                    <input type="date" name="date" className="input input-bordered" placeholder="Date" required />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Your Location</span>
                                                    </label>
                                                    <input type="text" name="area" className="input input-bordered" placeholder="Your Location" required />
                                                </div>
                                            </div>
                                            {/* <input type="submit" value="Book" className="btn btn-primary" /> */}

                                            <button className="btn rounded mt-4 w-full  text-white bg-blue-400 hover:bg-blue-600">Book</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-center my-16 text-sky-600">Other Services provided by {service.provider_name}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-4">
                    {filter.map((service, index) => (
                        <div key={index}>
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
