import styled from "styled-components";
import { transparentize } from "polished";
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
  text-align: center;
  &.success {
    background-color: ${transparentize(0.85, "green")};
  }
  &.error {
    background-color: ${transparentize(0.85, "red")};
  }

  & p {
    margin: 1rem 0;
    font-size: 1rem;
  }
`;

const Maintitle = styled.h1`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;

  & .myBtn {
    text-align: center;
    margin: 1rem 0 0 0;
  }

  & label {
    color: ${colors.background_black};
    margin: 1rem 0 0 0;
    font-weight: bold;
  }

  & input {
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
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 25rem;
  }
`;

function Signup() {
  const [Filled, setFilled] = useState(false);
  const [Res, setRes] = useState(undefined);

  // si champ vide, desactive le bouton de création de compte, sinon ça l'active
  function checkValues() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let identifiant = document.getElementById("identifiant").value;

    if (email && password && identifiant) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function send() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let identifiant = document.getElementById("identifiant");

    const data = {
      email: email.value,
      password: password.value,
      identifiant: identifiant.value,
    };

    const config = {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(apiurl + "/users/signup", qs.stringify(data), config)
      .then((res) => {
        setRes(res.data.message);

        setTimeout(() => {
          window.location.assign("/login");
        }, 1500);
      })
      .catch((err) => {
        setRes(err.message);
      });
  }

  return (
    <MainSection id="main">
      <Maintitle>
        {" "}
        Créer votre compte dès maintenant pour pouvoir profiter du site à 100% !{" "}
      </Maintitle>

      <Form>
        <label for="email"> Email : </label>
        <input
          id="email"
          type="email"
          placeholder="monemail@gmail.com"
          name="email"
          required
          onChange={() => checkValues()}
        />

        <label for="identifiant"> Identifiant : </label>
        <input
          id="identifiant"
          type="text"
          placeholder="Patrickdu33"
          name="identifiant"
          required
          onChange={() => checkValues()}
        />

        <label for="password"> Mot de passe : </label>
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
            onclick={() => send()}
            disabled={!Filled}
            bgGradient={colors.btn_gradient}
            textcolor={colors.txt_white}
            bd={colors.blue1}
            bdhover={colors.blue2}
            bghover={colors.blue2}
            text="Créer le compte"
          />
        </div>

        {Res && (
          <div className="res">
            <p>{Res}</p>
          </div>
        )}
      </Form>
    </MainSection>
  );
}
export default Signup;
