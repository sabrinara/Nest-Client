import { useState } from "react";
// import Banner from "../components/Banner";
import ClientReview from "../components/ClientReview";


import AboutUs from "../components/other/AboutUs";
import { useEffect } from "react";
import ExServices from "../components/other/ExServices";
import FeaturedServices from "../components/Service/FeaturedServices";
import { Helmet } from "react-helmet-async";
import BannerNew from "./BannerNew";
import Contact from "../components/Contact";
import Providers from "../components/Providers";
import NewsSletter from "./NewsSletter";
import PopularService from "../components/PopularService";

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nest-backend-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <Helmet>
                <title>NEST-Home</title>
            </Helmet>
            <BannerNew></BannerNew>
            {/* <Banner></Banner> */}
            <AboutUs></AboutUs>
            <Providers services={services}></Providers>
            <PopularService></PopularService>
            <FeaturedServices services={services}></FeaturedServices>    
            <ClientReview></ClientReview>
            <ExServices></ExServices>
            <NewsSletter></NewsSletter>
            <Contact></Contact>
        </div>
    );
};

export default Home;