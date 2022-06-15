import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import styled from "styled-components";
import colors from "../variables";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & .paragraphe {
    margin: 0;

    &.opacity {
      opacity: 0;
    }

    &.visible {
      opacity: 1;
    }
  }
  & p:last-child {
    margin: 0 0 1rem 0;
  }
`;

const Paymentbutton = styled.button`
  width: 13rem;
  height: 3rem;
  border: none;
  color: ${colors.txt_white};
  font-size: 1.2rem;
  margin: 1rem 0 1.5rem 0;
  cursor: pointer;

  &.good {
    transition: 0.3s;
    background-color: ${colors.add_panier};
    box-shadow: 1px 5px 10px ${colors.add_panier};
  }

  &.fail {
    transition: 0.3s;
    background-color: ${colors.btn_redhover};
    box-shadow: 1px 5px 10px ${colors.btn_red};
  }
`;


function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const button = document.getElementById("PaymentButton");
    const paragraphe = document.querySelector(".paragraphe");
    var [Count, setCount] = useState(5);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("token généré :", paymentMethod);

      paragraphe.classList.add("visible");

      function timer() {
        setCount(Count = Count -1)
        console.log(Count);
      }

      setInterval(timer, 1000);

      setTimeout(() => {
        window.location.assign("/");
      }, 5000);

    } else {
      console.log(error);

      setTimeout(() => {
        button.classList.add("fail");
        button.classList.remove("good");
      });
      setTimeout(() => {
        button.classList.remove("fail");
        button.classList.add("good");
      }, 3000);
    }
  };

  return (
    <MainDiv>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350 }}>
        <CardElement options={{ hidePostalCode: true }} />
        <Paymentbutton id="PaymentButton" className="good">
          Payer
        </Paymentbutton>
        <p className="paragraphe opacity">
          Votre paiement est bien effectué ! Vous allez être redirigé vers
          l'accueil dans {Count} secondes.
        </p>
      </form>
    </MainDiv>
  );
}

export default CheckoutForm;
