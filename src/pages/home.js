import axios from "axios";
import {useState, useEffect} from "react";
import CategoryBlock from "../components/category-block";
import Hero from "../components/hero";

const Home = () => {
    const [data, setData] =  useState({});
    const [isLoading, setIsLoading] =useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [])
    return isLoading? <p className="loader">Content is loading...</p>:
    (
        <>
            <div className="hero-wrapper">
                <div className="container">
                    <Hero/>
                </div>
            </div>
            <div className="container">
                <CategoryBlock data={data} categoryTitle="Articles populaires"/>
            </div>
        </>


    )
};

export default Home;