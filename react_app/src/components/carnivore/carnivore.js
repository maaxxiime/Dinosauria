import LoadImage from "../img-loader/loader";
import styled from "styled-components";
import colors from "../variables";
import IsVisible from "react-is-visible";

//images large
import largeImgCarnivore1 from "../../assets/img/largecarnivore1.jpeg";
import largeImgCarnivore2 from "../../assets/img/largecarnivore2.jpeg";
import largeImgCarnivore3 from "../../assets/img/largecarnivore3.jpeg";
import largeImgCarnivore4 from "../../assets/img/largecarnivore4.jpeg";

// images Small
import smallImgCarnivore1 from "../../assets/img/smallcarnivore1.jpg";
import smallImgCarnivore2 from "../../assets/img/smallcarnivore2.jpg";
import smallImgCarnivore3 from "../../assets/img/smallcarnivore3.jpg";
import smallImgCarnivore4 from "../../assets/img/smallcarnivore4.jpg";

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
    height: 350px;
    margin: 1rem 0;
    @media all and (min-width: 480px) and (max-width: 767px) {
      width: 25rem;
      height: 18rem;
    }
    @media all and (max-width: 479px) {
      width: 20rem;
      height: 14rem;
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

function Carnivore() {
  return (
    <Section>
      <DivTitle>
        <h1> La salle des Carnivores </h1>
        <p> D??couvrez parmi les plus beaux squelettes jamais d??couverts </p>
      </DivTitle>

      <IsVisible>
        {(isVisible) => (
          <div className={isVisible ? "Content visible" : "Content"}>
            <div className="texte">
              <h2> Le Tyrannosaure-Rex : </h2>
              <p>
                Le Tyrannosaurus-rex ou T-rex ??tait un dinosaure super pr??dateur
                au sommet de la cha??ne alimentaire, chassant notamment des
                herbivores de grande taille comme les Hadrosaures ou les
                C??ratopsiens, famille du c??l??bre Triceratops. Le nom
                Tyrannosaurus-rex signifie le ?? roi des l??zards tyrans ??.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgCarnivore1}
                largeImgSrc={largeImgCarnivore1}
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
              <h2> L'Allosaurus : </h2>
              <p>
                Allosaurus ?? l??zard diff??rent ?? est un genre ??teint de
                dinosaures th??ropodes ayant v??cu il y a 155 ?? 150 millions
                d'ann??es environ, au Kimm??ridgien et au Tithonien Jurassique
                sup??rieur dans ce qui est actuellement l'Am??rique du Nord et
                l'Europe.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgCarnivore2}
                largeImgSrc={largeImgCarnivore2}
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
              <h2> L'Albertosaurus : </h2>
              <p>
                Albertosaurus ce qui signifie ?? l??zard de l'Alberta ?? est un
                genre de dinosaure th??ropode de la famille des tyrannosaurid??s
                qui vivait dans l'Ouest de l'Am??rique du Nord au d??but du
                Maastrichtien Cr??tac?? sup??rieur, il y a 73 ?? 70 millions
                d'ann??es.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgCarnivore3}
                largeImgSrc={largeImgCarnivore3}
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
              <h2> Le Carnosaurus : </h2>
              <p>
                Carnotaure est un genre ??teint de dinosaures saurischiens
                pr??dateurs, de la famille des Abelisauridae. Il vivait en
                Argentine il y a environ 70 millions d'ann??es ?? la fin du
                Cr??tac?? sup??rieur et a ??t?? d??couvert par Jos?? Bonaparte.
              </p>
            </div>
            <div className="div-img">
              <LoadImage
                smallImgSrc={smallImgCarnivore4}
                largeImgSrc={largeImgCarnivore4}
                alt="image de dinosaure"
              />
            </div>
          </div>
        )}
      </IsVisible>
    </Section>
  );
}

export default Carnivore;
