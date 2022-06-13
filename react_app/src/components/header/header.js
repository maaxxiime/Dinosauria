import styled from "styled-components";
import colors, { updateTotal } from "../variables";
import Btn from "../button";
import { useEffect, useState } from "react";



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
  @media all and (min-width: 1023px) and (max-width: 1644px) {
    font-size: 0.8rem;
    & #open {
      display: none;
    }
  }
`;

const DivUne = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
  .myBtn:not(:last-child) {
    margin: 0 2rem 0 0;
  }
  @media all and (min-width: 1023px) and (max-width: 1644px) {
    margin: 0 0 0 1rem;

    & .myBtn:not(:last-child) {
      margin: 0 0.3rem 0 0;
      padding: 0.1rem 0.4rem;
    }
  }
  @media all and (min-width: 767px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (min-width: 479px) and (max-width: 767px) {
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
  position: relative;

  .myBtn:not(:first-child) {
    margin: 0 0 0 2rem;
  }
  @media all and (min-width: 1023px) and (max-width: 1644px) {
    margin: 0 1rem 0 0;

    .myBtn:not(:first-child) {
      margin: 0 0 0 0.3rem;
      padding: 0.1rem 0.3rem;
    }
  }
  @media all and (min-width: 767px) and (max-width: 1023px) {
    display: none;
  }
  @media all and (min-width: 479px) and (max-width: 767px) {
    display: none;
  }
  @media all and (max-width: 479px) {
    display: none;
  }
`;

const Burger = styled.div`
  z-index: 110;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
  & .barre {
    &-haut {
      transition: all 300ms ease-in-out;
      background-color: white;
      width: 100%;
      height: 2px;
      transform-origin: left;
      &.open {
        transform: rotate(45deg);
      }
    }
    &-milieu {
      transition: all 400ms ease-in-out;
      background-color: white;
      width: 100%;
      height: 2px;
      &.open {
        transform: translateX(-50%);
        opacity: 0;
      }
    }
    &-bas {
      transition: all 300ms ease-in-out;
      background-color: white;
      width: 100%;
      height: 2px;
      transform-origin: left;
      &.open {
        transform: rotate(-45deg);
      }
    }
  }
  margin: 0 2rem;
  cursor: pointer;
  color: ${colors.txt_white};
`;

const Close = styled.div`
  width: 100%;
  margin: 0.5rem 0 0 0;
  cursor: pointer;
  color: ${colors.txt_white};

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  & p:hover {
    background-color: ${colors.btn_blue};
  }
`;

const MenuDeroulant = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: ${colors.background_black};
  text-align: center;
  transform-origin: bottom;
  transition: all 400ms ease-in-out;
  &.open {
    transform: translateY(0);
  }
  &.close {
    transform: translateY(-120vh);
  }

  & .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  & .myBtn {
    display: flex;
    width: 100%;
    padding: 1rem 0;
    border-radius: 0;
    justify-content: center;
    position: relative;
    &:focus {
      &:after {
        content: "";
        position: absolute;
        top: 70%;
        left: 0%;
        width: 5rem;
        height: 0.1rem;
        background-color: white;
        transform: translateX(-10vw);
        animation: line 300ms ease-in-out forwards;
        @keyframes line {
          to {
            transform: translateX(110vw);
          }
        }
      }
    }
  }
`;

function Header(props) {
  let url = document.location.href;
  let urldeux = url.replace(/\/$/, "");
  let TrueUrl = urldeux.substring(urldeux.lastIndexOf("/") + 1);
  // state pour le menu burger
  const [MenuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(window.localStorage.getItem("user"));

  // si admin est true alors la page back-office se débloque
  if (user) {
    var Admin = JSON.parse(window.localStorage.getItem("user")).admin;
  }
  

  function deconnexion() {
    localStorage.clear();
    window.location.assign("/");
  }

  return (
    <>
      <Head>      
        <Burger onClick={() => setMenuOpen(!MenuOpen)} id="open">
          <div className={MenuOpen ? "barre-haut open" : "barre-haut"} />
          <div className={MenuOpen ? "barre-milieu open" : "barre-milieu"} />
          <div className={MenuOpen ? "barre-bas open" : "barre-bas"} />
        </Burger>
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
            text="Salle des Herbivores"
          />

          <Btn
            link={"/carnivore"}
            disabled={false}
            bg={TrueUrl === "carnivore" ? colors.btn_blue : "none"}
            textcolor={colors.txt_white}
            bd="none"
            bdhover="none"
            bghover={colors.btn_blue}
            text="Salle des Carnivores"
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
            text="Campement du Jurassique"
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

          {!Admin === true ? null : (
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
              text={props.TotalItems ? "Panier" + " " + props.TotalItems : "Panier" + " " + 0}
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
              text="Déconnexion"
            />
          )}
        </DivDeux>
      </Head>

      <MenuDeroulant className={MenuOpen ? "open" : "close"}>
        <div className="container">
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

          {!Admin === true ? null : (
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
              text={props.TotalItems ? "Panier" + " " + props.TotalItems : "Panier" + " " + 0}
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
              text="Déconnexion"
            />
          )}

          <Close onClick={() => setMenuOpen(!MenuOpen)} id="close">
            <p> X </p>{" "}
          </Close>
        </div>
      </MenuDeroulant>
    </>
  );
}

export default Header;
