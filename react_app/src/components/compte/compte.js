import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";
import Card from "../commentaire/ComCard.js";

const Section = styled.section``;

function Compte() {
  const [ComCard, setComCard] = useState(null);
  const user = window.localStorage.getItem("user");
  let userJson = JSON.parse(user);
  let email = userJson.email;
  let UserId = userJson.userId;
  let usertoken = userJson.token;

  function modifie() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let newpassword = document.getElementById("newpassword");

    const data = {
      email: email.value,
      oldpassword: password.value,
      password: newpassword.value,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    axios
      .put(apiurl + "/users/" + UserId, qs.stringify(data), config)
      .then((res) => {
        const user = {
          userId: res.data.userId,
          token: res.data.token,
          email: res.data.user,
        };
        window.localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function delet() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    axios
      .delete(apiurl + "/users/" + UserId, config)
      .then((res) => {
        localStorage.clear();
        window.location.assign("/");
        res.status();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getcommentaire() {
    
    axios
      .get(apiurl + "/commentaires/compte/" + UserId)
      .then((res) => {
        console.log(res);
        setComCard(res.data.commentaires);
        console.log(ComCard);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getcommentaire();
  }, []);

  return (
    <Section>
      <h1>
        {" "}
        Faire un populate dans api pour récuperer commentaire user (comme pour
        récuperer le pseudo des commentaires){" "}
      </h1>

      <div>
        <h2> Mes informations </h2>
        <p> {email} </p>
        <p> Vous avez posté (nombre commentaires) commentaires</p>
      </div>

      <div>
        <h2> Modifier mes informations </h2>

        <form>
          <label for="email"> Email : </label>
          <input
            id="email"
            type="email"
            placeholder={email}
            name="email"
            required="false"
          />

          <label for="password"> Mot de passe : </label>
          <input
            id="password"
            type="password"
            placeholder="monSuperMdp@54"
            name="password"
            required="false"
          />

          <label for="password"> Nouveau mot de passe : </label>
          <input
            id="newpassword"
            type="password"
            placeholder="monSuperMdp@54"
            name="newpassword"
            required="false"
          />

          <Btn
            onclick={() => modifie()}
            disabled={null}
            bg={colors.background_black}
            textcolor={colors.txt_white}
            bd={colors.background_black}
            bdhover={colors.btn_blue}
            bghover={colors.btn_blue}
            text="modifer"
          />
        </form>
        <Btn
          onclick={() => delet()}
          disabled={null}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={colors.btn_blue}
          bghover={colors.btn_blue}
          text="Supprimer mon compte"
        />
      </div>

      <div>
        <h1>Mes commentaires</h1>

        {ComCard && (
          <div className="container">
            {ComCard.map((commentaires) => (
              <Card
                texte={commentaires.texte}
                date={commentaires.createdAt}
                identifiant={commentaires.creatorId.identifiant}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default Compte;
