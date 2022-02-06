import {useState} from "react";
import axios from "axios";
import cookies from "js-cookie";

const Signup = ({setIsConnected}) => {
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
        }
        catch(error) {
            setError(true)
        }
    };
    return (
        <>
            <h2>S'inscrire</h2>
            <form>
                <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Nom d'utilisateur"/>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input onChange={(e) => {setPassord(e.target.value)}} type="password" placeholder="Mot de passe"/>
                <div>
                    <input onChange={() => {setNewsletter(!newsletter)}} type="checkbox" id="newsletter" checked={newsletter}/>
                    <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
                </div>
                <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
                <input onClick={handleSubmit} type="submit" value="S'inscrire"/>
                {error && <p>Il y a  une couille  dans le potage</p>}
        </form>
        </>
    )
};

export default Signup;