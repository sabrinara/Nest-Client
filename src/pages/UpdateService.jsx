import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateService = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => console.error(error));
    }, [id]);
    console.log(product)
    const { photo, name, brand_name, description, price, type, rating : prevrating } = product || {};



    const handleUpdateService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const photo = form.photo.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const type = form.type.value;
        const updatedProduct = { name, photo, price, description, type, rating, brand_name };
        console.log(updatedProduct);

        fetch(`http://localhost:5000/services/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated Product Sucessfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                      })  
                      navigate(-1);
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>NEST-Update Services</title>
            </Helmet>
            <div className="hero  min-h-screen bg-base-200 mb-6" >
                <div className="hero-content flex-col ">
                    <div className="text-center mt-8 mb-4">
                        <h1 className=" text-cyan-800 text-5xl  font-bold">Add Service</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[100rem] max-w-xl shadow-2xl">
                    <a href="#" className="flex items-center justify-center mt-8">
                            <img className="w-10 h-10 " src={Logo} alt="logo" />
                            <h1 className="text-2xl "> <span className="text-4xl font-sans font-bold text-red-500">N</span>EST</h1>
                        </a>

                        <form className="card-body" onSubmit={handleUpdateService} >
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <input type="text" name="image" placeholder="PhotoUrl" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="name" placeholder="Provider name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Provider Name</span>
                                </label>
                                <input type="name" placeholder="Service name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Provider Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Provider email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Provider Avater</span>
                                </label>
                                <input type="text" name="image" placeholder="Avatar" className="input input-bordered" required />
                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service price</span>
                                </label>
                                <input type="text" name='price' placeholder="Service price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <input type="text" name='price' placeholder="Service Area" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name='description' placeholder="Write Short Description" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                            <button className="btn text-white font-semibold rounded bg-blue-500 hover:bg-blue-600 mt-4">Add Service</button>
                            </div>

                        </form>
                        
                    </div>
               
                </div>
            </div>
           
            


        </div>
    );
};

export default UpdateService;