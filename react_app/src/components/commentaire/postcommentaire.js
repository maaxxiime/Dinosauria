import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";

const MainDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin: 2rem 0;
  }

  & .myBtn {
    margin: 1rem 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    margin: 1rem 0;
  }

  & textarea {
      text-align: center;
      border-radius: 1rem;
  }
`;

function PostCommentaire() {
  const [Filled, setFilled] = useState(false);
  const [Res, setRes] = useState(undefined);
  const usertoken = JSON.parse(window.localStorage.getItem("user")).token;

  // si champ vide, desactive le bouton d'envoie du commentaire, sinon ça l'active
  function checkValues() {
    let commentaire = document.getElementById("commentaire").value;

    if (commentaire) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function send() {

    let commentaire = document.getElementById("commentaire");
    
    var data = {
      texte: commentaire.value,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    axios
      .post(
        apiurl + "/commentaires/postcommentaire",
        qs.stringify(data),
        config
      )
      .then((res) => {
        setRes(res.data.message);
        window.location.assign("/");
      })
      .catch((err) => {
        setRes(err.message);
      });
  }

  return (
    <MainDiv>
      <h1> Qu'avez vous aimé durant la visite ? </h1>

      <Form>
        <label for="commentaire"> Votre commentaire : </label>
        <textarea
          id="commentaire"
          onChange={() => checkValues()}
          placeholder="Ecrivez votre texte ici"
          rows={15}
          cols={60}
        >
        </textarea>
      </Form>

      <Btn
        onclick={() => send()}
        disabled={!Filled}
        bgGradient={colors.btn_gradient}
        textcolor={colors.txt_white}
        bd={colors.blue1}
        bdhover={colors.blue2}
        bghover={colors.blue2}
        text="Envoyer le commentaire"
      />
    </MainDiv>
  );
}

export default PostCommentaire;
