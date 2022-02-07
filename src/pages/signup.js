import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import cookies from "js-cookie";

const Signup = ({setIsConnected}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    // Where do we pass the newsletter thingy
    const [newsletter, setNewsletter] = useState(false); 
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            username: username,
            email: email, 
            password: password
        }
        try {
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", formData);
            setIsConnected(true);
            cookies.set("token", response.data.token);
            navigate("/");
        }
        catch(error) {
            setError(true)
        }
    };
    return (
        <div className="form-container">
            <h1>S'inscrire</h1>
            <form>
                <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Nom d'utilisateur"/>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input onChange={(e) => {setPassord(e.target.value)}} type="password" placeholder="Mot de passe"/>
                <div>
                    <input onChange={() => {setNewsletter(!newsletter)}} type="checkbox" id="newsletter" checked={newsletter}/>
                    <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
                </div>
                <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
                <input className="cta primary" onClick={handleSubmit} type="submit" value="S'inscrire"/>
                {error && <p>Il y a  une couille  dans le potage</p>}
                <Link to="/login"><p>Déjà inscrit ? Connectez-vous ici</p></Link>
            </form>
        </div>

    )
};

export default Signup;