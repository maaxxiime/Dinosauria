import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import Card from "./productcard";


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
    flex-direction: column;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    align-items: center;
    &-top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const ValidDiv = styled.div`
display: flex;
flex-direction: column;
margin: 1rem;
text-align: center;
border: 2px solid ${colors.txt_black};
border-radius: 1rem;

& #total {
  font-size: 1rem;
}

& .myBtn {
  margin: 1rem 0 0 0;
}
`;

function Panier() {
  const [ShopCard1, setShopCard1] = useState(null);
  const [ShopCard2, setShopCard2] = useState(null);
  var panier = JSON.parse(localStorage.getItem("panier"));


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

  useEffect(() => {
    getboutiques();
  }, []);

  let QteMusée = panier.musée;
  let PrixMusée = QteMusée * 10;

  let QteCinéma = panier.cinéma;
  let PrixCinéma = QteCinéma * 5;

  let QteJardin = panier.jardin;
  let PrixJardin = QteJardin * 5;

  let QteCampement = panier.campement;
  let PrixCampement = QteCampement * 15;

  let Total = PrixMusée + PrixCinéma + PrixJardin + PrixCampement;
  
  function validPanier() {

  }

  return (
    <MainSection>
      <h1> Votre panier </h1>
      <p className="low-title">Vous pouvez le modifier ici si besoin</p>

      {ShopCard2 && (
        <div className="container">
          <div className="container-top">
            {ShopCard1.map((boutiques) => (
              <Card
                key={boutiques._id}
                titre={boutiques.titre}
                description={boutiques.description}
                prix={boutiques.prix}
              />
            ))}
          </div>
          <div className="container-bottom">
            {ShopCard2.map((boutiques) => (
              <Card
                key={boutiques._id}
                titre={boutiques.titre}
                description={boutiques.description}
                prix={boutiques.prix}
              />
            ))}
          </div>
        </div>
      )}
      
      <ValidDiv>
        <p> Votre total est de : </p>
        <p id="total" className="bold"> {Total} € TTC </p>
      <Btn
        onclick={() => validPanier()}
        disabled={false}
        bgGradient={colors.btn_gradient}
        textcolor={colors.txt_white}
        bd={null}
        bdhover={colors.btn_blue}
        bghover={null}
        text="Valider le panier"
      />
      </ValidDiv>
    </MainSection>
  );
}

export default Panier;
