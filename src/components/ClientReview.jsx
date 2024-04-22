import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ClientReview = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);
    const emplyees = [
        {
            image: "https://i.ibb.co/x576xbn/avatar10.jpg",
            text: "I had an amazing experience with NEST! Their team helped me to shift my home and make it a comfortable and stress-free space that exceeded all my expectations.",
            author: "Jessica Brown",
        },
        {
            image: "https://i.ibb.co/37csX8m/avatar13.jpg",
            text: "NEST made home shifting so easy and stress-free. Their attention to detail and carefully handlling of my furniture was truly special.",
            author: "Smith Williams",
        },
        {
            image: "https://i.ibb.co/Tw9vnsc/avatar14.jpg",
            text: "I can't thank NEST enough for shifting my home. Their team made it so easy and stress-free to move my furnitures.",
            author: "Emma Watson",
        },
    ];

    return (
        <div>
            <div className="w-full h-[6px] my-2"></div>
            <div className="py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-cyan-600  my-10">Clients Thoughts</h2>
                   
                        <div className="flex justify-center items-center ">
                            <div className="grid grid-cols-1 mx-5 my-20 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {emplyees.map((emplyee, index) => (
                                    <div key={index} className="p-6  rounded-xl  shadow-2xl" data-aos="zoom-in">
                                        <p className='flex justify-center'><img className="rounded-full w-28" src={emplyee.image} alt="" />
                                        </p>
                                        <p className=" mt-3 mb-3">- {emplyee.author}</p>
                                        
                                        <p className="
                                        ">{emplyee.text}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                 
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
