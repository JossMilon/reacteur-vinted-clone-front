import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import logo from "../assets/images/vinted_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({setUser, token,  setSearchBar, sorting, setSorting, setMin, setMax}) => {
    const [openMenu, setOpenMenu] = useState(true);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setSearchBar(e.target.value);
    };
    const handleRadioChange = () => {
        setSorting(sorting === "price-asc"? "price-desc": "price-asc")
    };
    const handlePriceMinChange = (e) => {
        setMin(Number(e.target.value) || "");
    };
    const handlePriceMaxChange = (e) => {
        setMax(Number(e.target.value) || "");
    };
    const handleDeconnect = () => {
        setUser(null);
        navigate("/");
    };
    return (
        <div className="container">
            <div className={openMenu? "navbar hidden": "navbar"}>
                <div className="logoContainer">
                    <Link to="/">
                        <img src={logo} alt="vinted logo"/>
                    </Link>
                    <FontAwesomeIcon onClick={() => setOpenMenu(!openMenu)} icon="bars" className="mobileMenu"/>
                </div>
                <div className="allFilter">
                    <div className="firstLineFilter">
                        <FontAwesomeIcon icon="search" className="icon"/>
                        <input onChange={handleInputChange} type="text" placeholder="Recherche des articles" />
                    </div>
                    <div className="secondLIneFilter">
                        <div className="sortContainer">
                            <div className="radio">
                                <input onChange={handleRadioChange} type="radio" name="sortContainer" id="ascending" checked={sorting === "price-asc"? true: false}/><label htmlFor="ascending">Prix croissant</label>
                            </div>
                            <div className="radio">
                                <input onChange={handleRadioChange}  type="radio" name="sortContainer" id="descending" checked={sorting === "price-asc"? false: true}/><label htmlFor="descending">Prix décroissant</label>
                            </div>
                        </div>
                        <div className="priceFilter">
                            <div>
                                <label htmlFor="priceMin">Prix min</label><input onChange={handlePriceMinChange} type="number" placeholder="0.00€" />
                            </div>
                            <div>
                                <label htmlFor="priceMax">Prix max</label><input onChange={handlePriceMaxChange} type="number" placeholder="0.00€" />
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    {token? <a href="#"><span className="cta secondary" onClick={handleDeconnect}>Se déconnecter</span></a>:
                    <>
                        <Link to="signup"><span className="cta secondary">S'inscrire</span></Link>
                        <Link to="login"><span className="cta secondary">Se connecter</span></Link>
                    </> 
                    }
                    <Link to="/publish"><span className="cta primary">Vends tes articles</span></Link>
                </nav>
            </div>
        </div>
    )
};

export default Navbar