import { Link } from "react-router-dom";
import logo from "../assets/images/vinted_logo.svg"

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div>
                    <Link to="/">
                        <img src={logo} alt="vinted logo"/>
                    </Link>
                </div>
                <input type="text" placeholder="Recherche des articles" />
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