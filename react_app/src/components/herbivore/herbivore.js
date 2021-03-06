import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";
import IsVisible from "react-is-visible";

//images large
import largeImgHerbivore1 from "../../assets/img/largeherbivore1.jpeg";
import largeImgHerbivore2 from "../../assets/img/largeherbivore2.jpeg";
import largeImgHerbivore3 from "../../assets/img/largeherbivore3.jpeg";
import largeImgHerbivore4 from "../../assets/img/largeherbivore4.jpeg";

// images Small
import smallImgHerbivore1 from "../../assets/img/smallherbivore1.jpg";
import smallImgHerbivore2 from "../../assets/img/smallherbivore2.jpg";
import smallImgHerbivore3 from "../../assets/img/smallherbivore3.jpg";
import smallImgHerbivore4 from "../../assets/img/smallherbivore4.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  & .Content {
    @keyframes title {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes text {
      0% {
        opacity: 0;
        transform: translateY(100px);
      }
      30% {
        opacity: 0;
        transform: translateY(100px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes image {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    &.visible {
      & p {
        animation: text 4000ms ease;
      }

      & h2 {
        animation: title 2500ms ease-in-out;
      }

      img {
        animation: image 6000ms ease;
      }
    }

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
    height: 100%;
    margin: 1rem 0;
    @media all and (min-width: 480px) and (max-width: 767px) {
      width: 25rem;
    }
    @media all and (max-width: 479px) {
      width: 20rem;
    }
  }
`;

const DivTitle = styled.div`
  text-align: center;
  color: ${colors.txt_black};

  & h1 {
    margin: 1rem 0;
  }

  & p {
    font-size: 1rem;
    margin: 0 0 1rem 0;
  }
`;

function Herbivore() {
  return (
    <Section>
      <DivTitle>
        <h1> La salle des Herbivores </h1>
        <p> D??couvrez parmi les plus beaux squelettes jamais d??couverts </p>
      </DivTitle>

      <IsVisible>
        {(isVisible) => (
          <div className={isVisible ? "Content visible" : "Content"}>
            <div className="texte">
              <h2> Le Tric??ratops : </h2>
              <p>
                D??couvert en 1884 par Endy Ford dans les dunes du Sahara, elle
                se fit par hasard lors de la construction d'un b??timent. Le
                temps de fouille et l'arch??ologie dura huit ans, d'autres os de
                diff??rentes esp??ces furent d??couverts en m??me temps !
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgHerbivore1}
                largeImgSrc={largeImgHerbivore1}
                alt="image de dinosaure"
              />
            </div>
          </div>
        )}
      </IsVisible>

      <IsVisible>
        {(isVisible) => (
          <div className={isVisible ? "Content visible" : "Content"}>
            <div className="texte">
              <h2> Le St??gosaure : </h2>
              <p>
                St??gosaure, le saurien cuirass??, est un dinosaure qui v??cut lors
                du Jurassique, l'??ge d'or des dinosaures. Il existait plusieurs
                esp??ces, regroup??es sous le genre Stegosaurus, pour d??signer ces
                formidables herbivores qui se d??pla??aient lentement sur leurs
                quatre pattes puissantes.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgHerbivore2}
                largeImgSrc={largeImgHerbivore2}
                alt="image de dinosaure"
              />
            </div>
          </div>
        )}
      </IsVisible>

      <IsVisible>
        {(isVisible) => (
          <div className={isVisible ? "Content visible" : "Content"}>
            <div className="texte">
              <h2> Le Brontosaurus : </h2>
              <p>
                Brontosaurus brontosaure en fran??ais est un genre de dinosaures
                herbivores sauropodes g??ants de la famille des diplodocid??s,
                d??couvert en 1879 par Charles Marsh. Il a longtemps ??t?? confondu
                avec l'apatosaure auquel il ressemble.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgHerbivore3}
                largeImgSrc={largeImgHerbivore3}
                alt="image de dinosaure"
              />
            </div>
          </div>
        )}
      </IsVisible>

      <IsVisible>
        {(isVisible) => (
          <div className={isVisible ? "Content visible" : "Content"}>
            <div className="texte">
              <h2> Le Sauropode : </h2>
              <p>
                Groupe de dinosaures caract??ris??s par une grande taille, un cou
                et une queue allong??s, une posture quadrup??de et un r??gime
                herbivore. Ce sont les plus grands de tous les dinosaures et les
                plus gros animaux terrestres qui aient jamais exist??.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgHerbivore4}
                largeImgSrc={largeImgHerbivore4}
                alt="image de dinosaure"
              />
            </div>
          </div>
        )}
      </IsVisible>
    </Section>
  );
}

export default Herbivore;
