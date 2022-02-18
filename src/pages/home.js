import axios from "axios";
import {useState, useEffect} from "react";
import CategoryBlock from "../components/category-block";
import Hero from "../components/hero";

const Home = ({searchBar, sorting, min, max}) => {
    const [data, setData] =  useState({});
    const [isLoading, setIsLoading] =useState(true);
    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchBar}&sort=${sorting}&priceMin=${min}&priceMax=${max}`);
            const response = await axios.get(`https://reacteur-vinted-backend-jm.herokuapp.com/offers?title=${searchBar}&sort=${sorting}&priceMin=${min}&priceMax=${max}`);
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [searchBar, sorting, min, max])
    return isLoading? <p className="loader">Content is loading...</p>:
    (
        <>
            <div className="hero-wrapper">
                <div>
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