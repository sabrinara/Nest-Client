import "./BannerNew.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const BannerNew = () => {
    return (
        <div className='h-[50vh] md:h-[84vh]'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper flex justify-center items-center"
            >

                <SwiperSlide>
                    <div style={{ position: 'relative' }}>
                        <img src="./banner1.jpg" className='opacity-50 w-full h-[50vh] md:h-[84vh]' alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato">
                            <h1 className="font-extrabold text-5xl md:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
                            <p className="flex md:hidden mx-5 font-bold text-sm md:text-lg">A service sharing website. <br /> Service at your door</p>
                            <p className="hidden md:flex m-5 font-bold text-sm md:text-lg">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div style={{ position: 'relative' }}>
                        <img src="./banner3.jpg" className='opacity-50 h-[50vh] md:h-[84vh] w-screen' alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato">
                            <h1 className="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
                            <p className="flex md:hidden mx-5 font-bold text-sm md:text-lg">A service sharing website. <br /> Service at your door</p>
                            <p className="hidden md:flex m-5 font-bold text-sm md:text-lg">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div style={{ position: 'relative' }}>
                        <img src="./banner2.jpg" className='opacity-50 h-[50vh] md:h-[84vh] w-screen' alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato">
                            <h1 className="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
                            <p className="flex md:hidden mx-5 font-bold text-sm md:text-lg">A service sharing website. <br /> Service at your door</p>
                            <p className="hidden md:flex m-5 font-bold text-sm md:text-lg">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div style={{ position: 'relative' }}>
                        <img src="./banner4.jpg" className='opacity-50 h-[50vh] md:h-[84vh] w-screen' alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-lato">
                            <h1 className="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent">Welcome</h1>
                            <p className="flex md:hidden mx-5 font-bold text-sm md:text-lg">A service sharing website. <br /> Service at your door</p>
                            <p className="hidden md:flex m-5 font-bold text-sm md:text-lg">We deliver at your doorstep. <br /> Our vision is to help you shift your home safely. <br /> Explore for more information...</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default BannerNew;