import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    // Step 1: Define state variables for form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // Step 2: Define event handlers for form fields
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Step 3: Handle form submission (you can add your logic here)
        console.log("Form submitted:", { name, email, message });

        // Step 4: Optionally, you can reset the form fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    return (
        <div >
            <Helmet>
                <title>NEST- Contact</title>
            </Helmet>
            <div className="flex  items-center justify-center">
                <h1 className="text-7xl font-bold my-10 ">Contact Us</h1>
                </div>
                <div className="max-w-xl mx-auto">
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">Name:</label>
                            <input type="text" id="name" className="input input-bordered" value={name} onChange={handleNameChange} required />
                        </div>

                        <div className="form-control">
                            <label className="label">Email:</label>
                            <input type="email" id="email" className="input input-bordered" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="form-control">
                            <label className="label">Phone:</label>
                            <input type="email" id="email" className="input input-bordered" value={phone} onChange={handlePhoneChange} required />
                        </div>

                        <div className="form-control">
                            <label className="label">Message:</label>
                            <textarea id="message" value={message} onChange={handleMessageChange} required />
                        </div>


                        <button className="btn mt-10 rounded text-white hover:bg-sky-600 bg-sky-400" type="submit">Submit</button>
                    </form>
                </div>

            </div>

    );
};

export default Contact;
