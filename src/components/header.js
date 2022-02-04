import { Link } from "react-router-dom";
import logo from "../assets/images/vinted_logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div>
                    <Link to="/">
                        <img src={logo} alt="vinted logo"/>
                    </Link>
                </div>
                <div className="inputBlock">
                    <FontAwesomeIcon icon="search" className="icon"/>
                    <input type="text" placeholder="Recherche des articles" />
                </div>
                <nav>
                    <span>S'inscrire</span>
                    <span>Se connecter</span>
                    <span>Vends tes articles</span>
                </nav>
            </div>
        </div>
    )
};

export default Navbar