import axios from "axios";
import { apiurl } from "../variables";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BackOfficeCard from "./backcard";
import colors from "../variables.js";
import Btn from "../button";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.txt_black};
  text-align: center;
`;

const Header = styled.div`
  margin: 1rem;

  & h1 {
    margin: 0 0 1rem 0;
  }

  & p {
    font-size: 0.9rem;
  }
`;

const DivCreate = styled.div`
  & h2 {
    margin: 0 0 1rem 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      margin: 0.5rem;
    }

    & .myBtn {
      margin: 1rem 0 0 0;
    }
  }
`;

const DivCard = styled.div``;

function BackOffice() {
  const [ShopCard1, setShopCard1] = useState(null);
  const [ShopCard2, setShopCard2] = useState(null);

  function getboutiques() {
    axios
      .get(apiurl + "/boutiques/")
      .then((res) => {
        console.log(res);
        setShopCard1(res.data.product.slice(0, 2));
        setShopCard2(res.data.product.slice(2));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function créer() {
    const usertoken = JSON.parse(window.localStorage.getItem("user")).token;

    let titre = document.getElementById("Titre");
    let description = document.getElementById("Description");
    let prix = document.getElementById("Prix");
    let image = document.getElementById("boutiqueImage");

    const bodyFormData = new FormData();
    titre.value && bodyFormData.append("titre", titre.value);
    description.value && bodyFormData.append("description", description.value);
    prix.value && bodyFormData.append("prix", prix.value);
    image.files[0] && bodyFormData.append("boutiqueImage", image.files[0]);
    // && (si value est rempli => effectue le code)

    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(apiurl + "/boutiques/", bodyFormData, config)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    getboutiques();
  }, []);

  return (
    <Section>
      <Header>
        <h1> Back-Office </h1>
        <p className="low-title">
          Créer, modifier ou supprimer des produits à volonté !
        </p>
      </Header>

      <DivCreate>
        <h2> Créer un produit </h2>
        <form>
          <label for="titre"> titre </label>
          <input
            type="texte"
            id="Titre"
            placeholder="titre"
            name="titre"
          ></input>

          <label for="description"> description </label>
          <input
            type="texte"
            id="Description"
            placeholder="description"
            name="description"
          ></input>

          <label for="prix"> prix </label>
          <input type="texte" id="Prix" placeholder="prix" name="prix"></input>

          <label for="boutiqueImage"> Choisir une image </label>
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            name="boutiqueImage"
            id="boutiqueImage"
          ></input>

          <Btn
            onclick={() => créer()}
            disabled={false}
            bg={colors.background_black}
            textcolor={colors.txt_white}
            bd={colors.background_black}
            bdhover={colors.btn_blue}
            bghover={colors.btn_blue}
            text="créer le produit"
          />
        </form>
      </DivCreate>

      <DivCard>
        {ShopCard2 && (
          <div className="container">
            <div className="container-top">
              {ShopCard1.map((boutiques) => (
                <BackOfficeCard
                  key={boutiques._id}
                  id={boutiques._id}
                  titre={boutiques.titre}
                  description={boutiques.description}
                  prix={boutiques.prix}
                />
              ))}
            </div>
            <div className="container-bottom">
              {ShopCard2.map((boutiques) => (
                <BackOfficeCard
                  key={boutiques._id}
                  id={boutiques._id}
                  titre={boutiques.titre}
                  description={boutiques.description}
                  prix={boutiques.prix}
                />
              ))}
            </div>
          </div>
        )}
      </DivCard>
    </Section>
  );
}

export default BackOffice;
