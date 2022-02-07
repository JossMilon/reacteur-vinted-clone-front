import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import cookies from "js-cookie";

const Login = ({setIsConnected}) => {
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: email, 
            password: password
        }
        try {
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", formData);
            setIsConnected(true)
            cookies.set("token", response.data.token);
            navigate("/");
        }
        catch(error) {
            setError(true)
        }
    };
    return (
        <div className="form-container">
            <h1>Se connecter</h1>
            <form>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input onChange={(e) => {setPassord(e.target.value)}} type="password" placeholder="Mot de passe"/>
                <input className="cta primary" onClick={handleSubmit} type="submit" value="S'inscrire"/>
                {error && <p>Il y a une couille dans le potage</p>}
                <Link to="/signup"><p>Pas encore inscrit(e) ? Créez votre compte ici</p></Link>
        </form>
        </div>
    )
};

export default Login