import axios from "axios";
import { apiurl } from "../variables";
import { useState, useEffect } from "react";
import styled from "styled-components";
import BackOfficeCard from "./backcard";
import colors from "../variables.js";
import Btn from "../button";
import defautimg from "../../assets/img/billet.png";

function BackOffice() {
  const [ShopCard1, setShopCard1] = useState(null);
  const [ShopCard2, setShopCard2] = useState(null);
  const usertoken = JSON.parse(window.localStorage.getItem("user")).token;

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
    const config = {
      headers: {
        Authorization: "Bearer " + usertoken,
      },
    };
    let titre = document.getElementById("titre");
    let description = document.getElementById("titre");
    let prix = document.getElementById("titre");

    const formData = new FormData();
    titre.value && formData.append("titre", titre.value);
    description.value && formData.append("description", description.value);
    prix.value && formData.append("prix", prix.value);
    // && (si value est rempli => effectue le code)

    axios
      .post(apiurl + "/boutiques/" + formData, config)
      .then(function (res) {
        console.log(res);
        window.location.reload();
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  useEffect(() => {
    getboutiques();
  }, []);

  return (
    <section>
      <h1> Back-Office </h1>
      <p className="low-title">
        Créer, modifier ou supprimer des produits à volonté !
      </p>

      <div>
        <h1> Créer un produit </h1>
        <form>
          <label>
            titre
            <input
              type="texte"
              id="titre"
              placeholder="titre"
              name="titre"
            ></input>
          </label>

          <label>
            description
            <input
              type="texte"
              id="description"
              placeholder="description"
              name="description"
            ></input>
          </label>

          <label>
            prix
            <input
              type="number"
              id="prix"
              placeholder="prix"
              name="prix"
            ></input>
          </label>
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
      </div>

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
    </section>
  );
}

export default BackOffice;
