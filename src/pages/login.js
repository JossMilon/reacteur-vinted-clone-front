import {useState} from "react";
import axios from "axios";
import cookies from "js-cookie";

const Login = ({setIsConnected}) => {
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    const [error, setError] = useState(false);
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
            console.log("Vous êtes connecté(e)s")
        }
        catch(error) {
            setError(true)
        }
    };
    return (
        <>
            <h2>Se connecter</h2>
            <form>
                <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input onChange={(e) => {setPassord(e.target.value)}} type="password" placeholder="Mot de passe"/>
                <input onClick={handleSubmit} type="submit" value="S'inscrire"/>
                {error && <p>Il y a une couille dans le potage</p>}
        </form>
        </>
    )
};

export default Login