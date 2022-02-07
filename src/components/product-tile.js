import placeholder from "../assets/images/placeholder-avatar.jpg";

import { Link } from "react-router-dom";

const ProductTile = ({product}) => {
    return (
        <div className="product-tile">
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
};

export default ProductTile;