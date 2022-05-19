import styled from "styled-components";
import colors, { totalTicket } from "../variables";
import Btn from "../button";
import { useState, useEffect } from "react";
import { updateTotal } from "../variables";

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
  margin: 1rem 0.5rem;
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
  var [Qte, setQte] = useState(0);
  var panier = JSON.parse(localStorage.getItem("panier"));

  // affiche la quantité que l'user à ajouter au panier
  const Initialize = () => {
    if (props.titre) {
      setQte(panier.items[props.mot_clé].qte);
    }
  };

  
  function addOne() {
    //récupére la valeur du panier
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (props.mot_clé) {
      //ajoute +1 et setItem pour "valider"
      setQte(Qte + 1);
      panier.items[props.mot_clé].qte += 1;
      localStorage.setItem("panier", JSON.stringify(panier));
    }
    props.setTotal(updateTotal())
    props.setTotalItems(totalTicket())
  }

  function removeOne() {
    //récupére la valeur du panier
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (props.mot_clé) {
      // permet de ne pas aller en dessous de 0
      if (Qte > 0) {
      //ajoute -1 et setItem pour "valider"
        setQte(Qte - 1);
        panier.items[props.mot_clé].qte -= 1;
        localStorage.setItem("panier", JSON.stringify(panier));
      }
    }
    props.setTotal(updateTotal())
    props.setTotalItems(totalTicket())

  }

  function removePanier() {
    //récupére la valeur du panier
    var panier = JSON.parse(localStorage.getItem("panier"));
    if (props.mot_clé) {
      // met le compteur à 0 et la valeur du panier à 0
      setQte(Qte = 0);
      panier.items[props.mot_clé].qte = 0;
      localStorage.setItem("panier", JSON.stringify(panier));
    }
    props.setTotal(updateTotal())
    props.setTotalItems(totalTicket())
  }

  useEffect(() => {
    Initialize();
  }, []);

  return (
    <Mydiv className={Qte === 0 && "grey"}>
      <img src={props.img} alt={props.titre}></img>
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
      <p className="price">{panier.items[props.mot_clé].prix * Qte}€ TTC</p>

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
