import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import { useState, useEffect } from "react";

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

  let quantite = document.getElementById("quantité");
  let nb = 0;
  localStorage.setItem ('ticket entrée musée', 0);


  function add(e) {
    nb += 1;
    let Qte = nb;

    if (Qte < 0) {
      nb = 0;
    } else {
      localStorage.setItem ('ticket entrée musée', Qte);
      quantite.innerHTML = Qte;
    }
    console.log(Qte);
  }

  function remove(e) {
    nb -= 1;
    let Qte = nb;

    if (Qte < 0) {
      nb = 0;
      Qte = 0;
    } else {
      localStorage.setItem ('ticket entrée musée', Qte);
      quantite.innerHTML = Qte;
    }
    console.log(Qte)
  }

  return (
    <Mydiv>
      <img src={props.src}></img>
      <p className="title"> {props.titre} </p>
      <p className="description"> {props.description} </p>
      <Input>
        <Btn
          onclick={(e) => add(e)}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={null}
          bdhover={colors.btn_blue}
          bghover={null}
          text="+"
        />
        <Box>
            <p id="quantité"> 0 </p>
        </Box>
        <Btn
          onclick={(e) => remove(e)}
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
    </Mydiv>
  );
}

export default Card;