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
  position: relative;

  .appear {
    opacity: 1;
    transform: translate(0%,50%);
  }

  .close_modale {
    opacity: 0;
  }
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

  & .btn-delet {
    border: none;
    background-color: ${colors.background_black};
    color: ${colors.txt_white};
    width: 11rem;
    height: 1.9rem;
    border-radius: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  & .btn-delet:hover {
    background-color: ${colors.btn_redhover};
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

const Modale = styled.div`
transition: 0.5s;
position: absolute;
transform: translate(0%,-20%);
color: ${colors.txt_white};
border: 1px solid ${colors.background_black};
border-radius: 1.2rem;
width: 25rem;
height: 20rem;
background-color: ${colors.background_black};
box-shadow: 0 0 10px ${colors.background_black};

& h2 {
  margin: 1rem 0 1rem 0;
}
& h3 {
  margin: 2rem 0 1rem 0;
}

& .close {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  color: ${colors.txt_white};
  background-color: ${colors.btn_red};
  border: none;
  transition: 0.3s;
  cursor: pointer;
}
& .close:hover {
  transition: 0.5s;
  background-color: ${colors.btn_redhover};
}
& .myBtn {
  position: absolute;
  bottom: 10%;
  left: 25%;
}
`;

function Compte() {
  const [ComCard, setComCard] = useState(null);
  const user = window.localStorage.getItem("user");
  let userJson = JSON.parse(user);
  let email = userJson.email;
  let UserId = userJson.userId;
  let usertoken = userJson.token;
  const modale = document.getElementById("modale")

  
  
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
    // envoi l'userId, la data et le usertoken pour pouvoir comparer l'id du token et l'userId
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

  function appear_modale() {
    modale.classList.remove("close_modale");
    modale.classList.add("appear");
  }
  
  function close() {
    modale.classList.remove("appear");
    modale.classList.add("close_modale");
  }

  
  function delet() {
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };

    axios
      // envoi l'userId et le usertoken pour pouvoir comparer l'id du token et l'userId

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
      // envoi le usertoken pour pouvoir récupérer les commentaires de l'id correspondant au token
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
      <Modale id="modale" className="close_modale">
        <h2> Supprimer votre compte ? </h2>
        <h3> Si vous supprimez votre compte, cela sera irréversible </h3>
        <Btn
          onclick={() => delet()}
          disabled={null}
          bg={colors.btn_blue}
          textcolor={colors.txt_white}
          bd={colors.btn_blue}
          bdhover={colors.btn_redhover}
          bghover={colors.btn_redhover}
          text="Supprimer mon compte"
        />
        <button className="close" onClick={() => close()}> X </button>
      </Modale>
      <DivInfos>
        <h1> Mon compte </h1>
        <h2> Mes informations </h2>
        <p> {email} </p>
        <p> Vous avez posté {ComCard && ComCard.length} commentaires</p>
      </DivInfos>

      <DivModifie>
        <h2> Modifier mon compte </h2>

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
            placeholder="monSuperNouveauMdp@54"
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
        <button onClick={() => appear_modale()} className="btn-delet myBtn">
          Supprimer le compte
        </button>
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
