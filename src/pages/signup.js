import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Signup = ({setUser}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    // Where do we pass the newsletter thingy
    const [newsletter, setNewsletter] = useState(false); 
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        try {
            const response = await axios.post("https://reacteur-vinted-backend-jm.herokuapp.com/user/signup", formData);
            // const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", formData);
            setUser(response.data.token, response.data._id);
            navigate("/");
        }
        catch(error) {
            //For unknown reason I used a back office with error instead of message for the subscribe route
            setError(error.response.data.message);
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
                {error && <p className="error">{error}</p>}
                <Link to="/login"><p>Déjà inscrit ? Connectez-vous ici</p></Link>
            </form>
        </div>

    )
};

export default Signup;