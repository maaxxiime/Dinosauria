import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
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
  margin: 1rem 0;
  & img {
    width: 5rem;
    margin: 1rem 0 1rem 0;
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

  & .btn {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    & .myBtn {
      margin: 0.2rem 0;
    }
  }

  & .modifieInput {
    margin: 1rem 0;
  }

  & .modifieInput input {
    margin: 1rem 0;
  }
`;

function BackOfficeCard(props) {
  const usertoken = JSON.parse(window.localStorage.getItem("user")).token;
  const [Edit, setEdit] = useState(false);
  const [Modified, setModified] = useState(false);

  function delete_product() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };
    axios
      .delete(apiurl + "/boutiques/" + props.id, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch(function (res) {
        console.log(res);
        console.log(props.id);
      });
  }

  function modifie() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };
    let titre = document.getElementById("titre");
    let description = document.getElementById("description");
    let prix = document.getElementById("prix");

    const bodyFormData = new FormData();
    titre.value && bodyFormData.append("titre", titre.value);
    description.value && bodyFormData.append("description", description.value);
    prix.value && bodyFormData.append("prix", prix.value);
    // && (si value est rempli => effectue le code)

    axios
      .put(apiurl + "/boutiques/" + props.id, bodyFormData, config)
      .then((res) => {
        console.log(res);
        setModified(true);
        setTimeout(window.location.reload(), 1000);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  return Edit ? (
    <Mydiv>
      <div className="btn">
        <Btn
          onclick={(e) => setEdit(false)}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={"DarkOrange"}
          bghover={"DarkOrange"}
          text="annuler"
        />
        <Btn
          onclick={() => modifie()}
          disabled={false}
          bg={Modified ? "green" : colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={colors.btn_blue}
          bghover={colors.btn_blue}
          text="modifier"
        />
        <Btn
          onclick={() => delete_product()}
          disabled={false}
          bg={colors.btn_red}
          textcolor={colors.txt_white}
          bd={colors.btn_red}
          bdhover={colors.btn_redhover}
          bghover={colors.btn_redhover}
          text="X"
        />
      </div>
      <div className="modifieInput">
        <input
          type="text"
          name="titre"
          id="titre"
          placeholder="titre"
          defaultValue={props.titre}
        ></input>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description"
          defaultValue={props.description}
        ></input>
        <input
          type="text"
          name="prix"
          id="prix"
          placeholder="prix"
          defaultValue={props.prix}
        ></input>
      </div>
    </Mydiv>
  ) : (
    <Mydiv>
      <Btn
        onclick={() => setEdit(true)}
        disabled={false}
        bg={colors.background_black}
        textcolor={colors.txt_white}
        bd="none"
        bdhover={colors.btn_blue}
        bghover={colors.background_black}
        text="edit"
        id="modifyBtn"
      />
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
