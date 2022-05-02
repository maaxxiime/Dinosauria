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

  & div {
    display: flex;
    justify-content: center;
    width: 25rem;
  }
`;

function Signup() {
  const [Filled, setFilled] = useState(false);
  const [Res, setRes] = useState(undefined);

  function checkValues(e) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let identifiant = document.getElementById("identifiant").value;

    if (email && password && identifiant) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function send(e) {
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
        Créer votre compte dés maitenant pour pouvoir profiter du site à 100% !{" "}
      </Maintitle>

      <Form>
        <label for="email"> Email : </label>
        <input
          id="email"
          type="email"
          placeholder="monemail@gmail.com"
          name="email"
          required
          onChange={(e) => checkValues(e)}
        />

        <label for="identifiant"> Identifiant : </label>
        <input
          id="identifiant"
          type="text"
          placeholder="Patrickdu33"
          name="identifiant"
          required
          onChange={(e) => checkValues(e)}
        />

        <label for="password"> Mot de passe : </label>
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
