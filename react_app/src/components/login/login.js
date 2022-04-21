import styled from "styled-components";
import { transparentize, darken } from "polished";
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
  margin: 0 auto;
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
  color: ${colors.background_black};
  margin: 1.5rem auto;
  width: 100%;
  max-width: 500px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.4rem;
    left: 0.2rem;
    width: 30rem;
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

  & .myBtn {
    margin: 1rem 0 0 0;
  }

  & label {
    color: ${colors.background_black};
    margin: 1rem 0 0 1rem;
    font-weight: bold;
  }

  & input {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 1rem 0;
    padding: 0.2rem 1rem;
    font-size: 1rem;
    height: 1.4rem;
    width: calc(100% - 2rem);
    max-width: 400px;
    border: 2px solid ${colors.btn_blue};
    border-radius: 20px;
    background-color: ${colors.background_black};
    color: ${colors.txt_white};
    font-size: 0.8rem;
    ::placeholder {
      color: ${colors.txt_white};
      font-size: 0.8rem;
    }
  }
`;

function Login() {
  const [Filled, setFilled] = useState(false);
  const [Res, setRes] = useState(undefined);
  const [Log, setLog] = useState(false);

  useEffect(() => {
    function checkLogin() {
      const user = window.localStorage.getItem("user");
      if (user) {
        setLog(true);
      }
    }
    checkLogin();
  }, [Log]);

  function checkValues(e) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function send(e) {
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
        };
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
      <Maintitle> Pensez à créer un compte si cela n'est pas deja fait ! </Maintitle>
      <p> Connectez vous pour profiter du site à 100% </p>

      <Form>
        <label for="email">Email :</label>
        <input
          id="email"
          type="email"
          placeholder="monemail@gmail.com"
          name="email"
          required
          onChange={(e) => checkValues(e)}
        />

        <label for="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          placeholder="monSuperMdp@54"
          name="password"
          required
          onChange={(e) => checkValues(e)}
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
