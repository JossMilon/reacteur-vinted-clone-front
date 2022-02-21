import placeholder from "../assets/images/placeholder-avatar.jpg";
import axios from "axios";
import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Offer = () => {
    const {id} = useParams();
    const [data, setData] =  useState({});
    const [isLoading, setIsLoading] =useState(true);
    const navigate = useNavigate();
    const handlePay = () => {
        navigate(`/payment/`, {state: {"amount": data.product_price, "description": data.product_name}});
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://reacteur-vinted-backend-jm.herokuapp.com/offer/${id}`);
            // const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [id])
    return isLoading? <p className="loader">Content is loading...</p>:
    (
        <div className="offer-container">
            <div className="offer-picture">
                <img src={data.product_image.secure_url} alt=""/>
            </div>
            <div className="offer-information">
                <div className="offer-top-information">
                    <p>{data.product_price}€</p>
                    <div>
                        {data.product_details.map((detail, index) => {
                            const key = Object.keys(detail)
                            return (
                                <div key={index} className="offer-details">
                                    <span >{key}: </span><span >{detail[key]}</span>
                                </div>
                                 
                            )
                        })}
                    </div>
                </div>
                <div className="offer-bottom-information">
                        <h4>{data.product_name}</h4>
                        <p>{data.product_description}</p>
                        <div className="owner">
                            {data.owner.account.avatar? <img className="avatar-thumb" src={data.owner.account.avatar.url} alt="avatar" />: <img className="avatar-thumb" src={placeholder} alt="avatar" />}
                            <span>{data.owner.account.username}</span>
                        </div> 
                </div>
                <div onClick={handlePay} className="cta primary">Acheter</div>
            </div>
        </div>
    )
};

export default Offer;