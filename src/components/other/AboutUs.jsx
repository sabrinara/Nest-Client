

const AboutUs = () => {
    return (
        <div className=" lg:px-40 lg:py-20">
            <h1 className="text-5xl font-bold text-center text-cyan-600 mt-16 lg:mt-0  ">About Us</h1>
            <div className=" bg-white text-cyan-900  shadow-xl mb-8 h-[46vh] lg:h-[80vh] mx-16">
                <figure className="w-2/3">
                    <img src={"https://i.ibb.co/3WP2xvR/heavy-box.png"}  />
                </figure>
                <div className="">
                    <h2 className=" mt-10 lg:mt-40 lg:text-2xl lg:font-bold text-blue-800">Heavy Furniture Moving!</h2>
                    <p className="text-sm lg:text-lg">Our team of professional movers <br />are ready to  help to move your heavy furnitures.</p>
                    
                </div>
            </div>
            <div className=" bg-white text-cyan-900  shadow-xl mb-8 h-[46vh] lg:h-[80vh] mx-16">
               
                <div className=" lg:mx-10 ">
                    <h2 className=" mt-10 lg:mt-40 lg:text-3xl lg:font-bold text-blue-800">Any type of shifting!</h2>
                    <p className="text-sm lg:text-lg">Home shifting, Office shifting, Single furniture <br />shifting,Plants shifting etc. We can help you with any type of shifting.</p> 
                </div>
                <figure className="w-2/3">
                    <img src={"https://i.ibb.co/0MTsq6b/packing.png"}  />
                    </figure>
            </div>
            <div className=" bg-white text-cyan-900 shadow-xl h-[46vh] lg:h-[80vh] mx-16 mb-16">
                <figure className="w-2/3">
                    <img src={"https://i.ibb.co/GVR7vNX/moving.png"}  />
                </figure>
                <div className=" lg:mr-8">
                    <h2 className=" mt-10 lg:mt-36 lg:text-3xl lg:font-bold  text-blue-800">Also helping with packing!</h2>
                    <p className="text-sm lg:text-lg ">We can also help you with packing.  Our <br /> special employees will help you to pack everything.</p>
                    
                </div>
            </div>
         
        </div>

    );
};

export default AboutUs;