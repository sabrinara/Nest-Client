// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";



const PopularService = () => {


    return (
        <div className="py-4">
            
            <div className="bg-my-card">
                <div className="mx-auto sm:max-w-xl md:max-w-screen-xl md:px-18">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper"
                    >
                        <SwiperSlide className="h-72 rounded-lg">
                            <div className="flex justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row justify-between px-10 items-center">
                                    <div className="p-4 mb-8 md:w-1/2  md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-700">Move to New Home with Nest</h1>
                                        <p className=" text-lg mb-6">Moving on to a new stage in life can be a challenging process, but it&#39;s also an opportunity to grow and explore new possibilities. Every move is a new beginning, embrace the change and make the most of your new surroundings. Home is where our story begins, and each move adds a new chapter to that story. </p>
                                        <Link to='/s' className='bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-md mb-4'>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/wdcy2mc/shifting2.jpg"} alt="Bussiness" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg h-96">
                            <div className="flex   justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row-reverse justify-between items-center px-10">
                                    <div className="p-4 mb-8 md:w-1/2 md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-700">Nest team will help you to rearrange your furniture</h1>
                                        <p className=" text-lg mb-6">Teamwork makes the dream work, especially when it comes to arranging furniture to create the perfect space. Like pieces of a puzzle, each member of the furniture arranging team brings their unique skills to create a cohesive and harmonious living space.</p>
                                        <Link to='/s' className='bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-md mb-4'>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/vjZJ4DX/interior.jpg"} alt="Explotion" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg h-96">
                            <div className="flex justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-10">
                                    <div className="p-4 mb-8 md:w-1/2 md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-700">Our special interior designer team at your service</h1>
                                        <p className=" text-lg mb-6">The details are not the details. They make the design. Design is not just what it looks like and feels like. Design is how it works.The essence of interior design will always be about people and how they live. The most important thing about design is how it makes you feel. Decorating golden rule: Live with what you love. Home is not a place, it’s a feeling.</p>
                                        <Link to='/service' className='bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-md mb-4 '>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/mbGj32f/interior2.jpg"} alt="Polution" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-lg h-96">
                            <div className="flex   justify-center items-center py-10">
                                <div className="mx-auto flex flex-col md:flex-row-reverse justify-between items-center px-10">
                                    <div className="p-4 mb-8 md:w-1/2 md:px-20">
                                        <h1 className="text-4xl font-bold  mb-4 text-sky-700">Hire professional cleaners from NEST</h1>
                                        <p className=" text-lg mb-6">Cleaning is not a chore when you have a team that shares the load and lifts each other up.A clean home is a happy home, and behind every spotless room is a dedicated cleaning team. Behind every sparkling surface is a team that understands the transformative power of a clean environment. </p>
                                        <Link to='/s' className='bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-md mb-4'>Explore More</Link>
                                    </div>
                                    <div className="md:w-1/2">
                                        <img src={"https://i.ibb.co/qFPhNRD/cleaning.jpg"} alt="Explotion" className="h-56 md:h-[400px] rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default PopularService;