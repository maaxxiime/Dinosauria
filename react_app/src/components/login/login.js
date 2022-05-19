import styled from "styled-components";
import {transparentize} from "polished";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  &.success {
    background-color: ${transparentize(0.85, "green")};
  }
  &.error {
    background-color: ${transparentize(0.85, "red")};
  }

  & p {
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 500;
  }
  & div {
    display: flex;
    width: 26rem;
    justify-content: space-around;
  }
`;

const Maintitle = styled.h1`
  display: flex;
  flex-direction: column;
  color: ${colors.background_black};
  margin: 1.5rem auto;
  width: 90%;
  max-width: 500px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.4rem;
    left: 0.2rem;
    width: 90%;
    max-width: 30rem;
    height: 2px;
    background-color: ${colors.background_black};
  }
`;

const Form = styled.form`
  margin: 1.5rem auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  & .myBtn {
    margin: 1rem 0 0 0;
  }

  & label {
    color: ${colors.background_black};
    margin: 1rem 0 0 0;
    font-weight: bold;
  }

  & input {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0.5rem 0 1rem 0;
    padding: 0.2rem 0;
    font-size: 1rem;
    height: 1.4rem;
    width: 90%;
    max-width: 400px;
    border: none;
    border-bottom: 2px solid ${colors.btn_blue};
    background-color: ${colors.background_white};
    color: ${colors.txt_black};
    font-size: 0.8rem;
    ::placeholder {
      color: ${colors.txt_black};
      font-size: 0.8rem;
    }
    :focus {
      outline: none;
    }
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Login() {
  const [Filled, setFilled] = useState(false);
  const [Res, setRes] = useState(undefined);
  const [Log, setLog] = useState(false);

  // si user est deja connecté, alors affiche une page pour lui dire qu'il est deja connecté
  useEffect(() => {
    function checkLogin() {
      const user = window.localStorage.getItem("user");
      if (user) {
        setLog(true);
      }
    }
    checkLogin();
  }, [Log]);

  // si champ vide, desactive le bouton de connexion, sinon ça l'active
  function checkValues() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function send() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    const data = {
      email: email.value,
      password: password.value,
    };

    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(apiurl + "/users/login", qs.stringify(data), config)
      .then((res) => {
        const user = {
          userId: res.data.userId,
          token: res.data.token,
          email: res.data.user,
          admin: res.data.admin,
        };
        // assign l'userId, le token, l'email et admin(true/false) dans le local storage sous la clé "user"
        window.localStorage.setItem("user", JSON.stringify(user));
        setRes(res.data.message);
        document.querySelector("#main").classList.remove("error");
        document.querySelector("#main").classList.add("success");
        window.location.assign("/");
      })
      .catch((err) => {
        setRes(err.message);
        document.querySelector("#main").classList.add("error");
      });
  }

  return Log ? (
    <MainSection>
      <Maintitle> Connexion </Maintitle>
      <p> Vous êtes deja connecté </p>
      <Btn
        link="/"
        disabled={false}
        bg={colors.blue1}
        textcolor={colors.textwhite}
        bd={colors.blue1}
        bdhover={colors.blue2}
        bghover={colors.blue2}
        text="Retour à l'accueil"
      />
    </MainSection>
  ) : (
    <MainSection id="main">
      <Maintitle>
        Pensez à créer un compte si cela n'est pas deja fait !
        <p> Connectez vous pour profiter du site à 100% </p>
      </Maintitle>

      <Form>
        <label for="email">Email :</label>
        <input
          id="email"
          type="email"
          placeholder="monemail@gmail.com"
          name="email"
          required
          onChange={() => checkValues()}
        />

        <label for="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          placeholder="monSuperMdp@54"
          name="password"
          required
          onChange={() => checkValues()}
        />

        <div>
          <Btn
            onclick={(e) => send(e)}
            disabled={!Filled}
            bgGradient={colors.btn_gradient}
            textcolor={colors.txt_white}
            bd={null}
            bdhover={colors.btn_blue}
            bghover={null}
            text="Se connecter"
          />

          <Btn
            link="/signup"
            disabled={false}
            bgGradient={colors.btn_gradient}
            textcolor={colors.txt_white}
            bd={null}
            bdhover={colors.btn_blue}
            bghover={null}
            text="Créer un compte"
          />
        </div>
      </Form>
    </MainSection>
  );
}

export default Login;
