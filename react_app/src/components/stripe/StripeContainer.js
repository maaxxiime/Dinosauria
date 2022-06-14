import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LAc2zFYAhoOqdiR3Mwp0DLGd01nUVKSGNuLd6D1sYkD5NQrYu84O0aA5m7rMYxcPpjlszm017Y52lv9kXyTSSBa00aPXElNAD";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function Stripe() {
    return (
        <Elements stripe={stripeTestPromise} >
            <CheckoutForm />
        </Elements>
    )
}

export default Stripe;