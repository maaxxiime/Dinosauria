import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import { useState, useEffect } from "react";

// images
import musée from "../../assets/img/billet.png";
import cinéma from "../../assets/img/billet-de-cinema.png";
import campement from "../../assets/img/feu-de-camp.png";
import jardin from "../../assets/img/feuille-de-monstera.png";

const Mydiv = styled.div`
  &.grey {
    filter: grayscale(1);
  }
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

  const getPrice = () => {
    let p =
      props.titre === "Ticket d'entrée pour le muséum"
        ? Qte * 10
        : props.titre === "Ticket d'entrée pour le film en VR"
        ? Qte * 5
        : props.titre === "Ticket d'entrée pour le jardin"
        ? Qte * 5
        : props.titre === "Ticket d'entrée pour le campement du jurassique"
        ? Qte * 15
        : 0;
    return p;
  };

  const getTotal = () => {
    let p = JSON.parse(localStorage.getItem("panier"));
    var t = p.cinéma * 5 + p.jardin * 5 + p.musée * 10 + p.campement * 15;
    props.setTotal(t);
  };

  const Initialize = () => {
    var panier1 = JSON.parse(localStorage.getItem("panier"));
    getTotal();
    if (props.titre === "Ticket d'entrée pour le muséum") {
      setQte(panier1.musée);
    } else if (props.titre === "Ticket d'entrée pour le film en VR") {
      setQte(panier1.cinéma);
    } else if (props.titre === "Ticket d'entrée pour le jardin") {
      setQte(panier1.jardin);
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique"
    ) {
      setQte(panier1.campement);
    }
  };

  function addOne() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (props.titre === "Ticket d'entrée pour le muséum") {
      setQte(Qte + 1);
      panier.musée += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      getTotal();
    } else if (props.titre === "Ticket d'entrée pour le film en VR") {
      setQte(Qte + 1);
      panier.cinéma += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      getTotal();
    } else if (props.titre === "Ticket d'entrée pour le jardin") {
      setQte(Qte + 1);
      panier.jardin += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      getTotal();
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique"
    ) {
      setQte(Qte + 1);
      panier.campement += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
      getTotal();
    }
  }

  function removeOne() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (props.titre === "Ticket d'entrée pour le muséum") {
      if (Qte > 0) {
        setQte(Qte - 1);
        panier.musée -= 1;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
      }
    } else if (props.titre === "Ticket d'entrée pour le film en VR") {
      if (Qte > 0) {
        setQte(Qte - 1);
        panier.cinéma -= 1;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
      }
    } else if (props.titre === "Ticket d'entrée pour le jardin") {
      if (Qte > 0) {
        setQte(Qte - 1);
        panier.jardin -= 1;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
      }
    } else if (
      props.titre === "Ticket d'entrée pour le campement du jurassique"
    ) {
      if (Qte > 0) {
        setQte(Qte - 1);
        panier.campement -= 1;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
      }
    }
  }

  function removePanier() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    switch (props.titre) {
      case "Ticket d'entrée pour le muséum":
        panier.musée = 0;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
        break;

      case "Ticket d'entrée pour le film en VR":
        panier.cinéma = 0;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
        break;

      case "Ticket d'entrée pour le jardin":
        panier.jardin = 0;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
        break;

      case "Ticket d'entrée pour le campement du jurassique":
        panier.campement = 0;
        localStorage.setItem("panier", JSON.stringify(panier));
        getTotal();
        break;

      default:
        console.log("défaut");
    }
    console.log(panier);
    window.location.reload();
  }

  useEffect(() => {
    Initialize();
  }, []);

  return (
    <Mydiv className={Qte === 0 && "grey"}>
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
          <p>{Qte}</p>
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
      <p className="price">{Qte && getPrice()}€ TTC</p>

      <div className="absolute">
        <Btn
          onclick={() => removePanier()}
          disabled={false}
          bgGradient={colors.btn_gradient}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="Supprimer ce produit"
        />
      </div>
    </Mydiv>
  );
}

export default Card;
