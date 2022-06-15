import StripeContainer from "../stripe/StripeContainer";
import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${colors.border_paiement};
  width: 360px;
  align-items: center;
  box-shadow: 0px 0px 5px green;
  border-radius: 1rem;

  & h4 {
    margin: 1rem;
  }

  & p {
    margin: 0 0 1rem 0;
  }
`;

function Paiement() {
  const user = window.localStorage.getItem("user");
  const panier = window.localStorage.getItem("panier");
  const panierJson = JSON.parse(panier);
  const total = panierJson.total;

  return user ? (
    <MainSection>
      <BorderContainer>
        <h4> Total de votre panier : </h4>
        <p> Votre panier est de {total} € </p>

        <StripeContainer />
      </BorderContainer>
    </MainSection>
  ) : (
    <Section>
      <h2> Connectez-vous pour voir cette page </h2>
      <Btn
        link={"/login"}
        disabled={false}
        bg={colors.background_black}
        textcolor={colors.txt_white}
        bd={colors.background_black}
        bdhover={colors.btn_blue}
        bghover={colors.btn_blue}
        text="Connectez-vous"
      />
    </Section>
  );
}

export default Paiement;
