import { FaFacebook, FaInstagram, FaTwitter , } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
const Footer = () => {
    return (
        <footer className="w-full p-12">
            <hr className="my-8 border-sky-400 lg:mx-24" />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-6   text-center md:justify-between">
                <div className="flex  items-center  md: mr-10 lg:ml-32 ">
                <img className="w-10 h-10" src={Logo} alt="" />
                        <h1 className="text-2xl mx-2 font-serif font-semibold text-sky-500"> <span className="text-4xl text-red-500">N</span>EST</h1>
                </div>

                <ul className="flex flex-col lg:flex-row flex-wrap items-center gap-y-2 gap-x-8 lg:mr-32">
                    <li>
                        <a
                            href="/about" 
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            About Us
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Contribute
                        </a>
                    </li> */}
                    <li>
                        <a
                            href="/contact"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="/service"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-cyan-800 focus:text-cyan-800"
                        >
                            Services
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-sky-400 lg:mx-24 lg:hidden" />
            <div className="grid grid-flow-col gap-6 text-blue-500 m-6 justify-center " target="blank">
                    <a rel="noopener noreferrer" href="https://www.facebook.com/" target="_blank" ><FaFacebook className="md:w-8 md:h-8 "></FaFacebook></a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><FaInstagram className="md:w-8 md:h-8" ></FaInstagram></a>
                    <a rel="noopener noreferrer" href="https://twitter.com/" target="_blank"><FaTwitter className="md:w-8 md:h-8" ></FaTwitter></a>
                </div>
           
            <hr className="my-8 border-sky-400 lg:mx-24" />
            <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                © 2024, N<small>EST -Service Sharing Website</small><br /> <small> @Sabrina Rashid</small>
            </p>
        
</footer >
      
    );
};

export default Footer;