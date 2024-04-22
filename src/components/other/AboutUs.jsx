

const AboutUs = () => {
    return (
        <div className=" lg:px-40 lg:py-10">
            <h1 className="text-5xl font-bold text-center text-cyan-600 my-10  ">About Us</h1>
            <div className="flex items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                <div className="w-2/3">
                    <img src={"https://i.ibb.co/3WP2xvR/heavy-box.png"}  />
                </div>
                <div className=" w-1/3 md:mr-16">
                    <h2 className=" lg:text-2xl font-bold text-blue-800">Heavy Furniture Moving!</h2>
                    <p className="text-sm lg:text-lg">Our team of professional movers <br />are ready to  help to move your heavy furnitures.</p>
                    
                </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                <div className="w-2/3">
                    <img src={"https://i.ibb.co/0MTsq6b/packing.png"} className="" />
                </div>
                <div className=" w-[30vh] md:w-1/3 ml-10 md:ml-16 py-8">
                    <h2 className=" lg:text-2xl font-bold text-blue-800">Any type of shifting!</h2>
                    <p className="text-sm lg:text-lg">Home shifting, Office shifting, Single furniture <br />shifting,Plants shifting etc. We can help you with any type of shifting.</p>
                    
                </div>
            </div>
            <div className="flex items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                <div className="w-1/2 md:ml-16">
                    <img src={"https://i.ibb.co/GVR7vNX/moving.png"}  className="h-[30vh] md:h-[60vh]"/>
                </div>
                <div className=" w-1/2 mr-6 md:mr-16">
                    <h2 className=" lg:text-2xl font-bold text-blue-800">Also helping with packing!</h2>
                    <p className="text-sm lg:text-lg">We can also help you with packing.  Our <br /> special employees will help you to pack everything.</p>
                    
                </div>
            </div>
    
            
         
        </div>

    );
};

export default AboutUs;