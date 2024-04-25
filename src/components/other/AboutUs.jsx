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
                    <h2 className=" md:text-3xl font-bold text-sky-700 md:mb-2">Heavy Furniture Moving!</h2>
                    <p className="text-sm lg:text-lg">Our team of professional movers <br />are ready to  help to move your heavy furnitures.</p>
                    <Link to="/about" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-md mb-4">Explore More</Link>
                </div>
            </div>
          

        </div>

    );
};

export default AboutUs;