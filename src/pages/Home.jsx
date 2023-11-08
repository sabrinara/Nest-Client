import { useState } from "react";
import Banner from "../components/Banner";
import ClientReview from "../components/ClientReview";
import BrandsList from "../components/Service/BrandsList";

import AboutUs from "../components/other/AboutUs";
import { useEffect } from "react";
import ExServices from "../components/other/ExServices";

const Home = () => {

    const [brand, setBrand] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBrand(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <BrandsList brandslist={brand}></BrandsList>
            
            <ClientReview></ClientReview>
            <ExServices></ExServices>
        </div>
    );
};

export default Home;