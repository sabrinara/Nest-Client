import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
const ManageServices = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nest-backend-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(
                    (service) => service.provider_email === user.email
                );
                setServices(filteredData);
                console.log(filteredData);

                console.log(data);
            });
    }, []);


    const handleUpdate = (serviceId) => {
        const form = document.getElementById("updateServiceForm");
        const formData = new FormData(form);

        fetch(`https://nest-backend-iota.vercel.app/services/${serviceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.get("name"),
                photo: formData.get("photo"),
                price: formData.get("price"),
                area: formData.get("area"),
                description: formData.get("description"),
            }),
        })
            .then(res => res.json())
            .then(updatedService => {
                // Update the services state with the updated service
                const updatedServices = services.map(service =>
                    service._id === serviceId ? updatedService : service
                );
                setServices(updatedServices);

                Swal.fire('Updated!', 'Service has been updated.', 'success');
            })
            .catch((error) => {
                console.error(error);

                Swal.fire('Error', 'Failed to update service.', 'error');
            });

        document.getElementById("my_modal_5").close();
    };


    const handleDelete = (serviceId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://nest-backend-iota.vercel.app/services/${serviceId}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = services.filter(service => service._id !== serviceId);
                            setServices(remaining);
                        }
                    })
                    .catch((error) => console.error(error));
            }
        })

    }

    return (
        <div>
            <Helmet>
                <title>NEST-Manage Services</title>
            </Helmet>
            <div>
                <h1 className="text-3xl md:text-5xl text-sky-600 font-bold my-16 text-center">Manage Services</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-sky-400 ">
                        <thead>
                            <tr className="bg-sky-100 text-cyan-900">
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Description</th>
                                <th className="py-2 px-4 border-b">Area</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b">Update</th>
                                <th className="py-2 px-4 border-b">View</th>
                                <th className="py-2 px-4 border-b">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <tr key={service._id} className="border-b text-xl">
                                    <td className="py-2 px-6 text-center font-semibold">{service.name}</td>
                                    <td className="py-2 px-4 overflow-x-hidden">{service.description}</td>
                                    <td className="py-2 px-4 text-center">{service.area}</td>
                                    <td className="py-2 px-4 text-center">{service.price} $</td>
                                    <td className="">
                                        <div>
                                            <button
                                                className="btn rounded bg-blue-600 text-white hover:bg-blue-500"
                                                onClick={() => document.getElementById("my_modal_5").showModal()}
                                            >
                                                Update
                                            </button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box px-6 md:px-10">

                                                    <div className="modal-action">
                                                        <button className="p-4 absolute top-0 right-0" onClick={() => document.getElementById("my_modal_5").close()}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                        <form id="updateServiceForm" method="dialog" onSubmit={(e) => {
                                                            e.preventDefault();
                                                            handleUpdate(service._id);
                                                        }}>
                                                            <div className="flex gap-2 ">
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Service Name</span>
                                                                    </label>
                                                                    <input type="text" name="name" className="input input-bordered" placeholder="Service Name" defaultValue={service.name} required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Service Image</span>
                                                                    </label>
                                                                    <input type="text" name="photo" className="input input-bordered" placeholder="Service Photo" defaultValue={service.image} required />
                                                                </div>
                                                            </div>

                                                            <div className="flex gap-2">
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Price</span>
                                                                    </label>
                                                                    <input type="text" name="price" className="input input-bordered " placeholder="Service Price" defaultValue={service.price} required />
                                                                </div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Area</span>
                                                                    </label>
                                                                    <input type="text" name="area" className="input input-bordered" placeholder="Service Area" defaultValue={service.area} required />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="form-control">
                                                                    <label className="label">
                                                                        <span className="label-text">Description</span>
                                                                    </label>
                                                                    <input type="text" name="description" className="input input-bordered" placeholder="Write Description" defaultValue={service.description} required />
                                                                </div>
                                                            </div>
                                                            <button className="btn rounded mt-4 w-full text-white bg-blue-500 hover:bg-blue-700">Update</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </div>
                                    </td>
                                    <td className="">
                                        <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white rounded" ><Link to={`/servicedetails/${service._id}`} >View</Link></button>
                                    </td>
                                    <td className="">
                                        <button className="btn bg-red-500 hover:bg-red-700 text-white rounded" onClick={() => handleDelete(service._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;
