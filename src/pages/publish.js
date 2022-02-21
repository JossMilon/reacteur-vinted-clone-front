import { useState } from "react";
import { Navigate } from "react-router-dom";
import InputField from "../components/inputField";

import axios from "axios";

const Publish = ({token}) => {
    const [image, setImage] = useState({});    
    const [title, setTitle] = useState("Air Max 90");
    const [description, setDescription] = useState("Toutes neuves");
    const [brand, setBrand] = useState("Nike");
    const [size, setSize] = useState("44");
    const [color, setColor] = useState("Bleue");
    const [condition, setCondition] = useState("Neuf");
    const [city, setCity] = useState("Paris");
    const [price, setPrice] = useState("120");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("picture", image);
        try {
            // const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            const response = await axios.post("https://reacteur-vinted-backend-jm.herokuapp.com/offer/publish", 
            formData, 
            {headers: {
                'Authorization': `Bearer ${token}`}
            });
            setError(false);
        }
        catch(error) {
            setError(error.response.data.message)
        }
    }
    return !token? <Navigate to="/login" />:(
    <div className="background">
        <div className="publish container">
            <h1>Vends ton article</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="file">Ajouter une image</label>
                    <input onChange={(e) => {setImage(e.target.files[0])}} type="file" id="file" placeholder="Ajouter une image" />
                </div>
                <div>
                    <InputField id="title" type="text" setFunc={setTitle} label="Titre" placeholder="Titre de l'annonce"/>
                    <InputField id="description" type="text" setFunc={setDescription} label="Description" placeholder="Description de l'annonce"/>
                </div>
                <div>
                    <InputField id="brand" type="text" setFunc={setBrand} label="Marque" placeholder="Ex: 1086, Saint James, Armor-Lux..."/>
                    <InputField id="size" type="text" setFunc={setSize} label="Taille" placeholder="Ex: L, 12, 42"/>
                    <InputField id="color" type="text" setFunc={setColor} label="Couleur" placeholder="Ex: Bleue"/>
                    <InputField id="condition" type="text" setFunc={setCondition} label="État" placeholder="Ex: Neuf avec étiquette"/>
                    <InputField id="position" type="text" setFunc={setCity} label="Ville" placeholder="Ex: Paris"/>
                </div>
                <div>
                    <InputField id="price" type="number" setFunc={setPrice} label="Prix" placeholder="0.00"/>
                </div>
                <input className="cta primary" type="submit" value="Publier l'article"/>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    </div>
    )
};

export default Publish;