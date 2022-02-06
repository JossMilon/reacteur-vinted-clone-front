import { Link } from "react-router-dom";
import cookies from "js-cookie";
import logo from "../assets/images/vinted_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({isConnected, setIsConnected}) => {
    const handleDeconnect = () => {
        cookies.remove("token");
        setIsConnected(false);
    }
    return (
        <div className="container">
            <div className="navbar">
                <div className="logoContainer">
                    <Link to="/">
                        <img src={logo} alt="vinted logo"/>
                    </Link>
                </div>
                <div className="inputContainer">
                    <FontAwesomeIcon icon="search" className="icon"/>
                    <input type="text" placeholder="Recherche des articles" />
                </div>
                <nav>
                    {isConnected? <span className="cta secondary" onClick={handleDeconnect}>Se déconnecter</span>:
                    <>
                        <Link to="signup"><span className="cta secondary">S'inscrire</span></Link>
                        <Link to="login"><span className="cta secondary">Se connecter</span></Link>
                    </> 
                    }
                    <span className="cta primary">Vends tes articles</span>
                </nav>
            </div>
        </div>
    )
};

export default Navbar