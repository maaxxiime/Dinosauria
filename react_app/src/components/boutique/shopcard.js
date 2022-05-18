import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import { useState } from "react";
import { updateTotal } from "../variables";

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
    margin: 0 0 1.5rem 0;
  }

  & .absolute {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -1rem;

    & .add-invisible {
      opacity: 0;
      transition-duration: 0.3s;
      font-weight: 500;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: ${colors.txt_white};
    }

    & .add-visible {
      opacity: 1;
      transition-duration: 0.5s;
      background-color: ${colors.add_panier};
      color: ${colors.txt_white};
      border-radius: 0.5rem;
    }
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
  var [Qte, setQte] = useState(0);

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

  function addPanier() {
    var panier = JSON.parse(localStorage.getItem("panier"));
    var add = document.getElementById("add" + props.id);
    add.classList.add("add-visible");

    setTimeout(() => {
      add.classList.remove("add-visible");
      add.classList.add("add-invisible");
    }, 1800);

    if (props.mot_clé) {
      panier.items[props.mot_clé].qte += Qte;
      localStorage.setItem("panier", JSON.stringify(panier));
      Qte = 0;
    }
    updateTotal()
  }

  return (
    <Mydiv>
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
        <p id={"add" + props.id} className="add-invisible">
          {" "}
          Produit ajouté !{" "}
        </p>
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
