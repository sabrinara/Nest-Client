import { useState } from "react";
import Banner from "../components/Banner";
import ClientReview from "../components/ClientReview";


import AboutUs from "../components/other/AboutUs";
import { useEffect } from "react";
import ExServices from "../components/other/ExServices";
import FeaturedServices from "../components/Service/FeaturedServices";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <Helmet>
                <title>NEST-Home</title>
            </Helmet>
            
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FeaturedServices services={services}></FeaturedServices>
            <ClientReview></ClientReview>
            <ExServices></ExServices>
        </div>
    );
};

export default Home;