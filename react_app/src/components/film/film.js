import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";

//images large
import largeCine1 from "../../assets/img/largecine1.jpg";
import largeCine2 from "../../assets/img/largecine2.jpg";

// images Small
import smallCine1 from "../../assets/img/smallcine1.jpg";
import smallCine2 from "../../assets/img/smallcine2.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .Content {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: ${colors.background_black};
    color: ${colors.txt_white};
    @media all and (min-width: 480px) and (max-width: 767px) {
      flex-direction: column-reverse;
    }
    @media all and (max-width: 479px) {
      flex-direction: column-reverse;
    }

    & .texte {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 20%;
      margin: 0 10% 0 40%;

      & h2 {
        margin: 1rem 0;
      }

      & p {
        margin: 0.3rem;
      }
      @media all and (min-width: 768px) and (max-width: 1023px) {
        margin: 0 5% 0 30%;
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        width: 100%;
        margin: 0;
        align-items: center;
        & p {
          width: 90%;
          margin: 0 0 1rem 0;
        }
        & h2 {
          width: 90%;
        }
      }
      @media all and (max-width: 479px) {
        width: 100%;
        margin: 0;
        align-items: center;
        & p {
          width: 90%;
          margin: 0 0 1rem 0;
        }
        & h2 {
          width: 90%;
        }
      }
    }
  }
  & .Content:nth-child(odd) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: auto;
    background-color: ${colors.background_white};
    color: ${colors.txt_black};

    & .texte {
      display: flex;
      flex-direction: column;
      width: 20%;
      margin: 0 40% 0 10%;
      @media all and (min-width: 768px) and (max-width: 1023px) {
        margin: 0 30% 0 5%;
      }
      @media all and (min-width: 480px) and (max-width: 767px) {
        width: 100%;
        margin: 0;
        align-items: center;

        & p {
          width: 90%;
          margin: 0 0 1rem 0;
        }
        & h2 {
          width: 90%;
        }
      }
      @media all and (max-width: 479px) {
        width: 100%;
        margin: 0;
        align-items: center;

        & p {
          width: 90%;
          margin: 0 0 1rem 0;
        }
        & h2 {
          width: 90%;
        }
      }
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
      flex-direction: column-reverse;
    }
    @media all and (max-width: 479px) {
      flex-direction: column-reverse;
    }
  }

  & .div-img {
    width: 500px;
    height: 350px;
    margin: 1rem 0;
{


    @media all and (min-width: 480px) and (max-width: 767px) {
      width: 25rem;
    }
    @media all and (max-width: 479px) {
      width: 20rem;
    }
  }
`;

const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${colors.txt_black};
  & h1 {
    margin: 1rem 0;
    width: 31rem;
  }
`;

function Film() {
  return (
    <Section>
      <DivTitle>
        <h1> Revivez l'histoire des dinosaures à travers le film en VR </h1>
      </DivTitle>
      <div className="Content">
        <div className="texte">
          <h2> Caractéristiques du film : </h2>
          <p>
            Le film retrace l'histoire des dinosaures sur les trois éres
            majeures :
          </p>
          <p> Le Trias : -245 à -200 millions d'années. </p>
          <p> Le Jurassique : -200 à -145 millions d'années. </p>
          <p> Le Crétacé : -145 à -65 millions d'années. </p>
          <p> Le film est adapté aux enfants de 8 ans et plus. </p>
          <p> Durée : 1 heure 40 minutes. </p>
        </div>
        <div className="div-img">
          <LoadImage smallImgSrc={smallCine1} largeImgSrc={largeCine1} />
        </div>
      </div>

      <div className="Content">
        <div className="texte">
          <h2> Caractéristiques des salles : </h2>
          <p>
            {" "}
            Doté de deux salles de 200m², d'un son dernier cri DOLBY ATMOS et
            équipées de projecteurs numériques BARCO.{" "}
          </p>
          <p>
            {" "}
            Nos salles de cinéma sont accessibles aux personnes à mobilité
            réduite.{" "}
          </p>
          <p>
            {" "}
            Toutes nos salles sont climatisées et équipées de fauteuils KESLO.{" "}
          </p>
          <p> Un grand parking gratuit à votre disposition. </p>
        </div>
        <div className="div-img">
          <LoadImage smallImgSrc={smallCine2} largeImgSrc={largeCine2} />
        </div>
      </div>
    </Section>
  );
}

export default Film;
