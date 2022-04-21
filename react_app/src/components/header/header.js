import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";

const Section = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.background_black};
  color: ${colors.txt_white};
`;

function Header() {
  let url = document.location.href;
  let urldeux = url.replace(/\/$/, "");
  let TrueUrl = urldeux.substring(urldeux.lastIndexOf("/") + 1);

  function deconnexion() {
    localStorage.clear();
    window.location.assign("/login");
  }

  return (
    <Section>

      <Btn
        link={"/"}
        disabled={false}
        bg={url === "http://localhost:3000/" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Accueil"
      />

      <Btn
        link={"/herbivore"}
        disabled={false}
        bg={TrueUrl === "herbivore" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Salle des herbivores"
      />

       <Btn
        link={"/carnivore"}
        disabled={false}
        bg={TrueUrl === "carnivore" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Salle des carnivores"
      />

       <Btn
        link={"/jardin"}
        disabled={false}
        bg={TrueUrl === "jardin" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Le jardin"
      />

       <Btn
        link={"/campement"}
        disabled={false}
        bg={TrueUrl === "campement" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Campement du jurassique"
      />

       <Btn
        link={"/boutique"}
        disabled={false}
        bg={TrueUrl === "boutique" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Boutique"
      />
    {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : (
       <Btn
        link={"/panier"}
        disabled={
          TrueUrl === "login" ? true : TrueUrl === "signup" ? true : false
        }
        bg={TrueUrl === "panier" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Panier"
      />
    )}

       <Btn
        link={"/signup"}
        disabled={false}
        bg={TrueUrl === "signup" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Inscription"
      />

       <Btn
        link={"/login"}
        disabled={false}
        bg={TrueUrl === "login" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Connexion"
      />

    {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : (
      <Btn
        link={"/compte"}
        disabled={
          TrueUrl === "login" ? true : TrueUrl === "signup" ? true : false
        }
        bg={TrueUrl === "compte" ? colors.btn_blue : "none"}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        text="Mon compte"
      />
    )}

    {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : (
        <Btn
          onclick={(e) => deconnexion()}
          disabled={null}
          bg="none"
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={colors.btn_blue}
          text="Deconnexion"
        />
    )}
    </Section>
  );
}

export default Header;