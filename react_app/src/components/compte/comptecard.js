import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";

import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Mydiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  & .DivText {
    border: 2px solid ${colors.background_black};
    border-radius: 1.5rem;
    width: 90%;
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
  const usertoken = JSON.parse(window.localStorage.getItem("user")).token;

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

  function delete_commentaire() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };
    axios
    //envoi l'id du commentaire et le token pour comparer l'id du createur du commentaire et celui du token
      .delete(apiurl + "/commentaires/" + props.id, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch(function (res) {
        console.log(res);
        console.log(props.id);
      });
  }

  return (
    <Mydiv>
      <div className="DivText">
        <Btn
        onclick={() => delete_commentaire()}
        disabled={null}
        bg={colors.btn_red}
        textcolor={colors.txt_white}
        bd={colors.btn_red}
        bdhover={colors.btn_redhover}
        bghover={colors.btn_redhover}
        icon={faTrash}

        />
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