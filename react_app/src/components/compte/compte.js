import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";
import Card from "./comptecard";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DivInfos = styled.div`
  margin: 2rem 0;

  & h1 {
    margin: 1rem 0;
  }

  & h2 {
    margin: 0 0 1rem 0;
  }
`;
const DivModifie = styled.div`
  & input {
    margin: 1rem 0 2rem 0;
  }

  & .myBtn {
    margin: 1rem 1rem;
  }
  & form {
    @media all and (min-width: 480px) and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: center;
    }
    @media all and (max-width: 479px) {
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: center;
    }
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
  }
  @media all and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const DivCommentaires = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  width: 100%;
  & h2 {
    margin: 1rem 0;
  }
`;

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
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    axios
      .get(apiurl + "/commentaires/compte/", config)
      .then((res) => {
        setComCard(res.data.commentaire);
        console.log(ComCard);
        console.log(res.data.commentaire);
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
      <DivInfos>
        <h1> Mon compte </h1>
        <h2> Mes informations </h2>
        <p> {email} </p>
        <p> Vous avez posté {ComCard && ComCard.length} commentaires</p>
      </DivInfos>

      <DivModifie>
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
        </form>
        <Btn
          onclick={() => modifie()}
          disabled={null}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={colors.btn_blue}
          bghover={colors.btn_blue}
          text="modifier mon compte"
        />
        <Btn
          onclick={() => delet()}
          disabled={null}
          bg={colors.background_black}
          textcolor={colors.txt_white}
          bd={colors.background_black}
          bdhover={colors.btn_redhover}
          bghover={colors.btn_redhover}
          text="Supprimer mon compte"
        />
      </DivModifie>

      <DivCommentaires>
        <h2>Mes commentaires</h2>

        {ComCard && (
          <div className="container">
            {ComCard.map((commentaires) => (
              <Card
                texte={commentaires.texte}
                date={commentaires.createdAt}
                id={commentaires._id}
              />
            ))}
          </div>
        )}
      </DivCommentaires>
    </Section>
  );
}

export default Compte;
