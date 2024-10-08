import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>NEST-About</title>
            </Helmet>
            <div className=" md:px-28 md:py-10">
                <h1 className="text-5xl font-bold text-center text-sky-600 my-6  ">About Us</h1>
                <div className="flex items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                    <div className="w-2/3">
                        <img src="./about/heavy-box.png" />
                    </div>
                    <div className=" w-1/3 md:mr-16">
                        <h2 className=" md:text-3xl font-bold text-sky-700 md:mb-2">Heavy Furniture Moving!</h2>
                        <p className="text-sm lg:text-lg">Our team of professional movers <br />are ready to  help to move your heavy furnitures.</p>

                    </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                    <div className="w-2/3">
                        <img src="./about/packing.png" className="" />
                    </div>
                    <div className=" w-[30vh] md:w-1/3 ml-10 md:ml-16 py-8">
                        <h2 className=" md:text-3xl font-bold text-sky-700 md:mb-2">Any type of shifting!</h2>
                        <p className="text-sm lg:text-lg">Home shifting, Office shifting, Single furniture shifting,Plants shifting etc. We can help you with any type of shifting.</p>

                    </div>
                </div>
                <div className="flex items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                    <div className="w-1/2 md:ml-16">
                        <img src="./about/moving.png" className="h-[30vh] md:h-[60vh]" />
                    </div>
                    <div className=" w-1/2 mr-6 md:mr-16">
                        <h2 className=" md:text-3xl font-bold text-sky-700 md:mb-2">Also helping with packing!</h2>
                        <p className="text-sm lg:text-lg">We can also help you with packing.  Our <br /> special employees will help you to pack everything.</p>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default About;