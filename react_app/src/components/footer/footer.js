import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import pinterest from "../../assets/img/pinterest.png"
import facebook from "../../assets/img/facebook(1).png"
import intagram from "../../assets/img/instagram(1).png"
import snapchat from "../../assets/img/snapchat.png"


const Foote = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${colors.background_black};
  color: ${colors.txt_white};

  & h3 {
    margin: 1.5rem 0;
  }
  & p {
    font-size: 0.9rem;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 16%;
  margin: 0 2rem;

  & p:nth-child(3) {
    margin: 0 0 1.5rem 0;
  }

  & p:nth-child(4) {
    margin: 0 0 1.5rem 0;
  }
`;
const Horraires = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;
  margin: 0 2rem;
`;
const Liens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  margin: 0 2rem;

  & p {
    margin: 4rem 0 1rem 0;
  }

  & .myBtn {
    margin: 0.3rem 0;
  }
`;
const Reseaux = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 2rem;

  & img {
    width: 2rem;
    margin: 0 2rem;
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <Foote>
      <Contacts>
        <h3> Contacts </h3>
        <p> 30 chemin du jurassique </p>
        <p> 41230 Mur-de-Sologne </p>
        <p> Dinosauria@orange.fr </p>
        <p> Accueil : 05-51-48-97-84 </p>
        <p> Remboursement : 05-47-63-85-41 </p>
      </Contacts>

      <Horraires>
        <h3> Horraires </h3>
        <p> Ouvert du lundi au dimanche de 10h à 18h </p>
      </Horraires>

      <Liens>
        <h3> Liens </h3>
        <Btn
        link={"/données"}
        disabled={false}
        bg={null}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={null}
        text="Information sur les données"
        />
        <Btn
        link={"/cookies"}
        disabled={false}
        bg={null}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={null}
        text="Politique des cookies"
        />
        <Btn
        link={"/cgv"}
        disabled={false}
        bg={null}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={null}
        text="CGV & CGU"
        />
        <p className="opacity"> Dinosauria © 2022 </p>
      </Liens>

      <Reseaux>
        <h3> Suivez nous sur nos réseaux sociaux </h3>
        <div>
        <img src={pinterest} alt="logo-pinterest"></img>
        <img src={facebook} alt="logo-facebook"></img>
        <img src={intagram} alt="logo-instagram"></img>
        <img src={snapchat} alt="logo-snapchat"></img>
        </div>
      </Reseaux>
    </Foote>
  );
}

export default Footer;
