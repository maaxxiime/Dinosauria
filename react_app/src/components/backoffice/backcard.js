import styled from "styled-components";
import colors from "../variables";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import { useState } from "react";

import {
  faPen,
  faTrash,
  faArrowLeft,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

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
    align-items: center;

    & .myBtn {
      margin: 0.2rem 0.6rem;
    }
  }

  & .modifieInput {
    margin: 0.5rem;
  }

  & .modifieInput input {
    text-align: center;
    margin: 1rem 0;
  }
`;

function BackOfficeCard(props) {
  const usertoken = JSON.parse(window.localStorage.getItem("user")).token;
  //state pour passer en mode edit ou non
  const [Edit, setEdit] = useState(false);

  function delete_product() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };
    axios
      // récupére l'id de la card et le token via la config
      .delete(apiurl + "/boutiques/" + props.id, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch(function (res) {
        console.log(res);
        console.log(props.id);
      });
      localStorage.removeItem("panier")

  }

  function modifie() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    let titre = document.getElementById("titre");
    let Mot_clé = document.getElementById("Mot_clé");
    let description = document.getElementById("description");
    let prix = document.getElementById("prix");
    let image = document.getElementById("boutiqueImage");

    const bodyFormData = new FormData();
    // && (si la value est rempli => effectue le code)
    titre.value && bodyFormData.append("titre", titre.value);
    Mot_clé.value && bodyFormData.append("mot_clé", Mot_clé.value);
    description.value && bodyFormData.append("description", description.value);
    prix.value && bodyFormData.append("prix", prix.value);
    image.files[0] && bodyFormData.append("boutiqueImage", image.files[0]);

    axios
      // récupére l'id de la card, le token via la config et les informations rentré dans chaque input
      .put(apiurl + "/boutiques/" + props.id, bodyFormData, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((res) => {
        console.log(res);
      });
  }
  // si en mode edit affiche le code si après
  return Edit ? (
    <Mydiv>
      <div className="btn">
        <Btn
          onclick={(e) => setEdit(false)}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={colors.btn_blue}
          icon={faArrowLeft}
        />
        <Btn
          onclick={() => modifie()}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={colors.add_panier}
          icon={faCheck}
        />
        <Btn
          onclick={() => delete_product()}
          disabled={false}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd="none"
          bdhover="none"
          bghover={colors.btn_redhover}
          icon={faTrash}
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
          name="Mot_clé"
          id="Mot_clé"
          placeholder="Mot_clé"
          defaultValue={props.mot_clé}
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

        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          name="boutiqueImage"
          id="boutiqueImage"
        ></input>
      </div>
    </Mydiv>
  ) : (
    // sinon affiche ce code
    <Mydiv>
      <Btn
        onclick={() => setEdit(true)}
        disabled={false}
        bg={colors.background_black}
        textcolor={colors.txt_white}
        bd="none"
        bdhover="none"
        bghover={colors.btn_blue}
        icon={faPen}
        id="modifyBtn"
      />
      <img src={props.img} alt={props.titre}></img>
      <p className="title"> {props.titre} </p>
      <p className="description"> {props.description} </p>
      <p className="price"> {props.prix} € TTC</p>
    </Mydiv>
  );
}

export default BackOfficeCard;
