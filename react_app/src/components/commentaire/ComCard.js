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
    height: 7rem;
    margin: 1rem 0;
    text-align: center;
}
`;

const Text = styled.p`
color: ${colors.txt_black};
font-size: 1rem;
margin: 1rem 0 0 0;
`;

function Card(props) {

  return (
    <Mydiv>
      <div className="DivText">
        <Text className="content">{props.texte}</Text>
      </div>
    </Mydiv>
  );
}

export default Card;