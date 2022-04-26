import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import { useState } from "react";

// images
import musée from "../../assets/img/billet.png";
import cinéma from "../../assets/img/billet-de-cinema.png";
import campement from "../../assets/img/feu-de-camp.png";
import jardin from "../../assets/img/feuille-de-monstera.png";

const Mydiv = styled.div`
  width: 17rem;
  height: 20rem;
  border: 2px solid ${colors.txt_black};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin: 1rem 2rem;
  & img {
    width: 5rem;
    margin: 0 0 1rem 0;
  }

  & .title {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }

  & .description {
    margin: 0 0 1rem 0;
  }

  & .price {
    margin: 0 0 1rem 0;
  }

  & .absolute {
    position: absolute;
    bottom: -0.6rem;
  }
`;

const Input = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 1rem 0;
`;

const Box = styled.div`
  width: 3rem;
  height: 2rem;
  border-radius: 0.9rem;
  background-color: ${colors.btn_blue};
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    color: ${colors.txt_white};
    font-size: 1rem;
  }
`;

function Card(props) {
  const [Qte, setQte] = useState(0);

  var panier = JSON.parse(localStorage.getItem("panier"));

  function addOne() {
    if (props.titre === "Ticket d'entrée pour le muséum") {
      setQte(Qte + 1);
      panier.musée += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (props.titre === "Ticket d'entrée pour le film en VR") {
      setQte(Qte + 1);
      panier.cinéma += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (props.titre === "Ticket d'entrée pour le jardin") {
      setQte(Qte + 1);
      panier.jardin += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique"
    ) {
      setQte(Qte + 1);
      panier.campement += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else {
      console.log(Qte);
    }
  }

  function removeOne() {
    if (props.titre === "Ticket d'entrée pour le muséum") {
      setQte(Qte - 1);
      panier.musée -= 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (props.titre === "Ticket d'entrée pour le film en VR") {
      setQte(Qte - 1);
      panier.cinéma -= 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (props.titre === "Ticket d'entrée pour le jardin") {
      setQte(Qte - 1);
      panier.jardin -= 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique"
    ) {
      setQte(Qte - 1);
      panier.campement -= 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      window.location.reload();
    } else {
      console.log(Qte);
    }

    if (props.titre === "Ticket d'entrée pour le muséum" && panier.musée <= 0) {
      panier.musée = 0;
      localStorage.setItem("panier", JSON.stringify(panier));
    } else if (
      props.titre === "Ticket d'entrée pour le film en VR" &&
      panier.cinéma <= 0
    ) {
      panier.cinéma = 0;
      localStorage.setItem("panier", JSON.stringify(panier));
    } else if (
      props.titre === "Ticket d'entrée pour le jardin" &&
      panier.jardin <= 0
    ) {
      panier.jardin = 0;
      localStorage.setItem("panier", JSON.stringify(panier));
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique" &&
      panier.campement <= 0
    ) {
      panier.campement = 0;
      localStorage.setItem("panier", JSON.stringify(panier));
    }
  }

  function removePanier() {
    switch (props.titre) {
      case "Ticket d'entrée pour le muséum":
        panier.musée = 0;
        localStorage.setItem("panier", JSON.stringify(panier));
        break;

      case "Ticket d'entrée pour le film en VR":
        panier.cinéma = 0;
        localStorage.setItem("panier", JSON.stringify(panier));

        break;

      case "Ticket d'entrée pour le jardin":
        panier.jardin = 0;
        localStorage.setItem("panier", JSON.stringify(panier));

        break;

      case "Ticket d'entrée pour le campement du jurassique":
        panier.campement = 0;
        localStorage.setItem("panier", JSON.stringify(panier));

        break;

      default:
        console.log("défaut");
    }
    console.log(panier);
    window.location.reload();
  }

  return (
    <Mydiv>
      <img
        src={
          props.titre === "Ticket d'entrée pour le campement du jurassique"
            ? campement
            : props.titre === "Ticket d'entrée pour le film en VR"
            ? cinéma
            : props.titre === "Ticket d'entrée pour le jardin"
            ? jardin
            : props.titre === "Ticket d'entrée pour le muséum"
            ? musée
            : musée
        }
      ></img>
      <p className="title"> {props.titre} </p>
      <p className="description"> {props.description} </p>
      <Input>
        <Btn
          onclick={() => addOne()}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="+"
        />
        <Box>
          <p>
            {props.titre === "Ticket d'entrée pour le muséum"
              ? panier.musée
              : props.titre === "Ticket d'entrée pour le film en VR"
              ? panier.cinéma
              : props.titre === "Ticket d'entrée pour le jardin"
              ? panier.jardin
              : props.titre ===
                "Ticket d'entrée pour le campement du jurassique"
              ? panier.campement
              : 0}
          </p>
        </Box>
        <Btn
          onclick={() => removeOne()}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="-"
        />
      </Input>
      <p className="price">
        {props.titre === "Ticket d'entrée pour le muséum"
          ? panier.musée * 10
          : props.titre === "Ticket d'entrée pour le film en VR"
          ? panier.cinéma * 5
          : props.titre === "Ticket d'entrée pour le jardin"
          ? panier.jardin * 5
          : props.titre === "Ticket d'entrée pour le campement du jurassique"
          ? panier.campement * 15
          : 0}
        € TTC
      </p>

      <div className="absolute">
        <Btn
          onclick={() => removePanier()}
          disabled={false}
          bgGradient={colors.btn_gradient}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="Supprimer du panier"
        />
      </div>
    </Mydiv>
  );
}

export default Card;
