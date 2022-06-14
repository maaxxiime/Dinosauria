import StripeContainer from "../stripe/StripeContainer";
import styled from "styled-components";

const Section = styled.section`
display: flex;
align-items: center;
justify-content: center;
`

const MainSection = styled.section`

`



function Paiement() {

  const user = window.localStorage.getItem("user");
  const panier = window.localStorage.getItem("panier");
  const panierJson = JSON.parse(panier);
  const total = panierJson.total;



    return user ? (
        <MainSection>
        <h1> Description </h1>
        <p> Votre panier est de {total} € </p>

      <StripeContainer />
        </MainSection>

    ) : (
        <Section>
            <h2> Connectez-vous pour voir cette page </h2>
        </Section>
    )
}

export default Paiement;