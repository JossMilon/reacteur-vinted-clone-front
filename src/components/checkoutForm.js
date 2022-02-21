import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutForm({id, amount, description}) {
    const [completed, setComplete] = useState(false);
    const element = useElements();
    const stripe = useStripe();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const cardElementData = element.getElement(CardElement);
        const stripeResponse = await stripe.createToken(cardElementData, {name: id});
        const stripeToken = stripeResponse.token.id;
        console.log(stripeToken);
        const response = await axios.post("https://reacteur-vinted-backend-jm.herokuapp.com/payment", {
            amount: amount*100,
            description: description,
            "stripeToken": stripeToken
        });
        // CONSOLE RESPONSE
        console.log(response);
        if (response) {
            setComplete(true);
        }
    }
    return  completed? 
            <p>Transaction completed</p>:
            <div className="background">
                <form className="paymentBlock container" onSubmit={handleSubmit}>
                    <div className="topPayment">
                        <p>Résumé de la commande</p>
                        <div>
                            <label>Commande passée</label><label>{amount}€</label>
                        </div>
                        <div>
                            <label>Frais protection acheteur</label><label>{amount*0.02+1.5}</label>
                        </div>
                        <div>
                            <label>Frais de port</label><label>3€</label>
                        </div>
                    </div>
                    <div className="bottomPayment">
                        <div className="total">
                            <label>Total</label><label>{amount*1.02 + 1.5 + 3}€</label>
                        </div>
                        <p>Plus qu'une étape pour acheter <strong>{description}</strong>. Le montant à régler est de <strong>{amount*1.02 + 1.5 + 3}€</strong> (frais inclus).</p>
                        <CardElement className="stripeCardInput" />
                        <input className="cta primary" type="submit" value="Payer"/>
                    </div>
                </form>
            </div>
};