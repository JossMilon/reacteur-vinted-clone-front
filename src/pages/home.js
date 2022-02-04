import placeholder from "../assets/images/placeholder-avatar.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

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
            <div className="header-wrapper">
                <div className="container">
                    <div className="header-block">
                        <h1>Prêt à faire du tri dans vos placard ? </h1>
                        <div className="cta-main">Commencez à vendre</div>
                    </div>
                </div>
            </div>
            <div className="container body-block">
                <div className="categories">
                    <h3>Articles populaires</h3>
                    <div className="category-blocks">
                        {
                            data.offers.map((product, index) => {
                                return (
                                    <div key={index} className="product-tile">
                                        <div className="owner">
                                        {product.owner.account.avatar? <img className="avatar-thumb" src={product.owner.account.avatar.url} alt="avatar" />: <img className="avatar-thumb" src={placeholder} alt="avatar" />}
                                        <span>{product.owner.account.username}</span>
                                        </div> 
                                        <div className="product-pic">
                                            <Link to={`/offer/${product._id}`}><img src={product.product_image.secure_url} alt="#"/></Link>
                                        </div>
                                        <div className="product-information">
                                            <p>{product.product_price}€</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>


    )
};

export default Home;