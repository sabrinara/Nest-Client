import { Link } from "react-router-dom";


const AboutUs = () => {
    return (
        <div className=" lg:px-40 lg:py-10">
            <h1 className="text-5xl font-bold text-center text-cyan-600 py-10">About Us</h1>
            <div className="flex items-center justify-between rounded gap-4 md:gap-0 bg-white text-cyan-900  shadow-xl mb-8 mx-4 h-[34vh] md:h-[70vh] ">
                <div className="w-2/3">
                    <img src={"https://i.ibb.co/3WP2xvR/heavy-box.png"}  />
                </div>
                <div className=" w-1/3 md:mr-16 flex flex-col justify-start items-start md:gap-4">
                    <h2 className=" lg:text-2xl font-bold text-blue-800">Heavy Furniture Moving!</h2>
                    <p className="text-sm lg:text-lg">Our team of professional movers <br />are ready to  help to move your heavy furnitures.</p>
                    <Link to="/about" className="text-sm md:text-lg px-2 py-1 md:px-4 md:py-2 md:mx-auto bg-sky-600 hover:bg-sky-500 text-white rounded">Explore More</Link>
                </div>
            </div>
          

        </div>

    );
};

export default AboutUs;