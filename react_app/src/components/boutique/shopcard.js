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
  position: relative;

  & p {
    color: ${colors.txt_white};
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    &.appear {
      animation: appear 150ms ease-in-out forwards;
      @keyframes appear {
        from {
          top: -2rem;
        }
        to {
          top: 50%;
        }
      }
    }

    &.disappear {
      animation: disappear 150ms ease-in-out forwards;
      @keyframes disappear {
        from {
          top: 50%;
        }
        to {
          top: 3rem;
        }
      }
    }
  }
`;

function Card(props) {
  const [Qte, setQte] = useState(0);
  let qte = document.getElementById("qte-" + props.id);

  function addOne() {
    qte.classList.add("disappear");
    setTimeout(() => {
      setQte(Qte + 1);
      qte.classList.remove("disappear");
    }, 100);
  }

  function removeOne() {
    if (Qte > 0) {
      qte.classList.add("disappear");
      setTimeout(() => {
        setQte(Qte - 1);
        qte.classList.remove("disappear");
      }, 100);
    }
  }

  console.log(Qte);

  function addPanier() {
    var panier = JSON.parse(localStorage.getItem("panier"));

    switch (props.titre) {
      case "Ticket d'entrée pour le muséum":
        panier.musée += Qte;
        localStorage.setItem("panier", JSON.stringify(panier));
        Qte = 0;
        break;

      case "Ticket d'entrée pour le film en VR":
        panier.cinéma += Qte;
        localStorage.setItem("panier", JSON.stringify(panier));
        Qte = 0;

        break;

      case "Ticket d'entrée pour le jardin":
        panier.jardin += Qte;
        localStorage.setItem("panier", JSON.stringify(panier));
        Qte = 0;

        break;

      case "Ticket d'entrée pour le campement du jurassique":
        panier.campement += Qte;
        localStorage.setItem("panier", JSON.stringify(panier));
        Qte = 0;

        break;

      default:
        console.log("défaut");
    }
    console.log(panier);
    // window.location.reload()
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
          <p id={"qte-" + props.id} className="appear">
            {" "}
            {Qte}{" "}
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
      <p className="price"> {props.prix} € TTC</p>

      <div className="absolute">
        <Btn
          onclick={() => addPanier()}
          disabled={false}
          bgGradient={colors.btn_gradient}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="Ajouter au panier"
        />
      </div>
    </Mydiv>
  );
}

export default Card;
