
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {

    //     const [service, setService] = useState({});
    //     const { user } = useContext(AuthContext);
    //     const email = user.email;
    //     console.log(user);
    //     const { id } = useParams();
    //     // console.log(id);
    //  const navigate = useNavigate();
    //     useEffect(() => {
    //         fetch(`https://tech-elec-shop-backend.vercel.app/products/${id}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 // console.log(data);
    //                const filteredData = data.filter((product) => product._id === id);
    //                setService(filteredData[0]);
    //             })
    //             .catch((error) => console.error(error));
    //     }, [id])

    //     // console.log(product)
    //     const { photo, name, description, price,rating } = product || {};

    // const cartProduct = {
    //     photo,
    //     name,
    //     description,
    //     price,
    //     rating,
    //     email
    // }

    // const handleAddToCart = () => {

    //     fetch('https://tech-elec-shop-backend.vercel.app/carts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(cartProduct)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data); 
    //         if(data.insertedId){
    //             Swal.fire({
    //                 title:'Success',
    //                 text: 'Product Added into My Cart Sucessfully!',
    //                 icon: 'success',
    //                 confirmButtonText: 'Cool!',
    //               })
    //               navigate('/mycart');
    //         }
    //     })
    //     console.log("here cart",cartProduct);
    // }

    return (
        <div>
            <Helmet>
                <title>NEST-Details of the service</title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl my-16 mx-10 lg:mx-32 h-[60vh]">
                <figure className="w-[50%]">
                    <img src="https://i.ibb.co/0MTsq6b/packing.png" alt="Movie" />
                </figure>
                <div className="card-body w-[50%]">
                    <h2 className="card-title">Name:</h2>
                    <p>Description:</p>
                    <img
                        alt=""
                        src="https://i.ibb.co/0MTsq6b/packing.png"
                        className="relative inline-block h-[70px] w-[70px] lg:h-[50px] lg:w-[50px] rounded-full border-2 border-cyan-600 object-cover object-center"
                    />
                    <h5 className="mb-4 font-sans text-lg font-semibold ">
                        Provider Name:
                    </h5>
                    <div className="card-actions justify-end">
                        <button className="btn bg-sky-500 text-white ">Book</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;