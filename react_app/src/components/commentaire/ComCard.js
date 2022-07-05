import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import { useState, useEffect } from "react";

const Mydiv = styled.div`
  & .DivText {
    border: 2px solid ${colors.background_black};
    border-radius: 1.5rem;
    width: 40rem;
    height: auto;
    margin: 1rem 0;
    text-align: center;

    & .content {
      color: ${colors.txt_black};
      font-size: 1rem;
      margin: 1rem 1rem;
      word-wrap: break-word;
    }

    & .myBtn {
      margin: 0.2rem 0.2rem 0 0;
      float: right;
    }
  }
`;

const Foot = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    margin: 0 2rem;
    opacity: 0.5;
  }
`;

function Card(props) {
  // ajoute la date de création du commentaire
  function formatDate(str) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const d = new Date(str);
    const date = d.toLocaleDateString("fr-FR", options);
    return date;
  }
  return (
    <Mydiv>
      <div className="DivText">
        <p className="content">{props.texte}</p>
        <Foot>
          <p> {props.identifiant} </p>
          <p> {formatDate(props.date)} </p>
        </Foot>
      </div>
    </Mydiv>
  );
}

export default Card;
