import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiurl } from "../variables";
import Card from "./shopcard";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    text-align: center;
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

function Boutique(props) {
  const [ShopCard1, setShopCard1] = useState(null);
  const [ShopCard2, setShopCard2] = useState(null);

  function getboutiques() {
    axios
      .get(apiurl + "/boutiques/")
      .then((res) => {
        console.log(res);
        //slice sert à séparer les élément, ShopCard1 affiche les 2 premier élément du tableau et ShopCard2 affiche les suivant
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

  return (
    <MainSection>
      <h1> Boutique de Dinosauria </h1>
      <p className="low-title">
        {" "}
        Choisissez les produits qui vous intéressent !{" "}
      </p>

      {ShopCard2 && (
        <div className="container">
          <div className="container-top">
            {ShopCard1.map((boutiques) => (
              <Card
                key={boutiques._id}
                id={boutiques._id}
                img={boutiques.image}
                titre={boutiques.titre}
                description={boutiques.description}
                prix={boutiques.prix}
                mot_clé={boutiques.mot_clé}
                TotalItems={props.TotalItems}
                setTotalItems={props.setTotalItems}
              />
            ))}
          </div>
          <div className="container-bottom">
            {ShopCard2.map((boutiques) => (
              <Card
                key={boutiques._id}
                id={boutiques._id}
                img={boutiques.image}
                titre={boutiques.titre}
                description={boutiques.description}
                prix={boutiques.prix}
                mot_clé={boutiques.mot_clé}
                TotalItems={props.TotalItems}
                setTotalItems={props.setTotalItems}
              />
            ))}
          </div>
        </div>
      )}
    </MainSection>
  );
}

export default Boutique;
