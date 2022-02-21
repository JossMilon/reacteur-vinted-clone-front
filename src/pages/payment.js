import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate, useLocation } from "react-router-dom";
import CheckoutForm from "../components/checkoutForm";

const stripePromise = loadStripe("pk_test_51KUxgSEOBrmHhbhzecVilW0rCayu2PUrtOZMDjMCKtNeOm74gy91IFQtI2lmCgdCwuS1un4effhzkcSS0twSy1j200pgOSuzFP");

export default function Payment({id, token}) {
    const location = useLocation();
    const {amount, description} = location.state;
    return !token? <Navigate to="/login" />:
        (<div>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id} amount={amount} description={description} />
            </Elements>
        </div>)
} 