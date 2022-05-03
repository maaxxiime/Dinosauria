import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";



const Head = styled.header`
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${colors.background_black};

  &.appear {
    display: block;
  }

  & #close {
      display: none;
    }

  @media all and (min-width: 1645px) {
    font-size: 0.9rem;
    & #open {
      display: none;
    }
  }
  @media all and (min-width: 1024px) and (max-width: 1644px) {
    font-size: 0.8rem;
    & #open {
      display: none;
    }
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  @media all and (max-width: 479px) {
  }
`;

const DivUne = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  .myBtn:not(:last-child) {
    margin: 0 2rem 0 0;
  }
  @media all and (min-width: 1645px) {

  }
  @media all and (min-width: 1024px) and (max-width: 1644px) {
    margin: 0;

   & .myBtn:not(:last-child) {
    margin: 0 0.1rem 0 0;
    padding: 0.1rem 0.4rem;

  }
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const DivDeux = styled.div`
  flex-wrap: wrap;
  margin-right: 2rem;
  display: flex;

  .myBtn:not(:first-child) {
    margin: 0 0 0 2rem;
  }
  @media all and (min-width: 1645px) {

  }
  @media all and (min-width: 1024px) and (max-width: 1644px) {
    margin: 0;

    .myBtn:not(:first-child) {
    margin: 0 0 0 0.1rem;
    padding: 0.1rem 0.3rem;
  }
  }
  @media all and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    display: none;
  }
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const Burger = styled.div`
margin: 0 2rem;
cursor: pointer;
color: ${colors.txt_white};
`;

const Close = styled.div`
margin: 0 2rem;
cursor: pointer;
color: ${colors.txt_white};
`;

function Header() {
  let url = document.location.href;
  let urldeux = url.replace(/\/$/, "");
  let TrueUrl = urldeux.substring(urldeux.lastIndexOf("/") + 1);
  const close = document.getElementById("close");


  let admin = false;
  const user = window.localStorage.getItem("user");

  if (user) {
    admin = JSON.parse(window.localStorage.getItem("user")).admin;
  }

  function burger() {
    close.classList.add("appear");
  }

  function deconnexion() {
    localStorage.clear();
    window.location.assign("/");
  }

  return (
    <Head>
      <Burger onClick={burger} id="open"> ||| </Burger>
      <Close id="close"> X </Close>
      <DivUne>
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
          link={"/film"}
          disabled={false}
          bg={TrueUrl === "film" ? colors.btn_blue : "none"}
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={colors.btn_blue}
          text="Film en VR"
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

        {!admin === true ? null : (
          <Btn
            link={"/backoffice"}
            disabled={false}
            bg={TrueUrl === "backoffice" ? colors.btn_blue : "none"}
            textcolor={colors.txt_white}
            bd="none"
            bdhover="none"
            bghover={colors.btn_blue}
            text="Back-Office"
          />
        )}
      </DivUne>

      <DivDeux>
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

        {!user === false ? null : (
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
        )}

        {!user === false ? null : (
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
        )}

        {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : !user ===
          true ? null : (
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

        {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : !user ===
          true ? null : (
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
      </DivDeux>
    </Head>
  );
}

export default Header;
