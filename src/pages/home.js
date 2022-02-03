import axios from "axios";
import {useState, useEffect} from "react";

const Home = () => {
    const [data, setData] =  useState('fuck this shit');
    const [isLoading, setIsLoading] =useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [])
    return isLoading? <span>Content is loading...</span>:
    (
        <>
            <div className="header-wrapper">
                <div className="container">
                    <div className="header-block">
                        <h1>Prêt à faire du tri dans vos placard ? </h1>
                        <span className="cta-main">Commencez à vendre</span>
                    </div>
                </div>
            </div>
            <div className="container body-block">
                <div className="categories">
                    <h3>Title for offer stuff</h3>
                    <div className="category-blocks">
                        {
                            data.offers.map((product, index) => {
                                return (
                                    <div key={index} className="product-tile">
                                        <div className="owner">
                                        {/* {product.owner.account.avatar.url && <img className="avatar-thumb" src={product.owner.account.avatar.url} />} */}
                                        <span>{product.owner.account.username}</span>
                                        </div>
                                        <div className="product-pic">
                                            <img src={product.product_image.secure_url} alt="#"/>
                                        </div>
                                        <div className="product-information">
                                            <p>{product.product_price}</p>
                                            <p>{product.product_details[0].TAILLE}</p>
                                            <p>Brand</p>
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