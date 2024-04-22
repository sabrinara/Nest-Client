import { useState } from "react";
import { toast } from "react-toastify";

const NewsSletter = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && !emailError) {
            toast.success('Subscribe successfully', {
                closeOnClick: true,
            })
            setEmail('');
        }
    }
    const handleEmail = (e) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setEmail(e.target.value);
        if (!emailRegex.test(email)) {
            setEmailError('Email is not valid');
        } else {
            setEmailError('');
        }
    }
    return (
        
        <section className="text-gray-600 body-font px-4 py-4 lg:py-8 mx-auto sm:max-w-xl md:max-w-screen-xl">
        <div className="md:flex justify-around items-center gap-2 py-12 px-3 bg-my-card rounded" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-sky-700 text-center">Subscribe to our Newsletter</h1>
            <div>
                {emailError && <span className="text-sm text-red-400 mr-2">*{emailError}</span>}
                <div className="join">
                    <input type="email" value={email} onChange={handleEmail} className="input input-info input-bordered join-item w-full" placeholder="Email" required />
                    <button className="btn btn-info join-item rounded-r-full capitalize" onClick={handleSubmit}>Subscribe</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default NewsSletter;