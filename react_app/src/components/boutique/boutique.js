import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";
import Card from "./shopcard";
import ticket from "../../assets/img/billet.png"
import cinema from "../../assets/img/billet-de-cinema.png"
import feu from "../../assets/img/feu-de-camp.png"
import plante from "../../assets/img/feuille-de-monstera.png"


const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
        margin: 1rem 0 1rem 0;
    }

    & .low-title {
        margin: 0 0 2rem 0;
    }

    & .container {
    display: flex;
    width: 90%;
    justify-content: space-between;
    }
`;

function Boutique() {

    const [ShopCard, setShopCard] = useState(null);

    function getboutiques() {
  
      axios
        .get(apiurl + "/boutiques/")
        .then((res) => {
          console.log(res);
          setShopCard(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      getboutiques();
    }, []);


    return (
        <MainSection>
      <h1>Boutique de Dinosauria </h1>
      <p className="low-title"> Choisissez les produits qui vous intéresse ! </p>

      {ShopCard && (
          <div className="container">
            {ShopCard.map((boutiques) => (
              <Card
                src={ticket}
                titre={boutiques.titre}
                description={boutiques.description}
                prix={boutiques.prix}
              />
            ))}
          </div>
        )}
    </MainSection>
    )
}

export default Boutique;