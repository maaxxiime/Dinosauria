import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        if(!error) {
            console.log("token généré :", paymentMethod);
        } else {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: 350}}>
            <CardElement options={{hidePostalCode: true}} />
            <button> Payer </button>
        </form>
    )
}

export default CheckoutForm;