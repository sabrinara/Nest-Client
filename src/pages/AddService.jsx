import Logo from "../assets/images/logo.png";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddService = () => {

    const navigate = useNavigate();
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const image = form.photo.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const newService = { name, image, price, description, brand_name };
        console.log(newService);

        form.reset();
     
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Service Added Sucessfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool!',
                    })
                    navigate('/');
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>NEST-Add Services</title>
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

                        <form className="card-body" onSubmit={handleAddService} >
                           
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

export default AddService;