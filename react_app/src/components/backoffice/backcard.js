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

function BackOfficeCard(props) {

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
        <p className="price"> {props.prix} € TTC</p>
      </Mydiv>
    );
}

export default BackOfficeCard;