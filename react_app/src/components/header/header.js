import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";

const Head = styled.header`
  padding: 1.5rem 0;
  display: flex;
  width: 100%;
  background-color: ${colors.background_black};
  color: ${colors.txt_white};
`;

const DivUne = styled.div`
display: flex;
justify-content: space-around;
width: 65%;
`;

const DivDeux = styled.div`
display: flex;
justify-content: space-around;
width: 35%;
`;

function Header() {
  let url = document.location.href;
  let urldeux = url.replace(/\/$/, "");
  let TrueUrl = urldeux.substring(urldeux.lastIndexOf("/") + 1);

  const user = window.localStorage.getItem("user");

  function deconnexion() {
    localStorage.clear();
    window.location.assign("/");
  }

  return (
    <Head>
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


    {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : !user === true ? null :(
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

    {TrueUrl === "login" ? null : TrueUrl === "signup" ? null : !user === true ? null :(
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