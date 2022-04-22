import styled from "styled-components";
import colors from "../variables";
import { useState, useEffect } from "react";
import Btn from "../button";
import axios from "axios";
import { apiurl } from "../variables";
import qs from "qs";
import Card from "./ComCard.js";


const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function ReadCommentaire() {
    
  const [ComCard, setComCard] = useState(null);

  function getcommentaire() {

    axios
      .get(apiurl + "/commentaires/readcommentaire")
      .then((res) => {
        console.log(res);
        setComCard(res.data.commentaires);
        console.log(ComCard);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getcommentaire();
  }, []);

  return (
    <MainSection>
      <h1>Commentaires</h1>

      {ComCard && (
          <div className="container">
            {ComCard.map((commentaires) => (
              <Card
                texte={commentaires.texte}
                date={commentaires.createdAt}
                identifiant={commentaires.identifiant}
              />
            ))}
          </div>
        )}
    </MainSection>
  );
}

export default ReadCommentaire;
